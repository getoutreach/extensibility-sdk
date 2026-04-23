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
  url?: string;

  /**
   * URLs of MCP server endpoints
   *
   * @type {array of strings}
   * @memberof ManifestMcpServer
   */
  urls?: string[];

  /**
   * Authentication method to use when connecting to the MCP server
   *
   * @type {McpServerAuthMethod}
   * @memberof ManifestMcpServer
   */
  authMethod: McpServerAuthMethod;
}
