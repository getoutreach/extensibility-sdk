<!-- omit in toc -->

# FAQ

- [Would it be possible to host the application page and Oauth api on different domains?](#would-it-be-possible-to-host-the-application-page-and-oauth-api-on-different-domains)

## Would it be possible to host the application page and Oauth api on different domains?

Due to the [OAuth flow implementation](outreach-api.md#oauth-sequence-diagram), the application needs to create a client cookie that will be read by the oauth server so the server could [cache the tokens](outreach-api.md#caching-the-tokens).

Because [browser can't set different cookie domain](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains) the host of API and application have to share the domain part.

For example:

- api.application-host.com can be used to implement [authorization endpoint](outreach-api.md#authorization-endpoint) and [token endpoint](outreach-api.md#token-endpoint)

- content.application-host.com can be used to serve the [application page](manifest.md#url) and support [connect endpoint](outreach-api.md#connect-endpoint)

Before making sdk.authenticate() call, a [cookie needs to be customized](outreach-api.md#customizing-the-sdk-user-cookie) so both servers will have access to the shared cookie.

```javascript
sdk.cookie.domain = 'application-host.com';
var token = await sdk.authenticate();
```
