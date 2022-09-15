import { Locale } from './Locale';
import { Theme } from './Theme';
import { Application } from '../manifest/Application';
import { ConfigurationValue } from '../configuration/ConfigurationValue';
import { Extension } from '..';

export class RuntimeContext {
  /**
   *
   * An application definition used in operating this addon.
   *
   * @type {Application}
   * @memberof RuntimeContext
   */
  public application: Application;

  public configuration?: ConfigurationValue[] = [];

  /**
   * An application extension definition used in operating the addon.
   *
   * @type {Extension}
   * @memberof RuntimeContext
   */
  public extension: Extension;

  public locale: Locale = Locale.ENGLISH;

  /**
   * Addon host origin address.
   *
   * @type {string}
   * @memberof RuntimeContext
   */
  public origin: string;

  /**
   * Correlation id sent as a part of init message from Outreach addon host
   *
   * @type {string}
   * @memberof RuntimeContext
   */
  public sessionId: string;

  public theme: Theme = Theme.LIGHT;

  /**
   * An outreach user guid identifier.
   *
   * @type {string}
   * @memberof RuntimeContext
   */
  public userIdentifier!: string;

  /**
   * Host domain to be used in the constructing of a OAuth popup URL
   *
   * @type {string}
   * @memberof InitMessage
   */
  public authorizationHost: string;
}

export default new RuntimeContext();
