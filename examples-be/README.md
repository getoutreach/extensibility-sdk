# Outreach server-to-server (S2S) demo application

## Description

This is an example NodeJS application illustrating a possible way of handling S2S API integration with Outreach. It
contains a webhook endpoint, a setup endpoint, and a demo endpoint for submitting custom prospect activity event. When
deployed, the endpoints urls can be used in Outreach Application configuration. Each endpoint in the code has comments
how it should be used and a link to the corresponding documentation.

For more information about Outreach S2S API access, refer to the
[documentation portal](https://developers.outreach.io/api/s2s-access/).

## Code

The application is written in TypeScript language using [NestJS](https://nestjs.com/) framework. Everything is
implemented in one file for simplicity. We recommend to start looking into it from the AppController class: it is an
entry point for Webhook or External configuration setup URL calls by Outreach.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
