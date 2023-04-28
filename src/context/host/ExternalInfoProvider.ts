/**
 * Enumerates types of the plugin providers.
 *
 * @export
 * @enum {number}
 * @deprecated Usage of the ExternalInfoProvider is deprecated and will be removed in future release
 */
/* eslint-disable no-unused-vars */
export enum ExternalInfoProvider {
  /**
   * Usage of this enum value points to application error.
   */
  UNDEFINED = 0,

  /**
   * Salesforce plugin data source
   */
  SALESFORCE = 1,

  /**
   * Salesforce sandbox plugin data source
   */
  SALESFORCE_SANDBOX = 2,

  /**
   * Dynamics plugin data source
   */
  DYNAMICS = 3,
}
