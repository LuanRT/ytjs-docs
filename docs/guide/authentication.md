# Authentication

## Cookies

This is the recommended way to authenticate with YouTube for most web based client types:

```js
const innertube = await Innertube.create({
  cookie: '...'
});
```

To get your cookies:
1. Open a new incognito/private window in your browser (this prevents your cookies from being rotated)
2. Log into YouTube in the incognito window
3. Open DevTools (F12)
4. Go to the Network tab
5. Copy the value of the `Cookie` header from any request to `youtube.com`
6. Close the incognito window after copying the cookies

## YouTube TV OAuth2 (Limited)

**Important Note:** Due to changes made by Google, OAuth2 authentication now only works with the TV Innertube client. For other client types, please use cookie-based authentication (see the Cookies section above).

The YouTube app for smart TVs uses OAuth2 for authentication, and since it also uses InnerTube, we can retrieve valid tokens with its client ID and client secret.

```ts
innertube.session.on('auth-pending', (data) => {
  // data.verification_url contains the authorization URL.
  // data.user_code contains the code to enter on the website.
});

innertube.session.on('auth', ({ credentials }) => {
  // Do something with the credentials, eg; save them to a file.
  console.log('Sign in successful');
});

// Fired when the access token expires.
innertube.session.on('update-credentials', ({ credentials }) => { /** do something with the updated credentials. */ });
  
await innertube.session.signIn(/* credentials */);
```

An example can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/examples/auth/yttv-oauth2.js).

### Caching

If you don't want to start the sign in flow every time you initialize the session, you can cache the credentials. Note that this is not a recommended practice, as it may lead to security issues.

```js
// If you use this, the next call to signIn won't fire 'auth-pending', instead just 'auth'
await innertube.session.oauth.cacheCredentials();
```

**Note:** When using cached credentials, you are still required to make a call to `Session#signIn()`.

### Revoking Credentials

The sign out method can be used to revoke and remove the current session's credentials.

```js
await innertube.session.signOut();

// if you don't want to sign out of the current session
// and only want to delete the cached credentials, use:
await innertube.session.oauth.removeCache();
```