/* eslint-disable no-unused-vars */
/**
 * List of supported addon types.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
 * @export
 * @enum {number}
 */
export enum TabExtensionType {
  /**
   * Application extension (a.k.a 'left side menu addon')
   */
  Application = 'application',

  /**
   * Account details tab extension
   */
  AccountTab = 'tab-account',

  /**
   * Opportunity details tab extension
   */
  OpportunityTab = 'tab-opportunity',

  /**
   * Prospect details tab extension
   */
  ProspectTab = 'tab-prospect',
}
