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
   * Sidebar shown on the right side of the account page
   */
  ACCOUNT_SIDEBAR = 'tab-account-sidebar',

  /**
   * Sidebar action button shown in the account page tab right sidebar
   */
  ACCOUNT_ACTION = 'tab-account-action',

  /**
   * Opportunity details tab extension
   */
  OPPORTUNITY = 'tab-opportunity',

  /**
   * Sidebar shown on the right side of the opportunity page
   */
  OPPORTUNITY_SIDEBAR = 'tab-opportunity-sidebar',

  /**
   * Sidebar action button shown in the opportunity page tab right sidebar
   */
  OPPORTUNITY_ACTION = 'tab-opportunity-action',
  /**
   * Prospect details tab extension
   */
  PROSPECT = 'tab-prospect',

  /**
   * Sidebar shown on the right side of the prospect page
   */
  PROSPECT_SIDEBAR = 'tab-prospect-sidebar',

  /**
   * Sidebar action button shown in the prospect page tab right sidebar
   */
  PROSPECT_ACTION = 'tab-prospect-action',

  /**
   * Reports page tab extension
   */
  REPORTS = 'tab-reports',
}
