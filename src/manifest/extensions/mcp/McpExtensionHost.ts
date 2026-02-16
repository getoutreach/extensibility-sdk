import { ExtensionHost } from '../ExtensionHost';

/**
 * Section defining the addon creator hosting property.
 *
 * @export
 * @class McpExtensionHost
 */
export class McpExtensionHost extends ExtensionHost {
  /**
   * Base64 string represents the icon to be shown in the addon store
   * and (if applicable) in the Outreach app.
   *
   * @type {string}
   * @memberof McpExtensionHost
   */
  icon: string;
}
