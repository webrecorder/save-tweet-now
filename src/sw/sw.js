
import { SWReplay } from "@webrecorder/wabac/src/swmain.js";

import { ExtAPI } from "awp-core/src/index.js";
import { RecordingCollections } from "awp-core/src/index.js";

// ===========================================================================
export class UpdatingAPI extends ExtAPI
{
  constructor(collections) {
    // eslint-disable-next-line no-undef
    super(collections, {softwareString: `Save Tweet Now ${__AWP_EXPRESS_VERSION__}, using `});
  }
}

self.sw = new SWReplay({ApiClass: UpdatingAPI, CollectionsClass: RecordingCollections});



