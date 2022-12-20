import "tailwindcss/tailwind.css";
import "./shoelace";

import { LitElement, html } from "lit";
//import { Web3Uploader } from "./web3";

//const VERSION = __AWP_EXPRESS_VERSION__;

const DEFAULT_URL = "";

// eslint-disable-next-line no-undef
const RWP_PREFIX = __RWP_PREFIX__;



// ===========================================================================
export default class LiveWebRecorder extends LitElement
{
  constructor() {
    super();
    this.proxyPrefix = "https://wabac-cors-proxy.webrecorder.workers.dev/proxy/";

    this.oembedPrefix = "https://oembed.link/";

    this.lastUrl = null;
    this.lastTs = null;
    //this.lastTitle = null;

    this.size = 0;
    this.uploadProgress = 0;

    this.autoupload = false;

    this.collReady = false;
    this.collAwait = null;

    this.hashUpdate = false;

    this.isDone = false;
  }

  static get properties() {
    return {
      url: { type: String },

      isInvalidUrl: { type: Boolean },
      loading: { type: Boolean },
      uploading: { type: Boolean },
      autoupload: { type: Boolean },
      isDone: { type: Boolean },
      
      opts: { type: Object },
      inited: { type: Boolean },
      iframeUrl: { type: String },

      title: { type: String },

      collReady: { type: Boolean },

      collId: { type: String },

      size: { type: Number },
      uploadProgress: { type: Number },

      cidLink: { type: String },

      archivePrefix: { type: String },
      proxyPrefix: { type: String },

      publicKey: { type: String },
    };
  }

  firstUpdated() {
    document.addEventListener("fullscreenchange", () => {
      this.fullscreen = !!document.fullscreenElement;
    });

    this.showAbout = window.location.search === "?about";

    //this.getPublicKey();

    window.addEventListener("message", (event) => this.onReplayMessage(event));
    this.initSW();

    const onHashChange = () => {
      // guard against setting again
      if (this.hashUpdate) {
        this.hashUpdate = false;
        return;
      }
      const q = new URLSearchParams(window.location.hash.slice(1));
      
      this.handleHashChange(q);
    };

    window.addEventListener("hashchange", () => onHashChange());
    onHashChange();

    window.addEventListener("beforeunload", () => {
      this.deleteColl(this.collId);
    });

    this.sizeUpdateId = setInterval(() => this.updateSize(), 3000);
  }

  handleHashChange(q) {
    this.url = this.validateUrl(q.get("url") || DEFAULT_URL);
    this.isInvalidUrl = !this.url;
    this.autoupload = (q.get("autoupload") === "1");

    if (this.url) {
      this.initCollection();
    }
  }

  async updateSize() {
    if (!this.collId) {
      return;
    }

    const resp = await fetch(`w/api/c/${this.collId}`);
    const json = await resp.json();

    const lastSize = this.size;
    this.size = json.size;

    // still loading
    if (lastSize !== json.size) {
      return;
    }

    if (this.isDone || this.uploading) {
      return;
    }

    if (this.waitForDoneId) {
      clearTimeout(this.waitForDoneId);
    }

    this.waitForDoneId = setTimeout(async () => {
      if (this.size < 1000000) {
        return;
      }

      const resp = await fetch(`w/api/c/${this.collId}/recPending`);
      const json = await resp.json();

      if (json.numPending !== 0) {
        console.log("waiting for completion:", json);
        return;
      }

      this.markAsDone();
    }, 1000);
  }

  async markAsDone() {
    this.isDone = true;

    await this.updateSize();

    if (this.autoupload) {
      this.onUpload();
    }
    if (this.sizeUpdateId) {
      clearInterval(this.sizeUpdateId);
    }
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
    console.log("init");
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
      //file: {"sourceUrl": `proxy:${this.proxyPrefix}`},
      file: {"sourceUrl": `proxy://${this.collId}`},
      skipExisting: false,
      extraConfig: {
        "prefix": this.proxyPrefix, 
        "isLive": false,
        "archivePrefix": this.archivePrefix,
        "baseUrl": baseUrl.href,
        //"baseUrlHashReplay": true,
        "recording": true,
        "noPostToGet": true,
        "firstPageOnly": true
      },
    };

    //this.dispatchEvent(new CustomEvent("load-started"));
    if (this.url && this.url.startsWith("https://twitter.com/")) {
      this.iframeUrl = `w/${this.collId}/mp_/${this.oembedPrefix}${this.url}`;
    } else {
      this.iframeUrl = "";
    }

    this.hashUpdate = true;
    //window.location.hash = `#${this.url}`;
    const q = new URLSearchParams();
    q.set("url", this.url);
    if (this.autoupload) {
      q.set("autoupload", "1");
    }
    window.location.hash = `#${q.toString()}`;

    this.collReady = false;
    this.loading = true;

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

  render() {
    return html`
    <div class="flex flex-col h-screen overflow-hidden pb-8 md:pb-0">
      <header class="flex-0 mt-12 mb-8 x-2">
        <h1 class="my-0 leading-none font-semibold text-[2rem] text-center">Save Tweet Now</h1>
      </header>
      <div class="flex-0 px-2 mb-8">
        <div class="panel p-8 shadow-sm flex flex-col items-center">
          ${this.renderControls()}
        </div>
      </div>
      <div class="flex-1 overflow-hidden tweetWrapper">
        ${this.renderContent()}
      </div>
    </div>
    `;
  }
  
  renderURLInput() {
    return html`
      <sl-form @sl-submit="${this.onUpdateUrl}" class="block w-full text-center">
        <sl-input class="w-full" id="url" placeholder="Enter Twitter URL (https://twitter.com/...) to load Tweet" .value="${this.url}" required>
        </sl-input>
        <sl-switch class="float-right" style="--thumb-size: 16px" ?checked=${this.autoupload} @sl-change="${() => this.autoupload = !this.autoupload}">Auto-upload to IPFS</sl-switch>
        <div class="mt-10">
          <sl-button type="primary" size="large" submit>Archive Tweet!</sl-button>
        </div>
      </sl-form>
    `;
  }

  renderControls() {
    if (!this.url) {
      return this.renderURLInput();
    }
    if (this.cidLink) {
      return html`
      <div class="mt-6 font-semibold text-[1.25rem] leading-none">Tweet Pinned!</div>
      <div class="mt-3 leading-tight break-all text-center">
        <a href=${this.cidLink} target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors">
          ${this.cidLink}
        </a>
      </div>
      ${this.renderSize()}
      <div class="mt-3 leading-tight text-center text-gray-400">
        Note: It may take a few minutes for the tweet to become available on the IPFS network.
      </div>
      <div class="mt-6">
        <sl-button size="large" @click=${this.reset}>
          Save Another Tweet
        </sl-button>
      </div>
      `;
    }
    if (this.uploading) {
      return html`
      <div>
        <sl-spinner class="text-[7rem]"></sl-spinner>
      </div>
      <div class="mt-6 font-semibold text-[1.25rem] leading-none">Pinning Tweet</div>
      <div class="mt-3 text-sm leading-none text-neutral-700">Pinning to IPFS</div>
      `;
    }

    if (!this.isDone) {
      return html`
      <div>
        <sl-spinner class="text-[7rem]"></sl-spinner>
      </div>
      <div class="mt-6 font-semibold text-[1.25rem] leading-none">Archiving Tweet</div>
      ${this.renderSize()}
       `;
    }

    return html`
    <div class="mt-3 font-semibold text-[1.25rem] leading-none">Tweet Archived!</div>
      ${this.renderSize()}
      <div class="mt-3 leading-tight break-all text-center">
        <a href="w/api/c/${this.collId}/dl?pages=all&format=wacz" target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors">
          Download Archived Tweet
        </a>
      </div>
      <div class="mt-6 w-max">
        <sl-button class="block w-full" type="primary" size="large" @click=${this.onUpload}>Pin Tweet to IPFS</sl-button>
        <sl-button class="block w-full mt-3" size="large" @click=${this.reset}>
          Archive Another Tweet
        </sl-button>
      </div>
      
    `;
  }

  renderSize() {
    return html`
      <div class="mt-3 leading-tight text-center text-gray-400">
        Total Size: <sl-format-bytes value="${this.size || 0}"></sl-format-bytes>
      </div>`;
  }

  renderContent() {
    if (!this.url) return;

    if (this.isInvalidUrl) {
      return html`<div class="my-8 text-gray-500">Sorry, only Twitter URLs can be loaded</div>`;
    }
    if (this.collReady && this.iframeUrl) {
      return html`
      <iframe name="" src="${this.iframeUrl}"
      @load="${this.onFrameLoad}" allow="autoplay 'self'; fullscreen" allowfullscreen
      ></iframe>
      `;
    }
    
    return "";
  }

  onShowResult(result, value) {
    result.show = value;
    this.searchResults = [...this.searchResults];
  }

  onUpdateUrl(event) {
    if (event) {
      event.preventDefault();
    }

    const url = this.renderRoot.querySelector("#url").value;

    // determine if an update is needed
    // if url is set and either url or ts have changed or always is set
    const changed = url && url !== this.actualUrl;

    this.url = this.validateUrl(url);
    this.isInvalidUrl = !this.url;

    if (changed) {
      this.initCollection();
    }
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

        this.updateSize();

        if (this.lastUrl !== url) {
          this.lastTs = ts;
          this.lastUrl = url;
          //this.lastTitle = title;

          if (url.startsWith(this.oembedPrefix)) {
            this.url = this.validateUrl(url.slice(this.oembedPrefix.length));
            this.isInvalidUrl = !this.url;
          }
        }
      }
    }
  }

  async loadTitle() {
    const url = this.oembedPrefix + this.url;
    const resp = await fetch(`w/${this.collId}/id_/${url}`);
    const text = await resp.text();
    const doc = new DOMParser().parseFromString(text, "text/html");
    const title = doc.documentElement.innerText.trim();

    const ts = this.lastTs;

    const req = {url, ts, title};

    // update title in wacz
    await fetch(`w/api/c/${this.collId}/pageTitle`, {method: "POST", body: JSON.stringify(req)});

    return title;
  }

  async onUpload() {
    this.uploading = true;
    //const storage = new Web3Uploader();
    //const url = this.url;
    //const ts = this.lastTs;
    //const title = this.lastTitle;
    this.uploadProgress = 0;

    //});
    const pageTitle = `Archived Tweet: ${await this.loadTitle()}`;

    const result = await this.ipfsAdd((size) => {
      this.uploadProgress = this.size ? Math.round(100.0 * size / this.size) : 0;
    }, {pageTitle});

    const { cid } = result;

    console.log(result);

    this.cidLink = `https://w3s.link/ipfs/${cid}/`;
    window.dispatchEvent(new CustomEvent("archive-done", {detail: {cid}}));

    this.uploading = false;
  }

  ipfsAdd(progressCallback, {pageTitle} = {}) {
    let pc;

    const p = new Promise((resolve, reject) => pc = {resolve, reject});

    const listener = (event) => {
      const { data } = event;

      if (!data || data.collId !== this.collId) {
        return;
      }

      switch (data.type) {
      case "ipfsProgress":
        if (progressCallback) {
          progressCallback(data.size);
        }
        break;

      case "ipfsAdd":
        if (data.result) {
          pc.resolve(data.result);
        } else {
          pc.reject();
        }
        navigator.serviceWorker.removeEventListener("message", listener);
        break;
      }
    };

    navigator.serviceWorker.addEventListener("message", listener);

    const replayOpts = {
      showEmbed: true,
      replayBaseUrl: RWP_PREFIX,
      pageTitle: pageTitle || "Archived Tweet",
      pageUrl: "page:0",
      //loading: "eager",
      gzip: false,
      customSplits: true
    };


    fetch(`w/api/c/${this.collId}/ipfs`, {
      method: "POST",
      body: JSON.stringify(replayOpts)
    });

    return p;
  }


  async deleteColl(collId) {
    if (collId) {
      await fetch(`w/api/c/${collId}`, {method: "DELETE"});
    }
  }

  validateUrl(url) {
    if (!url) {
      return "";
    }
    if (url.startsWith(this.oembedPrefix)) {
      url = url.slice(this.oembedPrefix.length);
    }
    const urlobj = new URL(url);
    if (urlobj.host !== "twitter.com") {
      return url;
    }
    urlobj.protocol = "https";
    urlobj.search = "";
    return urlobj.href;
  }

  reset() {
    window.location.hash = "";
    this.cidLink = undefined;
    this.collReady = undefined;
  }
}

function randomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

customElements.define("live-web-proxy", LiveWebRecorder);
