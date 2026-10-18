# GoogleVideo
A collection of modules for handling YouTube's custom UMP format and SABR streaming protocol. Use it to build custom clients and downloaders, or integrate with existing media players (e.g., [Shaka Player](https://github.com/shaka-project/shaka-player)).

**[API Reference →](/googlevideo/api/)**

**[Repository](https://github.com/LuanRT/googlevideo)**

## Installation

```bash
# NPM
npm install googlevideo

# JSR / Deno
npx jsr add @luanrt/googlevideo
deno add jsr:@luanrt/googlevideo

# GitHub
npm install LuanRT/googlevideo
```

## Basic Usage
Below is a basic example using the UMP modules to create a buffer, write parts, and then read them:

> [!NOTE] 
> More advanced usage examples can be found in the [/examples](./examples/) directory.

```typescript
import { MediaHeader, UMPPartId } from 'googlevideo/protos';
import { CompositeBuffer, UmpReader, UmpWriter } from 'googlevideo/ump';
import { concatenateChunks } from 'googlevideo/utils';

const umpReader = new UmpReader({
  onPart: (type, data) => {
    switch (type) {
      case UMPPartId.MEDIA_HEADER: {
        const mediaHeader = MediaHeader.decode(concatenateChunks(data.chunks));
        console.log('Media Header:', mediaHeader);
        break;
      }
      case UMPPartId.MEDIA: {
        const headerId = data.getUint8(0);
        console.log(`Media Part (Associated Header ID: ${headerId}):`, data.split(1).remainingBuffer.getLength(), 'bytes');
        break;
      }
      case UMPPartId.MEDIA_END: {
        const headerId = data.getUint8(0);
        console.log(`Media End Part (Associated Header ID: ${headerId}):`, data.split(1).remainingBuffer.getLength(), 'bytes');
        break;
      }
    }
  }
});

function mockUmpData(): CompositeBuffer {
  const buffer = new CompositeBuffer();
  const writer = new UmpWriter(buffer);

  const audioHeaderId = 0;

  const partsToWrite: [UMPPartId, Uint8Array][] = [
    [
      UMPPartId.MEDIA_HEADER,
      MediaHeader.encode({
        itag: 141,
        videoId: "sOa4VVlI9tE",
        headerId: audioHeaderId,
        segmentLengthBytes: "963966",
        segmentByteRangeStart: "5463800",
        isInitializationSegment: false,
        lmt: "1645502668395260",
        segmentNum: 1,
        durationMs: "4000",
        formatId: {
          itag: 141,
          lastModified: "1645502668395260",
          xtags: ""
        },
      }).finish()
    ],
    [UMPPartId.MEDIA, new Uint8Array([audioHeaderId, ...new Uint8Array(827609).fill(0)])],
    [UMPPartId.MEDIA, new Uint8Array([audioHeaderId, ...new Uint8Array(136357).fill(0)])],
    [UMPPartId.MEDIA_END, new Uint8Array([audioHeaderId])]
  ];

  for (const [type, data] of partsToWrite)
    writer.write(type, data);

  return buffer;
}

umpReader.feed(mockUmpData());
```

Expected output:
```
Media Header: { ... }
Media Part (Associated Header ID: 0): 827609 bytes
Media Part (Associated Header ID: 0): 136357 bytes
Media End Part (Associated Header ID: 0): 0 bytes
```

> More advanced usage examples can be found in the [examples](https://github.com/LuanRT/googlevideo/tree/main/examples) directory.