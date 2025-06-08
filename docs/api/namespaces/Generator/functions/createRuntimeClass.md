[youtubei.js](../../../README.md) / [Generator](../README.md) / createRuntimeClass

# Function: createRuntimeClass()

> **createRuntimeClass**(`classname`, `key_info`, `logger`): [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)

Given a classname and its resolved key info, create a new class

## Parameters

• **classname**: `string`

The name of the class

• **key\_info**: [`KeyInfo`](../type-aliases/KeyInfo.md)

The resolved key info

• **logger**: [`ParserErrorHandler`](../../Parser/type-aliases/ParserErrorHandler.md)

The logger to log errors to

## Returns

[`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)

Class based on the key info extending YTNode

## Defined in

[src/parser/generator.ts:411](https://github.com/LuanRT/YouTube.js/blob/e1650e12979e68b9546bc63989f86b651960a10a/src/parser/generator.ts#L411)
