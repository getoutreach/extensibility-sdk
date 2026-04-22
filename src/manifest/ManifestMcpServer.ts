/* eslint-disable no-unused-vars */

/**
 * Authentication method for MCP connector
 * @export
 * @enum {string}
 */
export enum McpServerAuthMethod {
  /**
   * OAuth 2.1 with Dynamic Client Registration
   */
  OAUTH_DCR = 'OAUTH_DCR',
  /**
   * No authentication required
   */
  NO_AUTH = 'NO_AUTH',
  /**
   * Preregistered OAuth client
   */
  PREREGISTERED_OAUTH_CLIENT = 'PREREGISTERED_OAUTH_CLIENT',
}

/**
 * A property of the preregistered OAuth client configuration.
 * When deferToInstallation is false, value is required.
 * When deferToInstallation is true, value must not be set (it will be provided at installation time).
 * @export
 * @class PreregisteredOauthClientProperty
 */
export class PreregisteredOauthClientProperty {
  /**
   * The property value. Required when deferToInstallation is false, must not be set when deferToInstallation is true.
   *
   * @type {string}
   * @memberof PreregisteredOauthClientProperty
   */
  value?: string;

  /**
   * Whether the value will be provided at installation time. When true, value must not be set.
   *
   * @type {boolean}
   * @memberof PreregisteredOauthClientProperty
   */
  deferToInstallation: boolean;
}

/**
 * Configuration for a preregistered OAuth client
 * @export
 * @class PreregisteredOauthClientConfig
 */
export class PreregisteredOauthClientConfig {
  /**
   * The authorization endpoint URL
   *
   * @type {PreregisteredOauthClientProperty}
   * @memberof PreregisteredOauthClientConfig
   */
  authorizationEndpoint: PreregisteredOauthClientProperty;

  /**
   * The token endpoint URL
   *
   * @type {PreregisteredOauthClientProperty}
   * @memberof PreregisteredOauthClientConfig
   */
  tokenEndpoint: PreregisteredOauthClientProperty;

  /**
   * The OAuth scopes
   *
   * @type {PreregisteredOauthClientProperty}
   * @memberof PreregisteredOauthClientConfig
   */
  scopes: PreregisteredOauthClientProperty;

  /**
   * The OAuth client ID
   *
   * @type {PreregisteredOauthClientProperty}
   * @memberof PreregisteredOauthClientConfig
   */
  clientId: PreregisteredOauthClientProperty;

  /**
   * The OAuth client secret
   *
   * @type {PreregisteredOauthClientProperty}
   * @memberof PreregisteredOauthClientConfig
   */
  clientSecret: PreregisteredOauthClientProperty;

  /**
   * URL to the OAuth documentation
   *
   * @type {string}
   * @memberof PreregisteredOauthClientConfig
   */
  documentationUrl?: string;
}

/**
 * Optional section defining parameters for MCP (Model Context Protocol) connector.
 * @export
 * @class ManifestMcpServer
 */
export class ManifestMcpServer {
  /**
   * URL of the MCP server endpoint
   *
   * @type {string}
   * @memberof ManifestMcpServer
   */
  url: string;

  /**
   * Authentication method to use when connecting to the MCP server
   *
   * @type {McpServerAuthMethod}
   * @memberof ManifestMcpServer
   */
  authMethod: McpServerAuthMethod;

  /**
   * Configuration for a preregistered OAuth client
   *
   * @type {PreregisteredOauthClientConfig}
   * @memberof ManifestMcpServer
   */
  preregisteredOauthClientConfig?: PreregisteredOauthClientConfig;
}
