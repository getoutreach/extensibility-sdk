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

Prepare the S2S GUID and private key as described in the [Outreach documentation](https://developers.outreach.io/api/s2s-access/#enabling-s2s-api-access).

```bash
export OUTREACH_APP_S2S_GUID="my-S2S-GUID-copied-from-Dev-Portal"
export OUTREACH_PRIVATE_KEY=$(cat /path/to/generated/s2s/keys/outreach_private_key.pem)

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

Now the project is running at http://localhost:3000.
