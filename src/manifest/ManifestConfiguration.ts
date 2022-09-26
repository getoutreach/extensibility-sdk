import { ConfigurationItem } from '../configuration/ConfigurationItem';

export class ManifestConfiguration {
  /**
   * A collection of configuration items containing configuration metadata
   * which will be used to collect appropriate configuration information
   * from the user on application installation.
   *
   * @type {ConfigurationItem[]}
   * @memberof ManifestConfiguration
   */
  items?: ConfigurationItem[];

  /**
   * Optional external endpoint on which addon creator host a web page
   * used for application configuration on a addon creator domain side.
   *
   * @type {string}
   * @memberof ManifestConfiguration
   */
  externalUrl?: string;
}
