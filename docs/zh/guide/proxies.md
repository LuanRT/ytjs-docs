# 代理
你可以提供自己的 fetch 实现供 YouTube.js 使用。这在某些情况下很有用，可以在发送请求之前修改它们，并在返回响应之前转换它们（例如用于代理）。
```ts
// 提供 fetch 实现
const yt = await Innertube.create({
  fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
    // 使用你自己的 fetch 实现发起请求
    // 并返回响应
    return new Response(
      /* ... */
    );
  }
});
```
