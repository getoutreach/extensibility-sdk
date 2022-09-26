/* eslint-disable no-unused-vars */
import { Extension } from './extensions/Extension';
import { ManifestApi } from './ManifestApi';
import { ManifestConfiguration } from './ManifestConfiguration';
import { ManifestStore } from './ManifestStore';
import { ManifestWebhook } from './ManifestWebhook';

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
   * @type {ManifestConfiguration}
   * @memberof Application
   */
  public configuration?: ManifestConfiguration;

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

  /**
   * An optional property defining if the application is created without using the extensibility SDK.
   * This apps are manually parsing of the iframe URL containing the context value parameters and not
   * sending the READY message back to the Outreach host so the timeout can not be monitored due to that.
   *
   * If omitted in manifest, the default value is false.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/main/docs/url-parsing.md#timeout-handling
   * @type {boolean}
   * @memberof Application
   */
  public disableTimeoutMonitoring?: boolean;

  /**
   * An optional section containing the webhook definition enabling Outreach
   * to send appropriate event information over webhook
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#webhook
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/webhook.md
   *
   * @type {ManifestWebhook}
   * @memberof Application
   */
  public webhook?: ManifestWebhook;
}
