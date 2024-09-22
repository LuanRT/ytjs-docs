# Caching
Caching the transformed player and session instances can greatly improve performance. Our `UniversalCache` implementation uses different caching methods depending on the environment.

In Node.js, we use the `node:fs` module, `Deno.writeFile()` in Deno, and `indexedDB` in browsers.

By default, the cache stores data in the operating system's temporary directory (or `indexedDB` in browsers).

The example below creates a non-persistent cache.
```ts
import { Innertube, UniversalCache } from 'youtubei.js';
const innertube = await Innertube.create({ cache: new UniversalCache(false) });
```

You can make it persistent by specifying the path to the cache directory, which will be created if it doesn't exist.
```ts
const innertube = await Innertube.create({
  cache: new UniversalCache(
    // Enables persistent caching
    true, 
    // Path to the cache directory. The directory will be created if it doesn't exist
    './.cache' 
  )
});
```