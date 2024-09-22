# Proxies
You may provide your own fetch implementation to be used by YouTube.js. This can be useful in some cases to modify the requests before they are sent and transform the responses before they are returned (eg. for proxies).
```ts
// provide a fetch implementation
const yt = await Innertube.create({
  fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
    // make the request with your own fetch implementation
    // and return the response
    return new Response(
      /* ... */
    );
  }
});
```