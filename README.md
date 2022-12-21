# Save Tweet Now

Save Tweet Now is a fork of [ArchiveWeb.page Express](https://github.com/webrecorder/express.archiveweb.page) designed for a simpler
workflow or archiving a single embedded tweet at high-fidelity and optionally uploading to IPFS.


## Usage

This tool is a single-page-app that specifies the URL and whether to upload to IPFS.
To use, simply load the home page, or specify a URL and auto-upload settings via hashtag params:

```
https://save-tweet-now.link/#url=https://example.com&autoupload=1
```


## Loading Tweets

Browsers are generally not able to load any websites, so a proxy must be used to load from Twitter.

The system uses [wabac-cors-proxy](https://github.com/webrecorder/wabac-cors-proxy) to proxy data from the live
web via a Cloudflare Worker. This allows the system to load any website without browser 'cross-origin' restrictions.

All network traffic goes through the Cloudflare Worker, so this is not ideal for archiving non-public Tweets.

## Development

Install dependencies:
```
yarn
```

Start dev server:
```
yarn start-dev
```

Open in your browser: <http://localhost:10001>
