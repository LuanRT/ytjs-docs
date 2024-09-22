# Authentication

## OAuth2

### YouTube TV OAuth2

The YouTube app for smart TVs uses OAuth2 for authentication, and since it also uses InnerTube, we can retrieve valid tokens with its client ID and client secret. This is the recommended way to authenticate, as it doesn't require you to provide your own credentials.

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

A working example can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/examples/auth/yttv-oauth2.js).

### Custom OAuth2

Just like the official Data API, YouTube.js allows you to use your own OAuth2 credentials. A working example can be found [here](https://github.com/LuanRT/YouTube.js/blob/main/examples/auth/custom-oauth2-creds).

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

## Cookies

**NOTE:**
This is not as reliable as OAuth2.

```js
const innertube = await Innertube.create({
  cookie: '...'
});
```