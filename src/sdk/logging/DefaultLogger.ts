import { Event } from './Event';
import { ILogger } from './ILogger';
import { LogLevel } from './LogLevel';

export class DefaultLogger implements ILogger {
  public level: LogLevel = window.outreach?.logLevel || LogLevel.Error;

  public log = (event: Event) => {
    switch (event.level) {
      case LogLevel.None:
        // ignore the event
        break;
      case LogLevel.Trace:
        if (this.level <= LogLevel.Trace) {
          // tslint:disable-next-line: no-console
          console.log(
            '[CXT][AddonSdk]::onInfo-trace (default)',
            event,
            event.context
          );
        }
        break;
      case LogLevel.Debug:
        if (this.level <= LogLevel.Debug) {
          // tslint:disable-next-line: no-console
          console.debug(
            '[CXT][AddonSdk]::onInfo-debug (default)',
            event,
            event.context
          );
        }
        break;
      case LogLevel.Info:
        if (this.level <= LogLevel.Info) {
          // tslint:disable-next-line: no-console
          console.info(
            '[CXT][AddonSdk]::onInfo-info (default)',
            event,
            event.context
          );
        }
        break;
      case LogLevel.Warning:
        if (this.level <= LogLevel.Warning) {
          // tslint:disable-next-line: no-console
          console.warn(
            '[CXT][AddonSdk]::onInfo-warning (default)',
            event,
            event.context
          );
        }
        break;
      case LogLevel.Error:
        // tslint:disable-next-line: no-console
        console.error(
          '[CXT][AddonSdk]::onInfo-error (default)',
          event,
          event.context
        );
        break;
    }
  };
}
