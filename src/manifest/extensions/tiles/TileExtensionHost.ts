import { ExtensionHost } from '../ExtensionHost';

/**
 * Section defining the tile hosting attributes,
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
 * @export
 * @class TileExtensionHost
 */
export class TileExtensionHost extends ExtensionHost {
  /**
   * Base64 string represents the icon to be shown in the addon store
   * and (if applicable) in the Outreach app.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#icon
   * @type {string}
   * @memberof TileExtensionHost
   */
  icon: string;

  /**
   * A react component to be used for rendering the tile.
   * This is primarily reserved for 1st party tile extensions
   * due to the security context in which such component runs.
   *
   * @type {string}
   * @memberof TileExtensionHost
   */
  component?: string;
}
