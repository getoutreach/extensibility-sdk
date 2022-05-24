# Outreach Developer Portal

Outreach Developer Portal allows for registering custom apps that surface in various places of the Outreach platform
providing useful functionality to end users. It serves both internal Outreach development teams building extensions and
third-party partners looking to integrate with Outreach.

## Accessing developer portal

Developer portal is located under Settings > Integrations in the "Your apps" tab.

> ⓘ Only organizations admins can currently access the developer portal.

## What is an Outreach app?

Outreach app is a collection of custom extensions each serving a particular purpose. Currently supported types are:

- [Shell extension](extension-types.md#shell-extension) - launches your extension as a full page application embedded
  into Outreach.
- [Prospect tab extension](extension-types.md#prospect-tab-extension) - adds a custom tab with your extension to the
  Prospect detail page.
- [Opportunities tab extension](extension-types.md#opportunity-tab-extension) - adds a custom tab with your extension to
  the Opportunity detail page.
- [Account tab extension](extension-types.md#account-tab-extension) - adds a custom tab with your extension to the
  Account detail page.

> ⓘ It is up to you to choose which and how many extensions you'd like to bundle in your app.

From technical standpoint each extension is a web application created with a technology of your choice (for example
React) and hosted on your URL. Outreach will embed the contents of that URL when the end-user opens the relevant page
(e.g. Prospects). The [JavaScript Extensibility SDK](sdk.md) will let you receive selected contextual data (e.g. current
user details, prospect details, etc). For data manipulation you can use the
[Outreach REST API](https://api.outreach.io/api/v2/docs) from within your extension.

## Creating and publishing apps

So you went through the [quick start guide](quick-start-guide.md) and created on or more
[extensions](extension-types.md) in your app. Now it's time to ship your app to end users. To do so open the app for
editing in Outreach Development Portal and head the "Review and Publish" section which will lead you through the
publishing process consisting of 3 steps.

### Specify the availability of your app

You can publish your app exclusively for your organization or make it public for all Outreach organizations. When you
make your app public to all of Outreach, our support team will review the app before it becomes public. Please note that
creating public apps is currently limited to selected partners and may not be available for your organization. Reach out
to your support representative in this case.

Publishing an app for your organization only does not require a review.

### Review app metadata

The wizard will provide a summary of all the metadata you have specified for your application and will highlight missing
pieces in yellow. Add the necessary metadata and then review and agree to the related Outreach policies.

### Publish app

Now just hit that fat "Publish" button and your app will appear in the Outreach Marketplace! Head there to install your
app for all org users.

## Maintaining your app.

Once you have published the app you may need to make changes to it. Any changes made in Developer Portal won't affect
the live version of your app. To apply your changes to the live app, go through the publishing process again.

## Hiding published app

You can temporarily hide a published application from Outreach Marketplace. This will prevent new installations but the
app will still available for users for which it was previously installed.

## Allowing app specific configuration values

You can define a configuration template for your application. During app installation process Outreach will prompt to
enter the required data. Please be aware that all values will be readable in plain text at app runtime. Do not use this
feature for sensitive values like private API keys.

## Allowing extensions to read Outreach data

You can tell Outreach to pass some data to your extension by selecting the appropriate checkboxes in the extension
configuration. Selected data will be available in the
[`OutreachContext` object](reading-and-writing-outreach-data.md#the-outreachcontext-object)
![Allow extension to consume data](img/scopes.png 'Select data to pass')
