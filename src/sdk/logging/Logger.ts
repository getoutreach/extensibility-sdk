import { DefaultLogger } from './DefaultLogger';
import { ILogger } from './ILogger';

export default class logger {
  /**
   * Loger instance used for publishing SDK event informations
   * @type {ILogger}
   * @memberof Logger
   */
  public static current: ILogger = new DefaultLogger();
}
