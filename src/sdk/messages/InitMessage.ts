import { Message } from './Message';
import { MessageType } from './MessageType';
import { Theme } from '../Theme';
import { Locale } from '../Locale';
import { UrlParam } from '../../context/host/UrlParam';
import { ContextParam } from '../../context/host/ContextParam';
import { ConfigurationValue } from '../../configuration/ConfigurationValue';
import { Application, Extension } from '../..';
import { ManifestV1 } from '../../legacy/ManifestV1';

export class InitMessage extends Message {
  /**
   *Creates an instance of InitMessage.
   * @memberof InitMessage
   */
  constructor() {
    super(MessageType.INIT);
  }

  /**
   * An application manifest definition used to initialize this extension.
   *
   * @type {Application}
   * @memberof InitMessage
   */
  application: Application;

  /**
   * Optional section containing configuration values
   * provided by user.
   *
   * @type {ConfigurationItem[]}
   * @memberof InitMessage
   */
  configuration: ConfigurationValue[];

  /**
   * Collection of the context parameters
   *
   * @type {ContextParam[]}
   * @memberof InitMessage
   */
  context: ContextParam[] = [];

  /**
   * An application manifest extension definition used to initialize this extension.
   *
   * @type {Extension}
   * @memberof InitMessage
   */
  extension: Extension;

  /**
   * Language locale to be used in rendering addon.
   *
   * @type {Locale}
   * @memberof InitMessage
   */
  locale: Locale = Locale.ENGLISH;

  /**
   * Collection of window location search parameters
   * in the moment of loading addons
   *
   * @type {UrlParam[]}
   * @memberof InitMessage
   */
  locationSearchParams: UrlParam[] = [];

  /**
   * Session id value is generated on host and is unique per addon loading.
   * If can be used used to correlate events on server and addon and enable
   * e2e tracking or it can be used when reporting an addon issue to Outreach.
   *
   * @type {string}
   * @memberof InitMessage
   */
  public sessionId: string;

  /**
   * A theme addon should be using in rendering.
   *
   * @type {Theme}
   * @memberof InitMessage
   */
  theme: Theme = Theme.LIGHT;

  /**
   * Unique identifier hash of the Outreach user.
   *
   * @type {(string)}
   * @memberof InitMessage
   */
  userIdentifier: string;

  /**
   * Legacy property needed for backward compatibility
   * support for addons still using v1 addon centric SDK.
   *
   * @type {ManifestV1}
   * @memberof InitMessage
   * @deprecated This property will be removed once all the addons are migrated to v2 sdk
   */
  manifest?: ManifestV1 | null;
}
