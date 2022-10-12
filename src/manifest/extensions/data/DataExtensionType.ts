/* eslint-disable no-unused-vars */

/**
 * List of supported data extension types.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
 * @export
 * @enum {number}
 */
export enum DataExtensionType {
  /**
   * Data extension providing server side replacing of the email links
   */
  MAILING_LINKS = 'data-mailing-links',

  /**
   * Data extension providing a way for application creators to post 3rd party
   * event information prospect activities
   */
  PROSPECT_EVENTS = 'data-prospect-events',
}
