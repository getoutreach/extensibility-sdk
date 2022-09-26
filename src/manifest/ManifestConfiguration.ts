import { ConfigurationItem } from '../configuration/ConfigurationItem';

export class ManifestConfiguration extends Array<ConfigurationItem> {
  /**
   * Optional external endpoint on which addon creator host a web page
   * used for application configuration on a addon creator domain side.
   *
   * @type {string}
   * @memberof ManifestConfiguration
   */
  public externalUrl?: string;
}
