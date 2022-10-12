import { ExtensionHost } from '../ExtensionHost';

export class ProspectEventsHost extends ExtensionHost {
  /**
   * Category name of the event activity
   * e.g. Drift, Sendoso
   *
   * @type {string}
   * @memberof ProspectEventsHost
   */
  category: string;

  /**
   * Display name of the event activity.
   *
   * e.g. New Conversation, Inbound Message
   *
   * @type {string}
   * @memberof ProspectEventsHost
   */
  name: string;

  /**
   * Event type name
   *
   * e.g. drift:new_conversation, drift:inbound ...
   *
   * @type {string}
   * @memberof ProspectEventsHost
   */
  event!: string;

  /**
   * Base64 string represents the icon to be shown in the addon store
   * and (if applicable) in the Outreach app.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#icon
   * @type {string}
   * @memberof ProspectEventsHost
   */
  icon: string;

  /**
   * Tokenized template representation of the event.
   * e.g.  "A message was sent to {{prospect}} on Drift"
   *
   * @type {string}
   * @memberof ProspectEventsHost
   */
  template!: string;
}
