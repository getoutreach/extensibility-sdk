import { Locale } from './Locale';
import { Theme } from './Theme';
import { Application } from '../manifest/Application';
import { ConfigurationValue } from '../configuration/ConfigurationValue';

export class RuntimeContext {
  /**
   *
   * An application manifest definition used to initialize this addon.
   *
   * @type {Application}
   * @memberof RuntimeContext
   */
  public application: Application;

  /**
   * Addon host origin address.
   *
   * @type {string}
   * @memberof RuntimeContext
   */
  public origin: string;

  public locale: Locale = Locale.ENGLISH;

  public theme: Theme = Theme.LIGHT;

  /**
   * Correlation id sent as a part of init message from Outreach addon host
   *
   * @type {string}
   * @memberof RuntimeContext
   */
  public sessionId: string;

  public userIdentifier!: string;

  public configuration?: ConfigurationValue[] = [];
}

export default new RuntimeContext();
