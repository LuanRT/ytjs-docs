# 快速开始

## 前置要求
YouTube.js 可在 Node.js、Deno 和现代浏览器上运行。

它需要具有以下特性的运行时：
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - 在 Node 上，我们使用 [undici](https://github.com/nodejs/undici) 的 fetch 实现，需要 Node.js 16.8+。如果需要使用更旧的版本，可以提供自己的 fetch 实现。详见[提供自定义 fetch 实现](#custom-fetch)。
  - fetch 返回的 `Response` 对象必须符合规范，如果要使用 `VideoInfo#download` 方法，必须返回 `ReadableStream` 对象。（像 `node-fetch` 这样的实现返回非标准的 `Readable` 对象。）
- 需要 [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) 和 [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)。


## 安装
```bash
# NPM
npm install youtubei.js@latest

# Yarn
yarn add youtubei.js@latest

# Git（最新版本）
npm install github:LuanRT/YouTube.js

# Deno
deno add npm:youtubei.js@latest
```

Deno（已弃用）：
```ts
import { Innertube } from 'https://deno.land/x/youtubei/deno.ts';
```

## 基本用法
```ts
import { Innertube } from 'youtubei.js';
const innertube = await Innertube.create(/* 选项 */);
```

### 配置选项

#### `lang` (string)
- **描述**：会话语言。
- **默认值**：`en`

#### `location` (string)
- **描述**：地理位置设置。
- **默认值**：`US`

#### `user_agent` (string)
- **描述**：InnerTube 请求的用户代理。
- **默认值**：`undefined`

#### `account_index` (number)
- **描述**：要使用的账户索引。如果有多个账户登录，这很有用。仅适用于 cookies。
- **默认值**：`0`

#### `on_behalf_of_user` (string)
- **描述**：要使用的 YouTube 个人资料/频道的页面 ID，如果登录账户有多个个人资料。
- **默认值**：`undefined`

#### `visitor_data` (string)
- **描述**：持久访客数据字符串，允许 YouTube 即使在未登录时也能提供定制内容。
- **默认值**：`undefined`

#### `po_token` (string)
- **描述**：会话绑定的原始证明令牌（认证令牌），用于确认请求来自真实客户端。
- **默认值**：`undefined`

#### `player_id` (string)
- **描述**：播放器 ID 覆盖。可用于在 YouTube 引入破坏性更改时通过强制使用旧播放器来解决临时问题。
- **默认值**：`undefined`

#### `retrieve_player` (boolean)
- **描述**：指定是否检索 JS 播放器。禁用此选项将使会话创建更快，但无法解密格式。
- **默认值**：`true`

#### `enable_safety_mode` (boolean)
- **描述**：启用 YouTube 的安全模式，防止加载潜在不安全的内容。
- **默认值**：`false`

#### `retrieve_innertube_config` (boolean)
- **描述**：指定是否检索 InnerTube 配置。对 "onesie" 请求有用。
- **默认值**：`true`

#### `generate_session_locally` (boolean)
- **描述**：在本地生成会话数据而不是从 YouTube 检索，以获得更好的性能。如果会话已缓存，则忽略此选项。
- **默认值**：`false`

#### `enable_session_cache` (boolean)
- **描述**：缓存会话数据以供将来使用。
- **默认值**：`true`

#### `device_category` (string)
- **描述**：会话的平台类型（`DESKTOP`、`MOBILE` 等）。
- **默认值**：`DESKTOP`

#### `client_type` (string)
- **描述**：InnerTube 客户端类型（`WEB`、`ANDROID` 等）。
- **默认值**：`WEB`

#### `timezone` (string)
- **描述**：会话的时区。
- **默认值**：`*`

#### `cache` (ICache)
- **描述**：缓存实现。
- **默认值**：`undefined`

#### `cookie` (string)
- **描述**：用于身份验证会话的 Cookies。
- **默认值**：`undefined`

#### `fetch` (FetchFunction)
- **描述**：自定义 fetch 实现。
- **默认值**：`fetch`

## 提供自定义 JavaScript 解释器

某些功能（如解密流媒体 URL）需要执行 YouTube 的混淆 JavaScript 代码。YouTube.js **不**包含用于此目的的内置解释器，因此你必须提供自己的解释器。

以下是使用 JavaScript 的 `Function` 构造函数的示例：

```ts
import { Innertube, Platform, Types } from 'youtubei.js/web';

Platform.shim.eval = async (data: Types.BuildScriptResult, env: Record<string, Types.VMPrimative>) => {
  const properties = [];

  if(env.n) {
    properties.push(`n: exportedVars.nFunction("${env.n}")`)
  }

  if (env.sig) {
    properties.push(`sig: exportedVars.sigFunction("${env.sig}")`)
  }

  const code = `${data.output}\nreturn { ${properties.join(', ')} }`;

  return new Function(code)();
}

const innertube = await Innertube.create(/* 选项 */);
// ...
```
