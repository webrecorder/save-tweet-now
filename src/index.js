import "tailwindcss/tailwind.css";
import "./shoelace";

import { LitElement, html } from "lit";
import { Web3Uploader } from "./web3";

const VERSION = __AWP_EXPRESS_VERSION__;

// const DEFAULT_URL = "https://twitter.com/IlyaKreymer/status/1590912407823843329";
const DEFAULT_URL = ""


// ===========================================================================
export default class LiveWebRecorder extends LitElement
{
  constructor() {
    super();
    this.archivePrefix = "https://web.archive.org/web/";
    this.proxyPrefix = "https://wabac-cors-proxy.webrecorder.workers.dev/proxy/";

    this.oembedPrefix = "https://oembed.link/";

    this.lastUrl = null;
    this.lastTs = null;
    this.lastTitle = null;

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
    };
  }

  firstUpdated() {
    document.addEventListener('fullscreenchange', () => {
      this.fullscreen = !!document.fullscreenElement;
    });

    this.showAbout = window.location.search === "?about";

    this.getPublicKey();

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

    setInterval(() => this.updateSize(), 5000);
  }

  async getPublicKey() {
    try {
      const resp = await fetch("w/api/publicKey");
      const json = await resp.json();
      if (json.publicKey) {
        this.publicKey = json.publicKey;
      }
    } catch (e) {
      console.error(e);
    }
  }

  handleHashChange(q) {
    this.url = this.validateUrl(q.get("url") || DEFAULT_URL);
    this.isInvalidUrl = !this.url
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
    this.size = json.size;
    if (this.isDone || this.uploading) {
      return;
    }

    if (this.waitForDoneId) {
      clearTimeout(this.waitForDoneId);
    }

    this.waitForDoneId = setTimeout(() => {
      if (this.size > 1000000) {
        this.isDone = true;
        this.markAsDone();
      }
    }, 2000);
  }

  markAsDone() {
    console.log("done?");
    if (this.autoupload) {
      this.onUpload();
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
    console.log('init')
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
        "baseUrlHashReplay": true,
        "recording": true,
        "noPostToGet": true
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
        <div class="mt-6">
          <sl-button type="primary" size="large" submit>Archive Tweet!</sl-button>
        </div>
      </sl-form>
    `
  }

  renderControls() {
    if (!this.url) {
      return this.renderURLInput()
    }
    if (this.cidLink) {
      return html`
      <div class="mt-6 font-semibold text-[1.25rem] leading-none">Tweet Pinned!</div>
      <div class="mt-3 leading-tight break-all text-center">
        <a href=${this.cidLink} target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors">
          ${this.cidLink}
        </a>
      </div>
      <div class="mt-6">
        <sl-button size="large" @click=${this.reset}>
          Save Another Tweet
        </sl-button>
      </div>
      `
    }
    if (this.uploading) {
      return html`
      <div>
        <sl-spinner class="text-[7rem]"></sl-spinner>
      </div>
      <div class="mt-6 font-semibold text-[1.25rem] leading-none">Pinning Tweet</div>
      <div class="mt-3 text-sm leading-none text-neutral-700">Pinning to IPFS</div>
      `
    }

    return html`
    <div class="mt-3 font-semibold text-[1.25rem] leading-none">Tweet Archived.</div>
      <div class="mt-3 leading-tight break-all text-center">
        <a href="w/api/c/${this.collId}/dl?pages=all&format=wacz" @click="${this.onDownload}" class="text-blue-500 hover:text-blue-600 transition-colors">
          Download Archived Tweet
        </a>
      </div>
      <div class="mt-6">
        <sl-button type="primary" size="large" @click=${this.onUpload}>Pin Tweet to IPFS</sl-button>
      </div>
    `
  //   return html`
  //   <div>
  //   <sl-radio-group class="flex" fieldset label="Archive Info">
  //     <div class="mb-2">Size Loaded: <b><sl-format-bytes value="${this.size || 0}"></sl-format-bytes></b></div>
  //     <sl-button type="primary" href="w/api/c/${this.collId}/dl?pages=all&format=wacz" @click="${this.onDownload}" target="_blank">
  //     <sl-icon class="text-lg mr-1" name="file-earmark-arrow-down"></sl-icon>Download Archive</sl-button>
  //   </sl-radio-group>
  //   <sl-radio-group class="flex" fieldset style="max-width: 500px" label="Share">
  //     <div class="mb-2">${this.cidLink ? html`
  //         Sharable Link:&nbsp;
  //         <a class="text-blue-800 font-bold break-all" target="_blank" href="${this.cidLink}">${this.cidLink}</a>
  //         <sl-button size="small" @click="${() => this.cidLink = null}">Reset</sl-button>` : html`
  //         ${this.uploading ? html`
  //         <sl-button disabled type="success">
  //         <sl-spinner style="--indicator-color: currentColor"></sl-spinner>
  //         Uploading...</sl-button>
  //         ${this.uploadProgress > 0 ? html`
  //         <sl-progress-bar class="mt-2" value="${this.uploadProgress}" style="--height: 6px;"></sl-progress-bar>` : ``}
  //         ` : html`

  //         <sl-button type="success" @click="${this.onUpload}">
  //         <sl-icon class="text-lg mr-1" name="share-fill"></sl-icon>
  //         Share to IPFS</sl-button>
  //         <div class="text-xs">(via <a target="_blank" href="https://web3.storage">web3.storage</a>)</div>
  //         `}
  //       `}
  //     </div>
  //   </sl-radio-group>
  // </div>`;
  }

  renderContent() {
    if (!this.url) return

    if (this.isInvalidUrl) {
      return html`<div class="my-8 text-gray-500">Sorry, only Twitter URLs can be loaded</div>`
    }
    if (this.collReady && this.iframeUrl) {
      return html`
      <iframe name="" src="${this.iframeUrl}"
      @load="${this.onFrameLoad}" allow="autoplay 'self'; fullscreen" allowfullscreen
      ></iframe>
      `
    }
    
    return ""
  }

  onDownload(e) {
    setTimeout(() => this.getPublicKey(), 1000);
    return true;
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
    this.isInvalidUrl = !this.url

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
        const title = event.data.title;
        //this.clearLoading(iframe.contentWindow);

        if (this.lastUrl !== url) {
          const req = {url, ts, title};
          //console.log(title, ts, url);

          this.lastTs = ts;
          this.lastUrl = url;
          this.lastTitle = title;

          if (url.startsWith(this.oembedPrefix)) {
            this.url = this.validateUrl(url.slice(this.oembedPrefix.length));
            this.isInvalidUrl = !this.url
          }

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
    const storage = new Web3Uploader();
    const url = this.url;
    const ts = this.lastTs;
   //const title = this.lastTitle;
    this.uploadProgress = 0;
    const cid = await storage.uploadWACZ(this.oembedPrefix + url, ts, `w/api/c/${this.collId}/dl?pages=all&format=wacz`, (size) => {
      this.uploadProgress = this.size ? Math.round(100.0 * size / this.size) : 0;
    });
    this.cidLink = `https://w3s.link/ipfs/${cid}/`;
    window.dispatchEvent(new CustomEvent("archive-done", {detail: {cid}}));

    this.uploading = false;
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
    window.location.hash = ''
    this.cidLink = undefined
    this.collReady = undefined
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
