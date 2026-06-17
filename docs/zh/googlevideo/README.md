# GoogleVideo

用于处理 YouTube 专有视频流协议（UMP/SABR）的模块集合。可用于构建客户端或与现有媒体播放器集成（例如 [Shaka Player](https://shaka-player-demo.appspot.com/docs/api/index.html)）。

[API 参考 →](/googlevideo/api/)

[代码仓库](https://github.com/LuanRT/googlevideo)

## 安装

```bash
# NPM
npm install googlevideo

# JSR / Deno
npx jsr add @luanrt/googlevideo
deno add jsr:@luanrt/googlevideo

# GitHub
npm install LuanRT/googlevideo
```

## 基本用法

以下是使用 UMP 模块创建缓冲区、写入部分并处理它们的基本示例：

```typescript
import { CompositeBuffer, UmpReader, UmpWriter } from 'googlevideo/ump';
import { MediaHeader, UMPPartId } from 'googlevideo/protos';
import { concatenateChunks } from 'googlevideo/utils';
import { Part } from 'googlevideo/shared-types';

function handleMediaHeader(part: Part) {
  const mediaHeader = MediaHeader.decode(concatenateChunks(part.data.chunks));
  console.log('Media Header:', mediaHeader);
}

function handleMedia(part: Part) {
  const headerId = part.data.getUint8(0);
  console.log(`Media Part (Associated Header ID: ${headerId}):`, part.data.split(1).remainingBuffer.getLength(), 'bytes');
}

function handleMediaEnd(part: Part) {
  const headerId = part.data.getUint8(0);
  console.log(`Media End Part (Associated Header ID: ${headerId}):`, part.data.split(1).remainingBuffer.getLength(), 'bytes');
}

const umpPartHandlers = new Map<UMPPartId, (part: Part) => void>([
  [ UMPPartId.MEDIA_HEADER, handleMediaHeader ],
  [ UMPPartId.MEDIA, handleMedia ],
  [ UMPPartId.MEDIA_END, handleMediaEnd ]
]);

const buffer = mockUmpData();
const reader = new UmpReader(buffer);

reader.read((part) => {
  const handler = umpPartHandlers.get(part.type);
  if (handler) {
    handler(part);
  } else {
    console.warn(`No handler for part type: ${part.type}`);
  }
});

/**
 * 生成包含 MEDIA_HEADER 以及相应的 MEDIA 和 MEDIA_END 部分的模拟 UMP 数据缓冲区。
 * 此组表示单个音频段，这是你在真实 UMP 流中通常会看到的内容。
 */
function mockUmpData(): CompositeBuffer {
  const buffer = new CompositeBuffer();
  const writer = new UmpWriter(buffer);

  const audioHeaderId = 0;

  const partsToWrite: [UMPPartId, Uint8Array][] = [
    [
      UMPPartId.MEDIA_HEADER,
      MediaHeader.encode({
        headerId: audioHeaderId,
        videoId: "sOa4VVlI9tE",
        itag: 141,
        lmt: 1645502668395260,
        xtags: "",
        startRange: 5463800,
        isInitSeg: false,
        sequenceNumber: 0,
        durationMs: 0,
        formatId: {
          itag: 141,
          lastModified: 1645502668395260,
          xtags: ""
        },
        contentLength: 963966,
      }).finish()
    ],
    [ UMPPartId.MEDIA, new Uint8Array([ audioHeaderId, ...new Uint8Array(827609).fill(0) ]) ],
    [ UMPPartId.MEDIA, new Uint8Array([ audioHeaderId, ...new Uint8Array(136357).fill(0) ]) ],
    [ UMPPartId.MEDIA_END, new Uint8Array([ audioHeaderId ]) ]
  ];

  for (const [type, data] of partsToWrite) {
    writer.write(type, data);
  }

  return buffer;
}
```

预期输出：
```
Media Header: { ... }
Media Part (Associated Header ID: 0): 827609 bytes
Media Part (Associated Header ID: 0): 136357 bytes
Media End Part (Associated Header ID: 0): 0 bytes
```

> 更多高级用法示例可以在 [examples](https://github.com/LuanRT/googlevideo/tree/main/examples) 目录中找到。
