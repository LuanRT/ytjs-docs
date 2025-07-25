[youtubei.js](../../../README.md) / [FormatUtils](../README.md) / toDash

# Function: toDash()

> **toDash**(`streaming_data`?, `is_post_live_dvr`?, `url_transformer`?, `format_filter`?, `cpn`?, `player`?, `actions`?, `storyboards`?, `caption_tracks`?, `options`?): `Promise`\<`string`\>

## Parameters

• **streaming\_data?**: [`IStreamingData`](../../APIResponseTypes/interfaces/IStreamingData.md)

• **is\_post\_live\_dvr?**: `boolean` = `false`

• **url\_transformer?**: [`URLTransformer`](../../Types/type-aliases/URLTransformer.md) = `...`

• **format\_filter?**: [`FormatFilter`](../../Types/type-aliases/FormatFilter.md)

• **cpn?**: `string`

• **player?**: [`Player`](../../../classes/Player.md)

• **actions?**: [`Actions`](../../../classes/Actions.md)

• **storyboards?**: [`PlayerStoryboardSpec`](../../YTNodes/classes/PlayerStoryboardSpec.md) \| [`PlayerLiveStoryboardSpec`](../../YTNodes/classes/PlayerLiveStoryboardSpec.md)

• **caption\_tracks?**: `CaptionTrackData`[]

• **options?**: `StreamingInfoOptions`

## Returns

`Promise`\<`string`\>

## Defined in

[src/utils/DashManifest.tsx:290](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/utils/DashManifest.tsx#L290)
