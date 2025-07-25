[youtubei.js](../../../README.md) / [Parser](../README.md) / parseArray

# Function: parseArray()

## parseArray(data, validTypes)

> **parseArray**\<`T`, `K`\>(`data`, `validTypes`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

Parses an array of items.

### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

### Parameters

• **data**: `undefined` \| [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)[]

The data to parse.

• **validTypes**: `K`

YTNode types that are allowed to be parsed.

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`InstanceType`\<`K`\[`number`\]\>\>

### Defined in

[src/parser/parser.ts:600](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/parser.ts#L600)

## parseArray(data, validType)

> **parseArray**\<`T`\>(`data`, `validType`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`T`\>

### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md) = [`YTNode`](../../Helpers/classes/YTNode.md)

### Parameters

• **data**: `undefined` \| [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)[]

• **validType**: [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<`T`\>

### Defined in

[src/parser/parser.ts:601](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/parser.ts#L601)

## parseArray(data)

> **parseArray**(`data`): [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

### Parameters

• **data**: `undefined` \| [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)[]

### Returns

[`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`YTNode`](../../Helpers/classes/YTNode.md)\>

### Defined in

[src/parser/parser.ts:602](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/parser.ts#L602)
