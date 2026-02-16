import { McpExtension } from '../McpExtension';
import { McpExtensionType } from '../McpExtensionType';

export class ConnectorMcpExtension extends McpExtension {
  /**
   * MCP Connector extension type is 'mcp-connector'
   *
   * @type {McpExtensionType}
   * @memberof ConnectorMcpExtension
   */
  public readonly type: McpExtensionType.CONNECTOR = McpExtensionType.CONNECTOR;
}
