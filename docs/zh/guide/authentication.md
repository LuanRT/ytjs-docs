# 身份验证

## Cookies

这是大多数基于 Web 的客户端类型向 YouTube 进行身份验证的推荐方式：

```js
const innertube = await Innertube.create({
  cookie: '...'
});
```

获取你的 cookies：
1. 在浏览器中打开一个新的无痕/隐私窗口（这可以防止你的 cookies 被轮换）
2. 在无痕窗口中登录 YouTube
3. 打开开发者工具（F12）
4. 转到网络（Network）选项卡
5. 从任何对 `youtube.com` 的请求中复制 `Cookie` 标头的值
6. 复制 cookies 后关闭无痕窗口

## YouTube TV OAuth2（受限）

**重要提示：** 由于 Google 所做的更改，OAuth2 身份验证现在仅适用于 TV InnerTube 客户端。对于其他客户端类型，请使用基于 cookie 的身份验证（请参阅上面的 Cookies 部分）。

智能电视的 YouTube 应用使用 OAuth2 进行身份验证，由于它也使用 InnerTube，我们可以使用其客户端 ID 和客户端密钥检索有效令牌。

```ts
innertube.session.on('auth-pending', (data) => {
  // data.verification_url 包含授权 URL。
  // data.user_code 包含要在网站上输入的代码。
});

innertube.session.on('auth', ({ credentials }) => {
  // 对凭据执行某些操作，例如将它们保存到文件。
  console.log('登录成功');
});

// 当访问令牌过期时触发。
innertube.session.on('update-credentials', ({ credentials }) => { /** 对更新的凭据执行某些操作。 */ });

await innertube.session.signIn(/* 凭据 */);
```

可以在[这里](https://github.com/LuanRT/YouTube.js/blob/main/examples/auth/yttv-oauth2.js)找到示例。

### 缓存

如果你不想每次初始化会话时都启动登录流程，可以缓存凭据。请注意，这不是推荐的做法，因为可能会导致安全问题。

```js
// 如果使用此方法，下次调用 signIn 不会触发 'auth-pending'，而只会触发 'auth'
await innertube.session.oauth.cacheCredentials();
```

**注意：** 使用缓存的凭据时，仍然需要调用 `Session#signIn()`。

### 撤销凭据

注销方法可用于撤销和删除当前会话的凭据。

```js
await innertube.session.signOut();

// 如果你不想注销当前会话
// 只想删除缓存的凭据，请使用：
await innertube.session.oauth.removeCache();
```
