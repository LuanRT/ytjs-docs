# Getting Started

## Prerequisites
YouTube.js runs on Node.js, Deno, and modern browsers.

It requires a runtime with the following features:
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - On Node, we use [undici](https://github.com/nodejs/undici)'s fetch implementation, which requires Node.js 16.8+. If you need to use an older version, you may provide your own fetch implementation. See [providing your own fetch implementation](#custom-fetch) for more information. 
  - The `Response` object returned by fetch must thus be spec compliant and return a `ReadableStream` object if you want to use the `VideoInfo#download` method. (Implementations like `node-fetch` return a non-standard `Readable` object.)
- [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) and [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) are required.


## Installation
```bash
# NPM
npm install youtubei.js@latest

# Yarn
yarn add youtubei.js@latest

# Git (edge version)
npm install github:LuanRT/YouTube.js

# Deno
deno add npm:youtubei.js@latest
```

Deno (deprecated):
```ts
import { Innertube } from 'https://deno.land/x/youtubei/deno.ts';
```

## Basic Usage
```ts
import { Innertube } from 'youtubei.js';
const innertube = await Innertube.create(/* options */);
```

### Configuration Options

#### `lang` (string)
- **Description**: Language for the session.
- **Default**: `en`

#### `location` (string)
- **Description**: Geolocation setting.
- **Default**: `US`

#### `user_agent` (string)
- **Description**: User agent for InnerTube requests.
- **Default**: `undefined`

#### `account_index` (number)
- **Description**: The account index to use. This is useful if you have multiple accounts logged in. Works only with cookies.
- **Default**: `0`

#### `on_behalf_of_user` (string)
- **Description**: Page ID of the YouTube profile/channel to use, if the logged-in account has multiple profiles.
- **Default**: `undefined`

#### `visitor_data` (string)
- **Description**: A persistent visitor data string that allows YouTube to provide tailored content even when not logged in.
- **Default**: `undefined`

#### `po_token` (string)
- **Description**: Session-bound Proof of Origin Token (attestation token) used to confirm the request is from a real client.
- **Default**: `undefined`

#### `player_id` (string)
- **Description**: Player ID override. Can be used to work around temporary issues when YouTube introduces breaking changes by forcing an older player.
- **Default**: `undefined`

#### `retrieve_player` (boolean)
- **Description**: Specifies whether to retrieve the JS player. Disabling this will make session creation faster, but deciphering formats will not be possible.
- **Default**: `true`

#### `enable_safety_mode` (boolean)
- **Description**: Enables YouTube's safety mode, which prevents potentially unsafe content from being loaded.
- **Default**: `false`

#### `retrieve_innertube_config` (boolean)
- **Description**: Specifies whether to retrieve the InnerTube config. Useful for "onesie" requests.
- **Default**: `true`

#### `generate_session_locally` (boolean)
- **Description**: Generates session data locally instead of retrieving it from YouTube for better performance. This is ignored if a session is already cached.
- **Default**: `false`

#### `enable_session_cache` (boolean)
- **Description**: Caches session data for future use.
- **Default**: `true`

#### `device_category` (string)
- **Description**: Platform type for session (`DESKTOP`, `MOBILE`, etc.).
- **Default**: `DESKTOP`

#### `client_type` (string)
- **Description**: InnerTube client type (`WEB`, `ANDROID`, etc.).
- **Default**: `WEB`

#### `timezone` (string)
- **Description**: Time zone for the session.
- **Default**: `*`

#### `cache` (ICache)
- **Description**: Cache implementation.
- **Default**: `undefined`

#### `cookie` (string)
- **Description**: Cookies for authenticated sessions.
- **Default**: `undefined`

#### `fetch` (FetchFunction)
- **Description**: Custom fetch implementation.
- **Default**: `fetch`
