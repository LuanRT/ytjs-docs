## Extending the library

YouTube.js is modular and easy to extend. Most of the methods, classes, and utilities used internally are exposed and can be used to implement your own extensions without having to modify the library's source code.

For example, let's say we want to implement a method to retrieve video info. We can do that by using an instance of the `Actions` class:
```ts
import { Innertube, UniversalCache } from 'youtubei.js';

const yt = await Innertube.create({ cache: new UniversalCache(true) });

async function getVideoInfo(videoId: string) {
  const videoInfo = await yt.actions.execute('/player', {
    // You can add any additional payloads here, and they'll merge with the default payload sent to InnerTube.
    videoId,
    client: 'YTMUSIC', // InnerTube client to use.
    parse: true // tells YouTube.js to parse the response (not sent to InnerTube).
  });

  return videoInfo;
}

const videoInfo = await getVideoInfo('jLTOuvBTLxA');
console.info(videoInfo);
```

Alternatively, suppose we locate a `NavigationEndpoint` in a parsed response (e.g., a button). We can easily call it like this:
```ts
import { Innertube, UniversalCache, YTNodes } from 'youtubei.js';

const yt = await Innertube.create({ cache: new UniversalCache(true) });

const artist = await yt.music.getArtist('UC52ZqHVQz5OoGhvbWiRal6g');
const albums = artist.sections[1].as(YTNodes.MusicCarouselShelf);

// Let's imagine that we wish to click on the “More” button:
const button = albums.as(YTNodes.MusicCarouselShelf).header?.more_content;

if (button) {
  // Having ensured that it exists, we can then call its navigation endpoint using the following code:
  const page = await button.endpoint.call(yt.actions, { parse: true });
  console.info(page);
}
```

## Using the parser

YouTube.js' parser enables you to parse InnerTube responses and convert their nodes into strongly-typed objects that are simple to manipulate. Additionally, it provides numerous utility methods.

Here's an example:
```ts
// See ./examples/parser

import { Parser, YTNodes } from 'youtubei.js';
import { readFileSync } from 'fs';

// YouTube Music's artist page response
const data = readFileSync('./artist.json').toString();

const page = Parser.parseResponse(JSON.parse(data));

const header = page.header?.item().as(YTNodes.MusicImmersiveHeader, YTNodes.MusicVisualHeader);

console.info('Header:', header);

// The parser uses a proxy object to add type safety and utility methods for working with InnerTube's data arrays:
const tab = page.contents?.item().as(YTNodes.SingleColumnBrowseResults).tabs.firstOfType(YTNodes.Tab);

if (!tab)
  throw new Error('Target tab not found');

if (!tab.content)
  throw new Error('Target tab appears to be empty');
  
const sections = tab.content?.as(YTNodes.SectionList).contents.as(YTNodes.MusicCarouselShelf, YTNodes.MusicDescriptionShelf, YTNodes.MusicShelf);

console.info('Sections:', sections);
```

Documentation for the parser can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/src/parser).