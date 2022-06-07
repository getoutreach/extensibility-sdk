# Outreach Extensibility SDK

This TypeScript SDK lets you get data from and facilitates interactions with the Outreach host application.

## What does this SDK do

This SDK helps to correctly initialize your extension within Outreach. It provides read access to a subset of Outreach
data and several useful methods for tighter integration with Outreach host application. The SDK does not have any
dependencies and you can use it with any framework out there.

## What does this SDK not do

At this moment the SDK does not provide means of manipulating the Outreach data. To do that you'll need to use the
[Outreach REST API](https://api.outreach.io/api/v2/docs). SDK also does not provide any visual components.

## Initializing the SDK

Assuming that you have followed the [Getting started with Outreach apps](quick-start-guide.md) you now have a registered app in Outreach
developer portal that has one or more extensions. To properly initialize your extension within the Outreach host
application do:

1. Install the [@outreach/extensibility-sdk npm package](https://www.npmjs.com/package/@outreach/extensibility-sdk).
   `yarn add @outreach/extensibility-sdk`
2. Initialize the SDK:

   ```typescript
   import extensibilitySdk from '@outreach/extensibility-sdk';
   // ...
   const outreachContext = await extensibilitySdk.init();
   ```

   It is important to call the init method as soon as possible. Best time to do it is the `DOMContentLoaded` event or
   its equivalents in the framework of your choice. If your application redirects for any reason make sure to perform
   the redirects after the promise returned from `init` resolves.

The `init` method ensures that your extension is able to run within the Outreach host application. It returns a promise
resolving with the `OutreachContext` which contains data
[eligible to be consumed](developer-portal.md#allowing-extensions-to-read-outreach-data) by your extension. Check the
[reading and writing Outreach data](reading-and-writing-outreach-data.md) article for more details.

## Extensibility SDK reference

`extensibilitySdk` object exposed by the npm package contains an instance of the SDK. For convenience `extensibilitySdk`
is also exposed on `window.outreach` global object.

`extensibilitySdk` provides following static methods:

### `decorate()`

Updates the extension launcher (tab title or shell icon) with the specified text or badge to indicate that there is a
change.

```javascript
// Update the text inside the launcher.
extensibilitySdk.decorate('Messages (2)', 'text');

// To add a count to the badge of the extension use:
extensibilitySdk.decorate('2', 'badge');

// To clear the badge provide empty string in first parameter:
extensibilitySdk.decorate('', 'badge');
```

### `environment()`

Allows dynamically hiding or showing the right sidebar of the Outreach host application.

```javascript
extensibilitySdk.environment({ fullWidth: false });
```

### `init()`

initializes the SDK and returns a Promise resolving to
[`OutreachContext` object](reading-and-writing-outreach-data.md#the-outreachcontext-object).

You have to call this function and wait for the promise to resolve before any other interaction with the SDK. You should
call this function as early as possible for example in the `DOMContentLoaded` event or equivalent.

```javascript
// cxt: OutreachContext
const cxt = await extensibilitySdk.init();
```

### `navigate()`

Navigates to a page within Outreach. Currently supports navigating to Opportunity, Prospect, and Account.

```javascript
// Navigate to the overview page of an opportunity with id `123`:
extensibilitySdk.navigate(NavigationDestination.OPPORTUNITY, '123');

// Navigate to the opportunity extension with app identifier 'tasks'
extensibilitySdk.navigate(NavigationDestination.OPPORTUNITY, '123/tasks');

// Manipulate URL query parameters of the iframe hosting the extension
extensibilitySdk.navigate(NavigationDestination.OPPORTUNITY, '123', { abc: '1', xyz: '2' });

extensibilitySdk.navigate(NavigationDestination.APP, 'left-side-menu-hello');
```

### `notify()`

Pops up a traditional Outreach message toast styled as info, warning, or error.

```javascript
extensibilitySdk.notify({ type: 'info', text: 'Saved!' });
```

### `onLoad()`

If an extension fails to load within 2 seconds a warning message pops up. After 5 seconds error message is shown. You
can override this behaviour by implementing `onLoad()` handler yourself. Function will receive the
[`LoadingContext`](../src/context/LoadingContext.ts) as its only parameter.

```javascript
extensibilitySdk.onLoad = (ctx: LoadingContext) => {
  // show custom UI, report to telemetry
};
```
