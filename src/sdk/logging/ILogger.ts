import { Event } from './Event';
import { LogLevel } from './LogLevel';

export interface ILogger {
  /**
   * Minimal log level for event to be logged
   *
   * @type {LogLevel}
   * @memberof ILogger
   */
  level: LogLevel;
  /**
   * Logs an event for debugging purposes.
   *
   * @memberof ILogger
   */
  log: (event: Event) => void;
}
