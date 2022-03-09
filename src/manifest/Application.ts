/* eslint-disable no-unused-vars */
import { ConfigurationItem } from '../configuration/ConfigurationItem';
import { Extension } from './extensions/Extension';
import { ManifestApi } from './ManifestApi';
import { ManifestStore } from './ManifestStore';

/**
 * Definition of the application manifest file containing all of the information
 * needed for Outreach extensibility platform hosting.
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#manifest-file
 *
 * @export
 * @class Application
 */
export class Application {
  /**
   * API section contains the data needed for enabling addon
   * OAuth Outreach API access.
   * In case addon doesn't need client access to Outreach API
   * this section can be omitted from configuration.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#api-optional
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/outreach-api.md
   * @type {ManifestApi}
   * @memberof Application
   */
  public api?: ManifestApi;

  /**
   * An optional section containing configuration information
   * describing what values user needs to provide when interacting
   * for the first time with addon (loading or installing)
   *
   * All of the configuration values will be sent to Addon using the
   * initialization iframe POST message.
   *
   * All of the *public* configuration items will be sent to Addon
   * as the query parameters and can be parsed as such.
   *
   *   *
   * @type {ConfigurationItem[]}
   * @memberof Application
   */
  public configuration?: ConfigurationItem[];

  /**
   * Collection of one or more extensions being packaged in this application manifest.
   *
   * @type {Extension[]}
   * @memberof Application
   */
  public extensions: Extension[] = [];

  /**
   * App section contains the data describing Outreach application containing
   * one or more extensions.
   *
   * @type {ManifestStore}
   * @memberof Application
   */
  public store: ManifestStore;
}
