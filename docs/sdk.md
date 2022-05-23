<!-- omit in toc -->

# Add-on SDK

Table of content

- [Add-on SDK](#add-on-sdk)
  - [Summary](#summary)
  - [Addon initialization](#addon-initialization)
    - [Logger](#logger)
    - [Load event handler](#load-event-handler)
    - [SDK initialization](#sdk-initialization)
      - [Outreach context](#outreach-context)
  - [Additional addon function](#additional-addon-function)
    - [Notify function](#notify-function)
    - [Decorate function](#decorate-function)
    - [Navigate function](#navigate-function)
    - [Environment function](#environment-function)
  - [Add-on authentication](#add-on-authentication)
    - [authenticate function](#authenticate-function)

## Summary

The outreach host is using iframes to load addons due to security and performance reasons. Once an addon is loaded, the
Outreach host communicates with it using POST messages.

Outreach client extensibility SDK is created as a thin wrapper around this communication, so the addon creator doesn't
need to think about how this is implemented, but in case you would prefer your own integration library, that is totally
OK too.

The code from this repository is packaged into an NPM package, which can be found here.

```http
https://www.npmjs.com/package/@outreach/extensibility-sdk
```

In case you don't want to use the NPM package, we are also publishing it as a javascript bundle on Outreach CDN, so you
can just reference it on your Html page using a standard script tag.

## Addon initialization

In order for the addon to get into initialized state, there are a few simple steps to be performed on the addon host
page:

- Define [log level](#logger) (optional)
- Subscribe to [load event](#load-event-handler)
- [initialize the SDK](#sdk-initialization).

### Logger

SDK has an internal logger used to publish diagnostic information, which helps addon creators develop the addon.

By default, SDK uses [DefaultLogger.ts](../src/sdk/logging/DefaultLogger.ts) implementation with **Error** log level,
which means that only logs of error type will be published to console log.

If there is a need to observe other types of events, sdk defines a logLevel property that can be set to one of the enum
values. None| Debug | Info | Warn | Error.

```javascript
addonSdk.logLevel = LogLevel.Debug;
```

If the addon creator wants to implement its own logger, the logger needs to implement
[ILogger.ts](../src/sdk/logging/ILogger.ts) interface and set to be used by addonSdk before intialization

```javascript
addonSdk.setLogger(myOwnLogger);
```

### Load event handler

Load handler is being invoked after the addon is fully loaded, and it provides to addon creator performance information
on addon loading.

Default implementation would show a warning toast if addon loading times were longer than 2 seconds and error toast if
loading times were longer then 5 seconds.

Addon creator is encouraged to implement its load handler and handle the received performance data differently (report
it to its telemetry service, show a custom addon UI, etc.)

To support the case when the addon developer is interested in getting information on internal SDK events, we have added
an optional onInfo handler, which by default, will be invoked every time when there is an error in SDK.

```javascript
addonSdk.onLoad = (ctx: LoadingContext) => {
  // show custom UI, report to telemetry
};
```

### SDK initialization

The Outreach host sends to addon contextual information of the current Outreach user loading the addon, which triggers
on addon side init event handler.

The manifest Context section determines the payload of the initialization context (e.g., if there is an Opportunity
scope defined, the initialization context will contain current opportunity information).

To retrieve the Outreach initialization context, sdk needs to initialize

```javascript
// cxt: OutreachContext
const cxt = await addonSdk.init();
```

This will result in an iframe post message being sent to the host informing the Outreach app that the addon is ready to
receive initialization context describing the current Outreach user loading the addon.

Once the initialization context is received, sdk is ready to perform its functionality.

#### Outreach context

[Outreach context](../src/context/OutreachContext.ts) sent to onInit method has next properties:

- locale - Outreach User locale to be used for rendering addon UI (e.g. en)
- theme - Outreach app theme to be used for rendering addon UI (e.g. light)
- account - [Information about current account](../src/context/host/AccountContext.ts) Outreach user is looking at
  (optional)
- user - [Information about current outreach user](../src/context/host/UserContext.ts) Outreach user is looking at
  (optional)
- opportunity - [Information about current opportunity](../src/context/host/OpportunityContext.ts) Outreach user is
  looking at (optional)
- prospect - [Information about current prospect](../src/context/host/ProspectContext.ts) Outreach user is looking at
  (optional)
- config - User-specific [addon configuration](configuration.md) (if any)
- host - [Information about the addon hosting environment](../src/context/host/HostContext.ts) including all the of the
  url parameters defined in manifest host url and in browser location search params.

## Additional addon function

Add-on sdk has a few additional functions allowing to addon to request a certain action to be performed by a host. Using
these functions is optional, and it is OK if the addon creator decides not to use them.

### Notify function

In case when an addon wants to inform the Outreach user about some information, warning, or Error, it will need to
invoke the Notify function requesting from an Outreach app to notify the user about that.

```javascript
addonSdk.notify({ type: 'info', text: 'Saved!' });
```

The Outreach host will notify the user in a way consistent with the Outreach application UX.

### Decorate function

In case when an extension would like to update its entry point decoration, it will need to call the Decorate. This will
result with an appropriate update based on extension type. e.g. Tab title will change in tab extensions, shell
application icon will show a badge etc...

To update the decoration, just pass the new decoration value

```javascript
addonSdk.decorate('2');
```

To remove the decoration, just pass an empty string value

```javascript
addonSdk.decorate('');
```

### Navigate function

Sometimes, in reaction to user interaction, an addon needs to navigate a different part of the Outreach application.

At this moment, SDK supports redirecting to Opportunity, Prospect, and Account, but we plan to add more navigation
destinations based on SDK user feedback.

To encapsulate the Outreaching routing code's internals and enable client-side navigation without the need for a full
page reload, sdk provides a navigate function.

For example, to navigate addon iframe to an opportunity with id 123

```javascript
addonSdk.navigate(NavigationDestination.OPPORTUNITY, '123');
```

Id parameter can contain additional navigation information besides the entity id.

For example, to navigate to an opportunity with id 123 open with Tasks tab selected.

```javascript
addonSdk.navigate(NavigationDestination.OPPORTUNITY, '123/tasks');
```

To add query parameters to the navigation destination, pass them with the optional params parameter

For example, to navigate addon iframe to an opportunity with id 123 and wanting to append ?abc=1&xyz=2

```javascript
addonSdk.navigate(NavigationDestination.OPPORTUNITY, '123', { abc: '1', xyz: '2' });
```

In case SDK needs to navigate to a left side menu app addon, APP navigation destination should be used and ID parameter
should be addon identifier

```javascript
addonSdk.navigate(NavigationDestination.APP, 'left-side-menu-hello');
```

### Environment function

Every addon can have some requirements from the Outreach host, which are needed for the addon's proper functioning.

e.g., A tab addon might want the right sidebar to be removed so it could get more screen space

This requirement can be express in its [manifest host environment section](manifest.md#environment-tab-extension), and
then it would be applied when the addon initially loads.

In order to support the need for the addon creator to change the environment at a later point (e.g., to show the right
sidebar at some point) while the addon is active, sdk has an environment function to support that.

e.g. to show the sidebar for tab addons

```javascript
addonSdk.environment({ fullWidth: false });
```

e.g. to hide the sidebar for tab addons

```javascript
addonSdk.environment({ fullWidth: true });
```

## Add-on authentication

To support addons needing Outreach API access, addon SDK must implement this flow.

### authenticate function

[source here](../src/index.ts)

```javascript
    addonSdk.authenticate = () => Promise<string> {
        ...
    }
```

Addon creator has to show some clickable element ("Login button"). Once a user clicks that button, a
[Outreach OAuth consent popup](outreach-api.md#outreach-api-consent) will be shown to user and a
[authorize endpoint](outreach-api.md#authorization-endpoint) will be called.

In case of an addon, the creator will call `authenticate()` function after user-provided content. Outreach users will
briefly see a popup being loaded and immediately closed after a very brief period.
