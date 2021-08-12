<!-- omit in toc -->

# Outreach extensibility SDK

This document contains all the information a developer needs to create an Outreach application.

Table of content

- [How it works](#how-it-works)
- [Required steps to build an Outreach application](#required-steps-to-build-an-outreach-application)

## How it works

When an Outreach user goes to a specific part of the Outreach application (e.g., opportunity page), the application will check if that user has installed applications for that part of the app and (if yes):

- Add a tab with the title of the application
- Add an iframe with the source pointing to an application hosting page
- Send the current user contextual information to the application to initialize itself into a proper state.

## Required steps to build an Outreach application

The extensibility framework supports a few integration methods with different coding requirements and provides a different integration level with Outreach. Each one of the methods requires one or more steps to be implemented based on the application requirements.

1.  Every application needs to have an application hosting web page, which will Outreach users see loaded as a source of application iframe. This page implementation has to follow [a very small set of requirements](/docs/host-requirements.md).

    _During the development phase, application creators can skip this requirement and use only a [Locally hosted application page](/docs/devxp.md) without the need to have a publicly available page._

2.  Every application also needs to **create and upload a manifest file**.
    That manifest file contains things like the URL where the application web page is located, contextual information which application needs from Outreach, details about Outreach API access, etc.

    If your application is **stateless** (e.g., currency exchange calculator application) or your application has **independent initialization** (e.g., initialize itself based on its cookie), there is no need for any additional work to be done.

    Go to [manifest file](/docs/manifest.md) page to learn more.

3.  All stateful applications would need contextual information from Outreach to initialize themselves in the proper state. For that, they need to **parse from the URL** a set of contextual information (e.g., opportunity id, prospect email, etc.) sent by Outreach.

    Go to [host url parameters parsing](/docs/url-parsing.md) page to learn more.

4.  Most of the applications would want to have **deeper integration with the Outreach application** (e.g., to notify Outreach users about some application event). For that, the application will need to integrate Outreach client sdk.

    Go to [Outreach client SDK](/docs/sdk.md) page to learn more.

5.  Some of the applications will need to have **client access to Outreach API**, and for that, they will need to add support on the application server required for obtaining and refreshing access tokens. This will include implementing additional endpoints, server to server calls to Outreach API, token caching, etc.

    Go to [Outreach API access](/docs/outreach-api.md) page to learn more about API access requirements.

_NOTE: This document is an early preview of the client extensibility framework whose primary purpose is to speed up the collaboration and scenario exploration with potential application creators. It will be changing at a rapid pace until the official release of the platform._

\*If you have any questions/comments/concerns about the extensibility, please check the [FAQ](/docs/faq.md) or email us at **cxt-sdk@outreach.io.***
