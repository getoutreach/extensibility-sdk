<!-- omit in toc -->

# Outreach Extensibility SDK

Welcome to the Outreach Extensibility SDK, a powerful library designed to streamline the development of client extensions for [Outreach](https://outreach.io). If you are looking to enhance your Outreach experience and create custom extensions, this SDK is the ideal starting point. For comprehensive documentation and resources, please visit the [Outreach Developer Portal](https://developers.outreach.io).

## Getting Started

To incorporate the Outreach Extensibility SDK into your project, please refer to our detailed guide [here](https://developers.outreach.io/client-extensions/javascript-sdk/).

## Usage Examples

Given that the Outreach context is exclusive to the Outreach environment, it's imperative to establish a secure connection over the local network for development purposes.
For more information please check out our guide for [Local Development](https://developers.outreach.io/client-extensions/local-development/).

### Prerequisites

1. **Node.js**: Install [Node.js](https://nodejs.org/) which includes npm (Node Package Manager), required to manage the dependencies and run the React application.
2. **OpenSSL**: Ensure [OpenSSL](https://www.openssl.org/) is installed on your system to generate self-signed SSL certificates. This is often pre-installed on UNIX-based systems (Linux, macOS), but for Windows, you may need to install it manually or use a tool like Git Bash that includes it.

### Installation

To set up an example project, navigate to the 'examples' folder:

```sh
cd ./examples/my-first-outreach-app
```

Next, install the necessary Node.js modules using Yarn or npm:

```sh
yarn
# or
npm install
```

### Generate SSL Certificate for HTTPS

You need to generate a self-signed SSL certificate or get one from a Certificate Authority (CA). For local development, a self-signed certificate will suffice.

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt -subj "/CN=extension.outreach-dev.com"
```

This will create a **localhost.key** file for your private key and a localhost.cert file for your self-signed certificate, valid for 10 years (3650 days). Remember, browsers will not trust self-signed certificates by default, and you will need to proceed through security warnings or add an exception for your certificate.

### Update the hosts file

The hosts file maps hostnames to IP addresses. On your local machine, add the following code to **/etc/hosts**:

```shell
127.0.0.1    extension.outreach-dev.com
```

Now **extension.outreach-dev.com** will resolve to your local machine.

# Running

Finally, run the project with the following command:

```sh
yarn start
# or
npm start
```

### Creating a test app

Upon successful setup of the project, the next step involves registering the application with the Outreach platform.
For more information check out [Your first extension](https://developers.outreach.io/client-extensions/your-first-outreach-extension.mdx)

1. Navigate to the Outreach extension dashboard.
2. Proceed to create a new extension. During this process, specify the **extension.outreach-dev.com** as the "Hosting URL". This will route requests from the Outreach extension to your local server.

Now the example project should be available within your Outreach extension

## Questions or Assistance?
If you have any questions or require assistance while working with the Outreach Extensibility SDK, please do not hesitate to contact us at
[platform@outreach.io](mailto:platform@outreach.io). Our dedicated support team is here to help you succeed.
