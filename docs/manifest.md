<!-- omit in toc -->

# Manifest file

Table of content:

- [Manifest file](#manifest-file)
	- [Sample manifest](#sample-manifest)
	- [Manifest JSON schema](#manifest-json-schema)
	- [Application section properties ("app")](#application-section-properties-app)
		- [author](#author)
		- [categories](#categories)
		- [description](#description)
		- [identifier](#identifier)
		- [locales](#locales)
		- [medias](#medias)
		- [store](#store)
		- [title](#title)
		- [version](#version)
	- [Outreach Oauth API access section ("api")](#outreach-oauth-api-access-section-api)
		- [applicationId](#applicationid)
		- [redirectUri](#redirecturi)
		- [scopes](#scopes)
		- [token](#token)
		- [connect](#connect)
	- [Configuration section ("config")](#configuration-section-config)
	- [Extensions section ("ext")](#extensions-section-ext)
		- [Shared extension properties](#shared-extension-properties)
			- [identifer (extension)](#identifer-extension)
			- [version (extension)](#version-extension)
		- [Tab extension properties](#tab-extension-properties)
			- [context (tab extension)](#context-tab-extension)
				- [Application tab extension](#application-tab-extension)
				- [Account tab extension](#account-tab-extension)
				- [Prospect tab extension](#prospect-tab-extension)
				- [Opportunity tab extension](#opportunity-tab-extension)
			- [Environment (tab extension)](#environment-tab-extension)
				- [fullWidth (tab extension)](#fullwidth-tab-extension)
				- [decoration (tab extension)](#decoration-tab-extension)
			- [Host (tab extension)](#host-tab-extension)
				- [url](#url)
				- [icon](#icon)
			- [type](#type)

Manifest is a simple JSON file that the application developer uploads to Outreach and which contains all of the data needed for Outreach to host the application in an iframe.

All of the manifest properties are grouped in a few groups:

- **App section** (name, description, author info, etc.)
- **Api section** - optional (what scopes application needs for accessing Outreach API)
- **Configuration section** - optional (what values we should collect from an Outreach user installing the application.

- **Extensions section** - configuration definition of one or more extensions that are part of this application manifest package.

## Sample manifest

Here is the sample manifest file of the hello world application having two extensions: application tab extension and opportunity tab extension.

```json
{
  "app": {
    "author": {
      "company": "Acme ltd", 
      "email": "author@someurl.com",
      "privacyUrl": "https://someurl.com/privacy",
      "termsOfUseUrl": "https://someurl.com/tos",
      "websiteUrl": "https://someurl.com/"
    },
    "categories": [
      "account_based_marketing"
    ],
    "headline": {
      "en": "Some short description (en)"
    },
    "description": {
      "en": "Some description (en)"
    },
    "identifier": "app-identifier",
    "locales": [
      "en"
    ],
    "medias": [
      {
        "uri": "https://someurl.com/image.png",
        "title": "Our awesome extension",
        "type": "image"
      },
      {
        "uri": "https://youtube.com/some_video",
        "title": "Our awesome animation",
        "type": "video"
      }
    ],
    "store": "private",
    "title": {
      "en": "Some title (en)"
    },
    "version": "0.10",
    "icon": "https://someurl.com/image.png"
  },
  "api": {
    "scopes": [
      "accounts.all",
      "calls.all"
    ],
    "applicationId": "AbCd123456qW",
    "redirectUri": "https://application-host.com/hello-world",
    "token": "https://someurl.com/token",
    "connect": "https://someurl.com/connect"
  },
  "ext": [
    {
      "context": [
        "usr.id"
      ],
      "identifier": "hello-world-app",
      "environment": {
        "fullWidth": false,
        "decoration": "none"
      },
      "host": {
        "icon": "http://someurl.com/favicon.png",
        "url": "http://someurl.com/host/app"
      },
      "type": "application",
      "version": "0.98"
    },
    {
      "context": [
        "usr.id",
        "opp.id"
      ],
      "identifier": "hello-world-opportunity",
      "environment": {
        "fullWidth": false,
        "decoration": "none"
      },
      "host": {
        "icon": "http://someurl.com/favicon.png",
        "url": "http://someurl.com/host/opp"
      },
      "type": "tab-opportunity",
      "version": "0.99"
    }
  ]
}
```

## Manifest JSON schema

Internally we validate each submitted manifest using the following schema
[Manifest JSON schema v1.0](schema/1.0/manifest.schema.json)

A manifest can be validated using the [online tool](https://www.jsonschemavalidator.net/)

## Application section properties ("app")

### author

This section contains information to be presented to a user of the application in the marketplace and on the consent screen: application creator company name, website URL, privacy policy document URL, and terms of use document URL.

### categories

A collection of one or more categories to which the application belongs.
It is used to enable Outreach customers to find the best extension fulfilling their needs.

### description

A localized application description is shown in the application store to explain what it does and why someone wants to install it.

### identifier

Unique identifier of the application as defined by the application creator

### locales

A collection of one or more culture locales (e.g. 'en') supported by the application.

### medias

A collection of media files (images and videos) will be shown to users in the Outreach application store, informing them what the application does and how it looks and works.

### store

Defines the store in which the application will be served:

- **Public**

  The application is going to be available in the application store to all of the Outreach users.

- **Internal**

The application is going to be available only for users of the organization that created the application.

- **Private**

  The application is going to be available only to developers who are working on the application.

### title

The localized application title is shown in the application store and Outreach app as a tab tile.

### version

A version of the application manifest in the format MAJOR.MINOR

## Outreach Oauth API access section ("api")

This section is optional.
If the application doesn't need access to outreach API, this section can be omitted.

### applicationId

This is the value used for [API authentication flow](https://api.outreach.io/api/v2/docs#authentication)as client_id value.

### redirectUri

This URL is defined in Outreach OAuth settings, which the authorization form will use to redirect once the user consent with granting access to Outreach API in his name. This URL can be the same as the [host url](#url) or a separate URL, but in both cases, it has to be implemented in a way matching [Outreach API access requirements](outreach-api.md).

### scopes

In the scopes section, the application creator defines Outreach API scopes needed for performing API calls the application needs to perform.

A complete list of all of the API scopes can be found on [API Scopes page](scopes.md).

On the first [SDK authentication](sdk.md#authentication) Outreach, the user is asked to consent to grant requested scopes to the application

![alt text](assets/api-consent.png 'API consent screen')

### token

This value contains URL of the [token endpoint](outreach-api.md#token-endpoint)

### connect

This value contains URL of the [token endpoint](outreach-api.md#connect-endpoint).
Note: The domain of the connect Uri has to be the same as the domain of the [host.url](#url)

## Configuration section ("config")

This section is optional.

If the application doesn't need a user-specific runtime configuration, this section can be omitted.

In this section, the application creator defines what information should collect from the user and pass it to the application as a part of the initialization process.

To learn more about configuration section, go to [manifest configuration page](configuration.md)

## Extensions section ("ext")

This section contains one or more extensions belonging to the Outreach application.

Those extensions can be of various types (tab extensions, tile extensions, etc.).
Each one of these types can have additional subtypes (e.g., tab extensions can be: app, account, opportunity, or prospect tab extensions).

The application can contain a bundle of one more extension of any type/subtype.

### Shared extension properties

Every extension has to implement a set of common properties defined in [Extension.ts](../src/manifest/extensions/Extension.ts).

#### identifer (extension)

A unique identifier of the extension (used in logs, telemetry, etc.)

#### version (extension)

The current version of the extension (used in logs, telemetry, etc.)

### Tab extension properties

Every tab extension has to implement a few properties defined in [TabExtension.ts](../src/manifest/extensions/tabs/TabExtension.ts).

#### context (tab extension)

This section contains a list of predefined context information that the application needs from Outreach to be sent during the initialization process.
It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the application.

e.g. ["opp.id", "acc.id"]

Outreach Users will be asked to consent to share this information before the application is installed from the application store. For example, suppose the admin installs an application for other users. In that case, the admin is consenting to share the defined context properties for all the org users he is installing it for.

To learn more about the list of all of the supported context properties, go to [context property page](context.md).

There are four types of tab extensions, and each one of them can use only an available subset of contextual information.

##### Application tab extension

As defined in [ApplicationTabExtension.ts](../src/manifest/extensions/tabs/ApplicationTabExtension.ts) this type of tab extensions can use:

- [UserContextKeys.ts](../src/context/keys/UserContextKeys.ts)
- [ClientContextKeys.ts](../src/context/keys/ClientContextKeys.ts)

The reason for that is that the application tab extension is hosted on the left side menu and has no context information about any current account/prospect/opportunity, so it can use only context information about the current user and client context.

##### Account tab extension

As defined in [AccountTabExtension.ts](../src/manifest/extensions/tabs/AccountTabExtension.ts) this type of tab extensions can use:

- [UserContextKeys.ts](../src/context/keys/UserContextKeys.ts)
- [ClientContextKeys.ts](../src/context/keys/ClientContextKeys.ts)
- [AccountContextKeys.ts](../src/context/keys/AccountContextKeys.ts)

Account tab extension is running in the context of the account Outreach user is looking at, so in addition to general contextual properties, it can also use [account context properties](../src/context/host/AccountContext.ts).

##### Prospect tab extension

As defined in ProspectTabExtension.ts](../src/manifest/extensions/tabs/ProspectTabExtension.ts) this type of tab extensions can use:

- [UserContextKeys.ts](../src/context/keys/UserContextKeys.ts)
- [ClientContextKeys.ts](../src/context/keys/ClientContextKeys.ts)
- [ProspectContextKeys.ts](../src/context/keys/ProspectContextKeys.ts)

Prospect tab extension is running in the context of the account Outreach user is looking at, so in addition to general contextual properties, it can also use [prospect context properties](../src/context/host/ProspectContext.ts).

##### Opportunity tab extension

As defined in OpportunityTabExtension.ts](../src/manifest/extensions/tabs/OpportunityTabExtension.ts) this type of tab extensions can use:

- [UserContextKeys.ts](../src/context/keys/UserContextKeys.ts)
- [ClientContextKeys.ts](../src/context/keys/ClientContextKeys.ts)
- [OpportunityContextKeys.ts](../src/context/keys/OpportunityContextKeys.ts)

Prospect tab extension is running in the context of the account Outreach user is looking at, so in addition to general contextual properties, it can also use [opportunity context properties](../src/context/host/OpportunityContext.ts).

#### Environment (tab extension)

This is the optional section where the application creator can express expectations the Outreach host environment has to match for the application to function correctly.

##### fullWidth (tab extension)

e.g., to remove right pane and show application tab using whole page width

```javascript
manifest.host.environment = {
  fullWidth: true,
};
```

##### decoration (tab extension)

e.g., to show an application icon badge decoration

```javascript
manifest.host.environment = {
  decoration: 'simple',
};
```

#### Host (tab extension)

The host section contains the application hosting endpoints and attributes implemented by the application creator.

##### url

Address where the application hosting web page is hosted.

This URL can be a direct URL without any value placeholders, in which case the Outreach host will add all of the contextual parameters as query parameters.

e.g.

```javascript
manifest.host.url = 'http://somesite.com/something';
manifest.context = ['opp.id', 'usr.id'];
```

In the case of an Outreach user with id 456 looking at opportunity 123, this will result during the runtime.

```bash
 http://somesite.com/something?opp.id=123&usr.id=456
```

In addition to this default behavior, the application creator can customize how the URL is constructed by applying simple templatization in addition to this default behavior.

e.g.

```javascript
manifest.host.url = 'http://somesite.com/something/{usr.id}';
```

will become during the runtime

```bash
http://somesite.com/something/456?opp.id=123
```

_NB: as opp.id was not tokenized, it was appended as query parameter following the default naming convention_

The application creator can templatize the name of the query parameters.

e.g.

```javascript
manifest.host.url = 'http://somesite.com/something/{usr.id}?oid={opp.id}';
```

will become during the runtime

```bash
http://somesite.com/something/456?oid=123
```

##### icon

base64 string represents the icon shown in the application store and (if possible) in the Outreach client.

#### type

The Outreach application supports different types of tab extensions, which can be loaded in different parts of the application.
Type property defines what the type of tab extension is and where it should be loaded.

WSDK supported application types (as defined in [TabExtensionType.ts](../src/manifest/extensions/tabs/TabExtensionType.ts)) are:

- **application** (application extension a.k.a 'left side menu addon')
- **tab-account** (account details tab extension)
- **tab-opportunity** (opportunity details tab extension)
- **tab-prospect** (prospect details tab extension)

Application tab extension example

![alt text](assets/app-tab-extension-example.png 'Application tab extension example')

Account tab extension example

![alt text](assets/account-tab-extension-example.png 'Account tab extension example')
