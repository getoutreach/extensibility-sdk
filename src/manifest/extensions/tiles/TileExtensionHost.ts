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
   * An adaptive card template which will be used for rendering the tile.
   *
   @see https://adaptivecards.io/samples/
   *
   * @type {string}
   * @memberof TileExtensionHost
   */
  template?: string;
}
