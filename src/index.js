import "tailwindcss/tailwind.css";
import "./shoelace";

import { LitElement, html } from "lit";
import { Web3Uploader } from "./web3";
import { SimpleCrawler } from "./simplecrawl";


// ===========================================================================
export default class LiveWebRecorder extends LitElement
{
  constructor() {
    super();
    this.archivePrefix = "https://web.archive.org/web/";
    this.proxyPrefix = "https://oldweb.today/proxy/";

    this.isLive = true;

    this.lastUrl = null;
    this.lastTs = null;
    this.lastTitle = null;

    this.size = 0;
    this.uploadProgress = 0;

    this.collReady = false;
    this.collAwait = null;

    this.hashUpdate = false;

    this.publicKey = null;

    this.crawler = null;
    this.crawlState = null;
    this.crawlSameOriginOnly = false;
    this.crawlSelector = "a[href]";

    this.fullscreen = false;
  }

  static get properties() {
    return {
      url: { type: String },
      ts: { type: String },

      isLive: { type: Boolean },
      loading: { type: Boolean },
      uploading: { type: Boolean },
      
      opts: { type: Object },
      inited: { type: Boolean },
      iframeUrl: { type: String },

      collReady: { type: Boolean },

      collId: { type: String },

      size: { type: Number },
      uploadProgress: { type: Number },

      cidLink: { type: String },

      archivePrefix: { type: String },
      proxyPrefix: { type: String },

      publicKey: { type: String },

      fullscreen: { type: Boolean },

      crawlState: { type: Object },
      crawlSameOriginOnly: { type: Boolean },
      crawlSelector: { type: String },
    };
  }

  firstUpdated() {
    document.addEventListener('fullscreenchange', () => {
      this.fullscreen = !!document.fullscreenElement;
    });

    this.getPublicKey();

    window.addEventListener("message", (event) => this.onReplayMessage(event));
    this.initSW();

    const onHashChange = () => {
      // guard against setting again
      if (this.hashUpdate) {
        this.hashUpdate = false;
        return;
      }
      const m = window.location.hash.slice(1).match(/\/?(?:([\d]+)\/)?(.*)/);
      
      if (!m) {
        return;
      }

      this.handleHashChange(m);
    };

    window.addEventListener("hashchange", () => onHashChange());
    onHashChange();

    window.addEventListener("beforeunload", () => {
      this.deleteColl(this.collId);
    });

    setInterval(() => this.updateSize(), 5000);
  }

  async getPublicKey() {
    try {
      const resp = await fetch("/w/api/publicKey");
      const json = await resp.json();
      if (json.publicKey) {
        this.publicKey = json.publicKey;
      }
    } catch (e) {
      console.error(e);
    }
  }

  handleHashChange(m) {
    this.ts = m[1] || "";
    this.url = m[2] || "https://example.com/";
    this.isLive = !this.ts;
    this.initCollection();
  }

  async updateSize() {
    if (!this.collId) {
      return;
    }
    const resp = await fetch(`w/api/c/${this.collId}`);
    const json = await resp.json();
    this.size = json.size;
  }

  async initSW() {
    const scope = "./";

    await navigator.serviceWorker.register("./sw.js", {scope});

    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data.msg_type === "collAdded" && event.data.name === this.collId && this.collAwait) {
        this.collAwait();
      }
    });
  }

  initCollection() {
    const baseUrl = new URL(window.location);
    baseUrl.hash = "";

    this.deleteColl(this.collId);

    this.collId = randomId();
    this.cidLink = null;
    this.uploading = false;

    const msg = {
      msg_type: "addColl",
      name: this.collId,
      type: "recordingproxy",
      file: {"sourceUrl": `proxy:${this.proxyPrefix}`},
      skipExisting: false,
      extraConfig: {
        "prefix": this.proxyPrefix, 
        "isLive": false,
        "archivePrefix": this.archivePrefix,
        "baseUrl": baseUrl.href,
        "baseUrlHashReplay": true,
        "recording": true,
        "noPostToGet": true
      },
    };

    //this.dispatchEvent(new CustomEvent("load-started"));
    this.iframeUrl = `/w/${this.collId}/${this.ts}mp_/${this.url}`;

    this.hashUpdate = true;
    window.location.hash = this.ts ? `#${this.ts}/${this.url}` : `#${this.url}`;

    this.collReady = false;
    this.loading = true;
    this.crawler = null;
    this.crawlState = null;

    new Promise((resolve) => {
      this.collAwait = resolve;
    }).then(() => {this.collReady = true; this.hashUpdate = false; });

    if (!navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        navigator.serviceWorker.controller.postMessage(msg);
      });
    } else {
      navigator.serviceWorker.controller.postMessage(msg);
    }
  }

  createRenderRoot() {
    return this;
  }

  renderCrawlInfo() {
    const status = this.crawlState && this.crawlState.status || "not_started";

    if (status === "not_started") {
      return html`<sl-button @click="${this.onCrawlStart}">Crawl Links</sl-button>`;
    }

    const done = this.crawlState.count === this.crawlState.total;

    let title;

    switch (status) {
      case "paused":
        title = "Resume";
        break;

      case "running":
        title = "Pause";
        break;

      case "done":
        title = "Done";
        break;
    }
    
    return html`
      <sl-button @click="${this.onCrawlPauseToggle}" ?disabled="${done}">${title}</sl-button>
      <sl-button @click="${this.onCrawlCancel}" ?disabled="${done}">Cancel</sl-button>
      <div class="mt-2">Status: <b>Crawled ${this.crawlState.count} of ${this.crawlState.total}</div>`;
  }

  renderControls() {
    return html`
    <div class="flex flex-wrap mt-2">
    <sl-radio-group class="flex" fieldset label="Load From:">
      <sl-radio class="mr-1" ?checked="${this.isLive}"
      @sl-change="${() => this.isLive = true}">Live Web Page</sl-radio>

      <div class="flex items-baseline">
        <sl-radio class="mr-1" ?checked="${!this.isLive}"
        @sl-change="${() => this.isLive = false}">Archived on:</sl-radio>

        <div class="flex flex-col mt-2">
          <sl-input id="ts" class="text-sm rounded rounded-md"
          .value="${tsToDateMin(this.ts || "19960101")}" placeholder="YYYY-MM-DD hh:mm:ss"
          ?disabled="${this.isLive}"></sl-input>
          <span class="text-xs">(via Internet Archive)</span>
        </div>
      </div>
    </sl-radio-group>


    ${this.loading ? html`
      <span class="flex items-center ml-4 mt-4">
        <sl-spinner class="text-4xl mr-4"></sl-spinner>Loading, Please wait...
      </span>` : html`

      <sl-radio-group class="flex" fieldset label="Simple Crawling">
        <details class="w-full mb-2">
          <summary>Options</summary>
          <span class="text-xs">Select: <sl-input size="small" .value="${this.crawlSelector}" @sl-change="${this.onCrawlSetSelector}"></sl-input>
          </span>
          <sl-checkbox size="small" ?checked="${this.crawlSameOriginOnly}"
            @sl-change="${this.onCrawlToggleOriginOnly}"><span class="text-xs">Same-Domain Links Only</span>
          </sl-checkbox>
        </details>
        ${this.renderCrawlInfo()}
      </sl-radio-group>

      <sl-radio-group class="flex" fieldset label="Archive Info">
        <div class="mb-2">Size Loaded: <b><sl-format-bytes value="${this.size || 0}"></sl-format-bytes></b></div>
        <sl-button type="primary" href="w/api/c/${this.collId}/dl?pages=all&format=wacz" @click="${this.onDownload}" target="_blank">
        <sl-icon class="text-lg mr-1" name="file-earmark-arrow-down"></sl-icon>Download Archive</sl-button>
      </sl-radio-group>

      <sl-radio-group class="flex" fieldset style="max-width: 500px" label="Share">
        <details class="w-full mb-2">
          <summary>Options</summary>
          <sl-input size="small" class="" id="apikey" type="text"
          placeholder="Custom web3.storage API key"></sl-input>
        </details>
        <div class="mb-2">${this.cidLink ? html`
            Sharable Link:&nbsp;
            <a class="text-blue-800 font-bold break-all" target="_blank" href="${this.cidLink}">${this.cidLink}</a>
            <sl-button size="small" @click="${() => this.cidLink = null}">Reset</sl-button>` : html`
            ${this.uploading ? html`
            <sl-button disabled type="success">
            <sl-spinner style="--indicator-color: currentColor"></sl-spinner>
            Uploading...</sl-button>
            ${this.uploadProgress > 0 ? html`
            <sl-progress-bar class="mt-2" value="${this.uploadProgress}" style="--height: 6px;"></sl-progress-bar>` : ``}
            ` : html`

            <sl-button type="success" @click="${this.onUpload}">
            <sl-icon class="text-lg mr-1" name="share-fill"></sl-icon>
            Share to IPFS</sl-button>
            <div class="text-xs">(via web3.storage)</div>
            `}

          `}
        </div>
      </sl-radio-group>
      `}     
  </div>
    `;
  }

  renderContent() {
    return html`
    <sl-form @sl-submit="${this.onUpdateUrlTs}" class="grid grid-cols-1 gap-3 mb-4 mt-2">
    <div class="flex">
      <sl-button @click="${this.onFullScreenToggle}" style="width: 48px" class="mr-1" type="default">
        <sl-icon class="text-2xl align-middle" name="${this.fullscreen ? 'fullscreen-exit' : 'arrows-fullscreen'}"></sl-icon>
      </sl-button>
      ${this.loading ? html`
      <sl-button style="width: 48px" class="ml-1" type="default" loading="default"></sl-button>
      ` : html`
      <sl-button @click="${this.onRefresh}" style="width: 48px" class="mr-1" type="default">
        <sl-icon class="text-2xl align-middle" name="arrow-clockwise"></sl-icon>
      </sl-button>
      `}

      <sl-input class="rounded w-full" id="url" placeholder="Enter URL To load" .value="${this.url}">
      </sl-input>
    </div>

    ${this.renderControls()}
  </sl-form>

  ${this.collReady && this.iframeUrl ? html`
  <iframe sandbox="allow-downloads allow-modals allow-orientation-lock allow-pointer-lock\
    allow-popups allow-presentation allow-scripts allow-same-origin"
  class="border border-solid border-black" src="${this.iframeUrl}"
  @load="${this.onFrameLoad}" allow="autoplay 'self'; fullscreen" allowfullscreen
  ></iframe>` : ""}
    `
  }

  render() {
    return html`
      <style>
      :root {
        --sl-color-primary-600: var(--sl-color-primary-500);
        --sl-color-success-600: var(--sl-color-success-500);
        background-color: white;
      }

      replay-web-page {
        height: 500px;
      }

      .search-result::part(content) {
        height: 500px;
      }

      </style>

      ${!this.fullscreen ? html`
      <div class="flex absolute mt-1 right-0 text-xs">A project by&nbsp;<a target="_blank" href="https://webrecorder.net/"><img class="h-4" src="./assets/wrLogo.png"></div></a>
      <div class="flex justify-center m-2 text-2xl">ArchiveWeb.page Express</div>` : ``}

      ${this.renderContent()}
    `;
  }

  onDownload(e) {
    setTimeout(() => this.getPublicKey(), 1000);
    return true;
  }

  onShowResult(result, value) {
    result.show = value;
    this.searchResults = [...this.searchResults];
  }

  onUpdateUrlTs(event, always) {
    if (event) {
      event.preventDefault();
    }

    const url = this.renderRoot.querySelector("#url").value;
    let ts;

    if (this.isLive) {
      ts = "";
    } else {
      ts = this.renderRoot.querySelector("#ts").value.replace(/[^\d]/g, "");
    }

    // determine if an update is needed
    // if url is set and either url or ts have changed or always is set
    const changed = (url && (always || url !== this.actualUrl || ts !== this.ts));

    this.ts = ts;
    this.url = url;

    if (changed) {
      this.initCollection();
    }
  }

  onRefresh() {
    this.onUpdateUrlTs(null, true);
  }

  onFrameLoad(event) {
    try {
      //const iframe = this.renderRoot.querySelector("iframe");
      const loc = event.currentTarget.contentWindow.WB_wombat_location;
      if (loc) {
        this.actualUrl = loc.url;
        this.updateSize();
        this.loading = false;
      } else {
        this.actualUrl = null;
      }
    } catch(e) {
      console.log(e);
      this.actualUrl = null;
    }

    //this.dispatchEvent(new CustomEvent("load-finished", {detail}));
  }

  async onReplayMessage(event) {
    const iframe = this.renderRoot.querySelector("iframe");

    if (iframe && event.source === iframe.contentWindow) {
      if (event.data.wb_type === "load") {
        const ts = event.data.ts;
        const url = event.data.url;
        const title = event.data.title;
        //this.clearLoading(iframe.contentWindow);

        if (this.lastTs !== ts && this.lastUrl !== url) {
          const req = {url, ts, title};
          //console.log(title, ts, url);

          this.lastTs = ts;
          this.lastUrl = url;
          this.lastTitle = title;

          this.url = url;

          if (title && title !== url) {
            try {
              await fetch(`w/api/c/${this.collId}/pageTitle`, {method: "POST", body: JSON.stringify(req)});
            } catch (e) {
              console.warn(e);
            }
          }
        }

        this.updateSize();
      }
    }
  }

  async onUpload() {
    this.uploading = true;
    
    const apiKeyInput = this.renderRoot.querySelector("#apikey");
    const apiKey = apiKeyInput && apiKeyInput.value;

    const storage = new Web3Uploader(apiKey);
    const url = this.url;
    const ts = this.lastTs;
    const title = this.lastTitle;
    this.uploadProgress = 0;
    const cid = await storage.uploadWACZ(url, ts, `w/api/c/${this.collId}/dl?pages=all&format=wacz`, (size) => {
      this.uploadProgress = this.size ? Math.round(100.0 * size / this.size) : 0;
    });
    this.cidLink = `https://dweb.link/ipfs/${cid}/`;

    this.uploading = false;
  }

  onFullScreenToggle() {
    if (!this.fullscreen) {
      this.requestFullscreen();
      this.fullscreen = true;
    } else {
      document.exitFullscreen();
      this.fullscreen = false;
    }
  }

  async deleteColl(collId) {
    if (collId) {
      await fetch(`w/api/c/${collId}`, {method: "DELETE"});
    }
  }

  onCrawlStart() {
    this.crawler = new SimpleCrawler(this, this.renderRoot.querySelector("iframe"));
    this.crawler.start(this.url, this.crawlSelector, this.crawlSameOriginOnly);
  }

  onCrawlPauseToggle() {
    if (this.crawler) {
      this.crawler.togglePause();
    }
  }

  onCrawlCancel() {
    if (this.crawler) {
      this.crawler.status = "cancel";
    }
    this.crawler = null;
    this.crawlState = null;
  }

  onCrawlToggleOriginOnly(e) {
    this.crawlSameOriginOnly = e.currentTarget.checked;
    if (this.crawlState) {
      this.crawlState = {...this.crawlState, status: "not_started"};
    }
  }

  onCrawlSetSelector(e) {
    this.crawlSelector = e.currentTarget.value;
    if (this.crawlState) {
      this.crawlState = {...this.crawlState, status: "not_started"};
    }
  }
}

function randomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function tsToDateMin(ts) {
  if (!ts) {
    return "";
  }

  if (ts.length < 14) {
    ts += "00000101000000".substr(ts.length);
  }

  const datestr = (ts.substring(0, 4) + "-" +
    ts.substring(4, 6) + "-" +
    ts.substring(6, 8) + " " +
    ts.substring(8, 10) + ":" +
    ts.substring(10, 12) + ":" +
    ts.substring(12, 14));

  return datestr;
}

customElements.define("live-web-proxy", LiveWebRecorder);
