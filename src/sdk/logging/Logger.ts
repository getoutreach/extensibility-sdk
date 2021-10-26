import { DefaultLogger } from './DefaultLogger';
import { ILogger } from './ILogger';

export default class logger {
  /**
   * Logger instance used for publishing SDK event information
   * @type {ILogger}
   * @memberof Logger
   */
  public static current: ILogger = new DefaultLogger();
}
