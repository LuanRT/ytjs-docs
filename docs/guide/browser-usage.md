# Browser Usage
To use YouTube.js in the browser, you must proxy requests through your own server. A simple proxy implementation in Deno is available at [`examples/browser/proxy/deno.ts`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/proxy/deno.ts).

You may provide your own fetch implementation to be used by YouTube.js, which we will use to modify and send the requests through a proxy. See [`examples/browser/web`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/web) for a simple example using [Vite](https://vitejs.dev/).


```ts
// Multiple exports are available for the web.
// Unbundled ESM version
import { Innertube } from 'youtubei.js/web';
// Bundled ESM version
// import { Innertube } from 'youtubei.js/web.bundle';
// Production Bundled ESM version
// import { Innertube } from 'youtubei.js/web.bundle.min';
await Innertube.create({
  fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
    // Modify the request
    // and send it to the proxy

    // fetch the URL
    return fetch(request, init);
  }
});
```

### Streaming
YouTube.js supports streaming of videos in the browser by converting YouTube's streaming data into an MPEG-DASH manifest.

The example below uses [`dash.js`](https://github.com/Dash-Industry-Forum/dash.js) to play the video.

```ts
import { Innertube } from 'youtubei.js/web';
import dashjs from 'dashjs';

const innertube = await Innertube.create({ /* setup - see above */ });

// Get the video info
const videoInfo = await innertube.getInfo('videoId');

// now convert to a dash manifest
// again - to be able to stream the video in the browser - you must proxy the requests through your own server
// to do this, we provide a method to transform the URLs before writing them to the manifest
const manifest = await videoInfo.toDash(url => {
  // modify the url
  // and return it
  return url;
});

const uri = "data:application/dash+xml;charset=utf-8;base64," + btoa(manifest);

const videoElement = document.getElementById('video_player');

const player = dashjs.MediaPlayer().create();
player.initialize(videoElement, uri, true);
```

A working example can be found in [`examples/browser/web`](https://github.com/LuanRT/YouTube.js/blob/main/examples/browser/web).