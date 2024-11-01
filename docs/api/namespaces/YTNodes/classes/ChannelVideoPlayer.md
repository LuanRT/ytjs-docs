[youtubei.js](../../../README.md) / [YTNodes](../README.md) / ChannelVideoPlayer

# Class: ChannelVideoPlayer

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new ChannelVideoPlayer()

> **new ChannelVideoPlayer**(`data`): [`ChannelVideoPlayer`](ChannelVideoPlayer.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`ChannelVideoPlayer`](ChannelVideoPlayer.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:15](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L15)

## Properties

### description

> **description**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:11](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L11)

***

### id

> **id**: `string`

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:9](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L9)

***

### published\_time

> **published\_time**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:13](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L13)

***

### title

> **title**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:10](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L10)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/helpers.ts#L8)

***

### view\_count

> **view\_count**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:12](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L12)

***

### type

> `static` **type**: `string` = `'ChannelVideoPlayer'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:7](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L7)

## Accessors

### published

> `get` **published**(): [`Text`](../../Misc/classes/Text.md)

#### Deprecated

This will be removed in a future release.
Please use [ChannelVideoPlayer.published_time](ChannelVideoPlayer.md#published_time) instead.

#### Returns

[`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:39](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L39)

***

### views

> `get` **views**(): [`Text`](../../Misc/classes/Text.md)

#### Deprecated

This will be removed in a future release.
Please use [ChannelVideoPlayer.view_count](ChannelVideoPlayer.md#view_count) instead.

#### Returns

[`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ChannelVideoPlayer.ts:29](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/classes/ChannelVideoPlayer.ts#L29)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

#### Returns

`InstanceType`\<`K`\[`number`\]\>

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:35](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/helpers.ts#L35)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is ChannelVideoPlayer & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is ChannelVideoPlayer & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:47](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/helpers.ts#L47)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Check if the node is of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/helpers.ts#L28)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Assert that the node has the given key and return it.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:57](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/parser/helpers.ts#L57)
