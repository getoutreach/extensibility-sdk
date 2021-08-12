import { Message } from './Message';
import { MessageType } from './MessageType';
import { Theme } from '../Theme';
import { Locale } from '../Locale';
import { Application } from '../../manifest/Application';
import { UrlParam } from '../../context/host/UrlParam';
import { ContextParam } from '../../context/host/ContextParam';
import { ConfigurationValue } from '../../configuration/ConfigurationValue';

export class InitMessage extends Message {
  /**
   *Creates an instance of InitMessage.
   * @memberof InitMessage
   */
  constructor() {
    super(MessageType.INIT);
  }

  /**
   * Language locale to be used in rendering addon.
   *
   * @type {Locale}
   * @memberof InitMessage
   */
  locale: Locale = Locale.ENGLISH;
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
   * Collection of the context parameters
   *
   * @type {ContextParam[]}
   * @memberof InitMessage
   */
  context: ContextParam[] = [];

  /**
   * Collection of window location search parameters
   * in the moment of loading addons
   *
   * @type {UrlParam[]}
   * @memberof InitMessage
   */
  locationSearchParams: UrlParam[] = [];

  /**
   * An application manifest definition used to initialize this addon.
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
   * Session id value is generated on host and is unique per addon loading.
   * If can be used used to correlate events on server and addon and enable
   * e2e tracking or it can be used when reporting an addon issue to Outreach.
   *
   * @type {string}
   * @memberof InitMessage
   */
  public sessionId: string;
}
