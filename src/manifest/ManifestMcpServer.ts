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
  OAUTH_DCR = 'oauth-dcr',
  /**
   * No authentication required
   */
  NO_AUTH = 'no-auth',
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
}
