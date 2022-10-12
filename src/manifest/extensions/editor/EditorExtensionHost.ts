import { ExtensionHost } from '../ExtensionHost';

export class EditorExtensionHost extends ExtensionHost {
  /**
   * Base64 string represents the icon to be shown in the addon store
   * and (if applicable) in the Outreach app.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#icon
   * @type {string}
   * @memberof TileExtensionHost
   */
  icon: string;
}
