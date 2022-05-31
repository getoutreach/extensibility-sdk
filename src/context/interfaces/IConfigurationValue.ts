/**
 * Configuration value entered by user
 *
 * @export
 * @class ConfigurationValue
 */
export interface IConfigurationValue {
  /**
   *
   * Configuration item key
   *
   * @type {string}
   * @memberof ConfigurationValue
   */
  key: string;
  /**
   *
   * Configuration item value user provided
   *
   * @type {string}
   * @memberof ConfigurationValue
   */
  value: string;
}
