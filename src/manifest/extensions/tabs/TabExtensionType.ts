/* eslint-disable no-unused-vars */
/**
 * List of supported addon types.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
 * @export
 * @enum {number}
 */
export enum TabExtensionType {
  /**
   * Account details tab extension
   */
  ACCOUNT = 'tab-account',

  /**
   * Opportunity details tab extension
   */
  OPPORTUNITY = 'tab-opportunity',

  /**
   * Prospect details tab extension
   */
  PROSPECT = 'tab-prospect',

  /**
   * Sidebar shown on the right side of the tabs
   */
  SIDEBAR = 'tab-sidebar',
}
