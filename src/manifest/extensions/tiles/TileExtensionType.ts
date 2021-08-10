/**
 * List of supported inteligent tile extension types.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
 * @export
 * @enum {number}
 */
export enum TileExtensionType {
  /**
   * Application extension (a.k.a 'left side menu addon')
   */
  APPLICATION = 'tile-application',

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
