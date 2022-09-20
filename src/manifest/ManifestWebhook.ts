import { WebHookEvents } from './api/WebHookEvents';

/**
 * Optional section defining parameters needed for webhook eventing support.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#webhooks-optional
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/webhooks.md
 * @export
 * @class ManifestWebhook
 */
export class ManifestWebhook {
  /**
   * The list of events will be used for Outreach to determine which are the platform events
   * application creator should be informed about (e.g. application was installed)
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#events
   *
   * @type {WebHookEvents[]}
   * @memberof ManifestWebhook
   */
  public events: WebHookEvents[];

  /**
   * A webhook endpoint url to which event information are being sent in a form of POST message.
   *
   * @type {string}
   * @memberof ManifestWebhook
   */
  public url: string;
}
