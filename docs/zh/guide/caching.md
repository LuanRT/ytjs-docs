# 缓存
缓存转换后的播放器和会话实例可以大大提高性能。我们的 `UniversalCache` 实现根据环境使用不同的缓存方法。

在 Node.js 中，我们使用 `node:fs` 模块，在 Deno 中使用 `Deno.writeFile()`，在浏览器中使用 `indexedDB`。

默认情况下，缓存将数据存储在操作系统的临时目录中（或浏览器中的 `indexedDB`）。

下面的示例创建一个非持久缓存。
```ts
import { Innertube, UniversalCache } from 'youtubei.js';
const innertube = await Innertube.create({ cache: new UniversalCache(false) });
```

你可以通过指定缓存目录的路径使其持久化，如果目录不存在将会创建。
```ts
const innertube = await Innertube.create({
  cache: new UniversalCache(
    // 启用持久缓存
    true,
    // 缓存目录的路径。如果目录不存在将会创建
    './.cache'
  )
});
```
