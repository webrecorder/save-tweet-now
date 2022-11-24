
import { SWReplay } from "@webrecorder/wabac/src/swmain.js";

import { ExtAPI, RecordingCollections } from "@webrecorder/awp-sw";

// ===========================================================================
export class UpdatingAPI extends ExtAPI
{
  constructor(collections) {
    // eslint-disable-next-line no-undef
    super(collections, {softwareString: `Save Tweet Now ${__VERSION__}, using `});
  }
}

self.sw = new SWReplay({ApiClass: UpdatingAPI, CollectionsClass: RecordingCollections});



