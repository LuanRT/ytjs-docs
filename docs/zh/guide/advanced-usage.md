## 扩展库

YouTube.js 是模块化的，易于扩展。内部使用的大多数方法、类和实用程序都是公开的，可以用来实现你自己的扩展，而无需修改库的源代码。

例如，假设我们想实现一个检索视频信息的方法。我们可以使用 `Actions` 类的实例来做到这一点：
```ts
import { Innertube, UniversalCache } from 'youtubei.js';

const yt = await Innertube.create({ cache: new UniversalCache(true) });

async function getVideoInfo(videoId: string) {
  const videoInfo = await yt.actions.execute('/player', {
    // 你可以在这里添加任何额外的负载，它们将与发送到 InnerTube 的默认负载合并。
    videoId,
    client: 'YTMUSIC', // 要使用的 InnerTube 客户端。
    parse: true // 告诉 YouTube.js 解析响应（不发送到 InnerTube）。
  });

  return videoInfo;
}

const videoInfo = await getVideoInfo('jLTOuvBTLxA');
console.info(videoInfo);
```

或者，假设我们在解析的响应中找到一个 `NavigationEndpoint`（例如，一个按钮）。我们可以像这样轻松调用它：
```ts
import { Innertube, UniversalCache, YTNodes } from 'youtubei.js';

const yt = await Innertube.create({ cache: new UniversalCache(true) });

const artist = await yt.music.getArtist('UC52ZqHVQz5OoGhvbWiRal6g');
const albums = artist.sections[1].as(YTNodes.MusicCarouselShelf);

// 假设我们想点击"更多"按钮：
const button = albums.as(YTNodes.MusicCarouselShelf).header?.more_content;

if (button) {
  // 确保它存在后，我们可以使用以下代码调用其导航端点：
  const page = await button.endpoint.call(yt.actions, { parse: true });
  console.info(page);
}
```

## 使用解析器

YouTube.js 的解析器使你能够解析 InnerTube 响应并将其节点转换为易于操作的强类型对象。此外，它还提供了许多实用方法。

这是一个例子：
```ts
// 参见 ./examples/parser

import { Parser, YTNodes } from 'youtubei.js';
import { readFileSync } from 'fs';

// YouTube Music 的艺术家页面响应
const data = readFileSync('./artist.json').toString();

const page = Parser.parseResponse(JSON.parse(data));

const header = page.header?.item().as(YTNodes.MusicImmersiveHeader, YTNodes.MusicVisualHeader);

console.info('Header:', header);

// 解析器使用代理对象为处理 InnerTube 的数据数组添加类型安全和实用方法：
const tab = page.contents?.item().as(YTNodes.SingleColumnBrowseResults).tabs.firstOfType(YTNodes.Tab);

if (!tab)
  throw new Error('未找到目标选项卡');

if (!tab.content)
  throw new Error('目标选项卡似乎为空');

const sections = tab.content?.as(YTNodes.SectionList).contents.as(YTNodes.MusicCarouselShelf, YTNodes.MusicDescriptionShelf, YTNodes.MusicShelf);

console.info('Sections:', sections);
```

解析器的文档可以在[这里](https://github.com/LuanRT/YouTube.js/blob/main/src/parser)找到。
