# OAuth client registration and updates

Accessing [Outreach API](https://api.outreach.io/api/v2/docs) on behalf of Outreach users can be enabled via
[OAuth 2.0 protocol](https://datatracker.ietf.org/doc/html/rfc6749). In order to initiate OAuth flow partner
must acquire a set of OAuth credentials (`client_id` + `client_secret`) and register its parameters such as
`redirect_uris` and `scopes`.
This functionality is also available via self-service [Outreach Developer Portal](developer-portal.md).

There is a dedicated "Outreach API" section of the portal for registering and managing OAuth parameters.

This document will guide you through steps necessary to generate OAuth credentials, save parameters of your
OAuth application, test and finally publish the application to be easily accessible for end users.

## Generating OAuth credentials

OAuth applicaiton is an integral part of an Outreach app so the first step on the path to register OAuth client
is to [create an Outreach app](quick-start-guide.md#step-1---create-your-app).
And of course OAuth capabilities can be added to an existing Outreach app without affecting other capabilities of
that app such as its UI extensions.

Once app is created or opened for editing click on "Outreach API" section and turn on the Outreach API toggle:

![n/a](img/app-oauth-enable.png 'Outreach API enabled for an app')

There is a pair of OAuth credentials generate for each Outreach app with enabled "Outreach API": **Development
client** credentials and **Production client** credentials. The reason behind having two sets of credentials is
to enable quick self sevice setup to bootstrap the development and testing without undermining trust of
Outreach users. See next section for more details about the difference between the two clients.

Please note that clientIDs are preserved for the application. Disabling "Outreach API" and re-enabing it later
will keep OAuth clientIDs previously generated for the app.

> ⓘ Please be aware that OAuth client secrets are available in plain text only after generation. If you forget
to copy the values for any of the 'Development client' or 'Production client' the only way to aquire a secret
is to "Regenerate" it.

## "Development client" vs "Production client"

### Let's start with when each client becomes registered/available for usage in OAuth flow.

- Development client is provisioned with the latest version of 'Redirect URLs' and 'Scopes' within 2-3 minutes
after saving Outreach app in Development portal.
- Production client is provisioned on (app publishing)[developer-portal.md#creating-and-publishing-apps] and
the parameters of the OAuth client are fixed to the same values as of Development client at the moment of publishing

### When to use 'Development' clientID and when to use 'Production' clientID in links initiating OAuth flow?

It is expected that developers of third-party integration with Outreach will use 'Development client' credentials
while testing their solution and only give 'Production client' ID in the URLs to users of the integration once
it is tested and the Outreach app is published.

### What if URL with 'Development' clientID accidentally leaks to end users?

When a non-developer user clicks of OAuth flow URL which uses 'Development client' credentials the user will
see a warning that they should only Authorize the grant if they trust the developer/source of URL they clicked:

![n/a](img/oauth-dialog-with-warning.png 'Authorize with caution example')

### How to differentiate 'Development' and 'Production' clientID flow when requesting access token

After a user successfully authorizes third-party app OAuth flow the partner's server side gets `Authorization Grant`
request from user agent (browser) `GET <redirect_uri>?code=<authorization_grant>` which is to be used for token aquisition:
```
curl https://api.outreach.io/oauth/token \
  -X POST \
  -d client_id=<client_id> \
  -d client_secret=<client_secret> \
  -d redirect_uri=<redirect_uri> \
  -d grant_type=authorization_code \
  -d code=<authorization_grant>
``` 
The exchange fails if one of the parameter values is not matching those that initiated the OAuth flow.
How can a developer find the right credentials to finalize the flow and get the token?

- One simple solution is to use different Redirect URIs in combination with 'Development' and 'Production' client IDs.
For example `https://oauht.company.com/outreach/dev` + `https://oauht.company.com/outreach/prod`.
This way the endpoint where the grant lands defines the client credentials to continue with.

- If however the Redirect URI split is not possible then it is recommended to use `state` query parameter when initiating
the flow and using it to identify the right credentials. For example flow initiated with
`https://api.outreach.io/oauth/authorize?client_id=<dev_cient_id>&redirect_uri=<redirect_uri>&response_type=code&scope=<scope1+scope2>&state=dev`
will redirect clients agent to `GET <redirect_uri>?code=<authorization_grant>&state=dev` upon users consent to Authorize.

## Saving OAuth client registration

In order to successfully save Outreach app with enabled "Outreach API" section developer must provide at least one valid
Redirect URI and select at least one scope.

Redirect URI must be a valid URI stasting with `https://` scheme. This is a security requirement.
An applicaiton can register multiple Redirect URIs adding and removing them when necessary.

Upon saving Outreach app with enabled "Outreach API" correspoing 'Development client' registration will be provisioned
or updated (change of Redirect URIs or Scopes) within 2-3 minutes.

## Testing OAuth flow

Once OAuth client credentials are provisioned 'Development client' can be used for testing of OAuth flow.
There is an "Authorize" link provided on the Development portal "Outreach API" section right underneth the
'Development client' secret for convenience. Copying its URL or clicking on it browser should open new window initiating
OAuth flow with 'Developer client' credentials, top Redirect URI (in case there are multiple specified) and all of the 
selected Scopes.

## Publishing Outreach app with OAuth client registration

As mentioend above the 'Production client' credentials are provisioned on applicaiton publishing.
There are two 'stores' a developer can [chose](developer-portal.md#specify-the-availability-of-your-app) from for publising
the applciation to:
- **Internal** This publishing scope requires no review from the Outreach admin but it also limits the exposure of
'Production client' to the users of your organization only. If the OAuth flow URL leaks to other Outreach users they'll be
presented with the same [warning](#what-if-url-with-development-clientid-accidentally-leaks-to-end-users) and are expected
to Deny authorization
- **Public** Once reviewed and published to public scope 'Produciton client' credentials are considered trusted for all
Outreach users and the OAuth flow link becames actionable and is presented as trusted for all Outreach users.

## Outreach Marketplace promotion of the OAuth application

Since OAuth capability of an Outreach app does not require installation of the app for OAuth flow to work the app without
UI extensions (aka OAuth-only app) is by default hidden from the Outreach Marketplace.

We'll be adding a capability to specify "external installation URL" in Development Portal soon. Once this feature is available
it will be possible to list your OAuth-only app in the Marketplace to promote it. And the "external installation URL" can be
used to publish information about integration between your service and Outreach and provide button/link that initiates OAuth
flow which will establish the connection.
