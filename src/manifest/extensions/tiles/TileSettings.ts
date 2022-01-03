import { TileSize } from './TileSize';

/**
 * Optional section defining tile settings defined by extension creator
 * defining the recommended values for operating the tile by Outreach user.
 *
 * @export
 * @class TileSettings
 */
export class TileSettings {
  /**
   * An optional array of dimensions which extension creator recommends as
   * optimal for running the tile.
   *
   * @type {TileSize[]}
   * @memberof TileSettings
   */
  recommended?: TileSize[];
}
