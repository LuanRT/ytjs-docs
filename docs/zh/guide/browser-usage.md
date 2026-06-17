::: warning
此示例已过时。请查看 [kira](https://github.com/LuanRT/kira) 或 [sabr-shaka-example](https://github.com/LuanRT/googlevideo/tree/main/examples/sabr-shaka-example) 以获取最新的浏览器使用方法。
:::

# 浏览器使用
要在浏览器中使用 YouTube.js，你必须通过自己的服务器代理请求。Deno 中的简单代理实现可在 [`examples/browser/proxy/deno.ts`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/proxy/deno.ts) 找到。

你可以提供自己的 fetch 实现供 YouTube.js 使用，我们将使用它来修改请求并通过代理发送。有关使用 [Vite](https://vitejs.dev/) 的简单示例，请参阅 [`examples/browser/web`](https://github.com/LuanRT/YouTube.js/tree/main/examples/browser/web)。


```ts
import { Innertube } from 'youtubei.js/web';
await Innertube.create({
  fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
    // 修改请求
    // 并将其发送到代理

    return fetch(request, init);
  }
});
```

### 流媒体
YouTube.js 支持在浏览器中通过将 YouTube 的流媒体数据转换为 MPEG-DASH 清单来播放视频。

下面的示例使用 [`dash.js`](https://github.com/Dash-Industry-Forum/dash.js) 来播放视频。

```ts
import { Innertube } from 'youtubei.js/web';
import dashjs from 'dashjs';

const innertube = await Innertube.create({ /* 设置 - 见上文 */ });

// 获取视频信息
const videoInfo = await innertube.getInfo('videoId', { client: 'TV' });

// 现在转换为 dash 清单
// 再次强调 - 要能够在浏览器中播放视频 - 你必须通过自己的服务器代理请求
// 为此，我们提供了一个方法来在将 URL 写入清单之前转换它们
const manifest = await videoInfo.toDash(url => {
  // 修改 url
  // 并返回它
  return url;
});

const uri = "data:application/dash+xml;charset=utf-8;base64," + btoa(manifest);

const videoElement = document.getElementById('video_player');

const player = dashjs.MediaPlayer().create();
player.initialize(videoElement, uri, true);
```
