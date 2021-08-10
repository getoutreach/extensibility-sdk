/* eslint-disable no-unused-vars */
import { ConfigurationItem } from '../configuration/ConfigurationItem';
import { AllContextKeys } from '../context/keys/AllContextKeys';
import { Extension } from './extensions/Extension';
import { ManifestApi } from './ManifestApi';
import { ManifestApp } from './ManifestApp';

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
   * App section contains the data describing Outreach application containing
   * one or more extensions.
   *
   * @type {ManifestApp}
   * @memberof Application
   */
  public app: ManifestApp;

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
   * In this section, the addon author defines a list of predefined context information that addon needs from Outreach
   * to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {AllContextKeys[]}
   * @memberof Application
   */
  public context: AllContextKeys[];

  /**
   * Collection of one or more extensions being packaged in this application manifest.
   *
   * @type {Extension[]}
   * @memberof Application
   */
  public extensions: Extension[] = [];
}
