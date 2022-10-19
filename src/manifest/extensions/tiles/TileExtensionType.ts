/* eslint-disable no-unused-vars */

/**
 * List of supported intelligent tile extension types.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
 * @export
 * @enum {number}
 */
export enum TileExtensionType {
  /**
   * Home/360  dashboard tile extension (email)
   */
  HOME_EMAILS = 'tile-home-emails',

  /**
   * Home/360  dashboard tile extension (tasks)
   */
  HOME_TASKS = 'tile-home-tasks',

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
