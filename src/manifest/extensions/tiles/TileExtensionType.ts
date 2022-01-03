/* eslint-disable no-unused-vars */

/**
 * List of supported inteligent tile extension types.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
 * @export
 * @enum {number}
 */
export enum TileExtensionType {
  /**
   * Home/360  dashboard tile extension
   */
  HOME = 'tile-home',

  /**
   * Account overview intelligent tile extension
   */
  ACCOUNT = 'tile-account',

  /**
   * Opportunity overview intelligent tile extension
   */
  OPPORTUNITY = 'tile-opportunity',

  /**
   * Prospect  overview intelligent tile extension
   */
  PROSPECT = 'tile-prospect',
}
