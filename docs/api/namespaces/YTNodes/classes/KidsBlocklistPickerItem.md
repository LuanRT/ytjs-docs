[youtubei.js](../../../README.md) / [YTNodes](../README.md) / KidsBlocklistPickerItem

# Class: KidsBlocklistPickerItem

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new KidsBlocklistPickerItem()

> **new KidsBlocklistPickerItem**(`data`): [`KidsBlocklistPickerItem`](KidsBlocklistPickerItem.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`KidsBlocklistPickerItem`](KidsBlocklistPickerItem.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:21](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L21)

## Properties

### avatar

> **avatar**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:17](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L17)

***

### block\_button

> **block\_button**: `null` \| [`ToggleButton`](ToggleButton.md)

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:18](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L18)

***

### blocked\_entity\_key

> **blocked\_entity\_key**: `string`

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:19](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L19)

***

### child\_account\_description

> **child\_account\_description**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:16](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L16)

***

### child\_display\_name

> **child\_display\_name**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:15](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L15)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'KidsBlocklistPickerItem'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:11](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L11)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:29](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L29)

***

### blockChannel()

> **blockChannel**(): `Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Returns

`Promise`\<[`ApiResponse`](../../../interfaces/ApiResponse.md)\>

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:30](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L30)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is KidsBlocklistPickerItem & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is KidsBlocklistPickerItem & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:41](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L41)

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

[src/parser/helpers.ts:19](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L19)

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

[src/parser/helpers.ts:51](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/helpers.ts#L51)

***

### setActions()

> **setActions**(`actions`): `void`

#### Parameters

• **actions**: `undefined` \| [`Actions`](../../../classes/Actions.md)

#### Returns

`void`

#### Defined in

[src/parser/classes/ytkids/KidsBlocklistPickerItem.ts:46](https://github.com/LuanRT/YouTube.js/blob/4ae0cc5c523a2080e68d6c0c1437c78fe318ea30/src/parser/classes/ytkids/KidsBlocklistPickerItem.ts#L46)
