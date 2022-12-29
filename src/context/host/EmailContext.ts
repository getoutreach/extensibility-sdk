import { LogLevel } from '../../sdk/logging/LogLevel';
import logger from '../../sdk/logging/Logger';

import { IEmailContext } from '../interfaces/IEmailContext';
import { areRecipients, Recipient } from '../interfaces/Recipient';
import { EmailContextKeys } from '../keys/EmailContextKeys';
import { ContextParam } from './ContextParam';
import { Context } from './CustomContext';
import { EventType } from '../../sdk/logging/EventType';
import { EventOrigin } from '../../sdk/logging/EventOrigin';

export class EmailContext extends Context implements IEmailContext {
  /**
   * Email to field value
   *
   * @type {Recipient[]}
   * @memberof EmailContext
   */
  to?: Recipient[] | null;

  /**
   * Email cc field value
   *
   * @type {Recipient[]}
   * @memberof EmailContext
   */
  cc?: Recipient[] | null;

  /**
   * Email bcc field value
   *
   * @type {Recipient[]}
   * @memberof EmailContext
   */
  bcc?: Recipient[] | null;

  /**
   * Subject field value
   *
   * @type {string | null}
   * @memberof EmailContext
   */
  subject?: string | null;

  public initFrom(param: ContextParam): boolean {
    switch (param.key) {
      case EmailContextKeys.TO:
        this.to = this.getRecipients(param.value);
        break;
      case EmailContextKeys.CC:
        this.cc = this.getRecipients(param.value);
        break;
      case EmailContextKeys.BCC:
        this.bcc = this.getRecipients(param.value);
        break;
      case EmailContextKeys.SUBJECT:
        this.subject = param.value;
        break;
      default:
        return false;
    }

    return true;
  }

  public toParams(): ContextParam[] {
    const params: ContextParam[] = [];
    if (this.to) {
      params.push({
        key: EmailContextKeys.TO,
        value: JSON.stringify(this.to),
      });
    }

    if (this.cc) {
      params.push({
        key: EmailContextKeys.CC,
        value: JSON.stringify(this.cc),
      });
    }

    if (this.bcc) {
      params.push({
        key: EmailContextKeys.BCC,
        value: JSON.stringify(this.bcc),
      });
    }

    if (this.subject) {
      params.push({
        key: EmailContextKeys.SUBJECT,
        value: this.subject,
      });
    }

    return params;
  }

  private getRecipients = (value?: string | null): Recipient[] | null => {
    if (!value) {
      return null;
    }

    try {
      const recipients = JSON.parse(value);
      if (!areRecipients(recipients)) {
        logger.current.log({
          level: LogLevel.Error,
          context: value ? [value] : [],
          type: EventType.INTERNAL,
          origin: EventOrigin.HOST,
          message: 'Recipients value is not an array. value: ' + value,
        });

        return [];
      }

      return recipients;
    } catch {
      logger.current.log({
        level: LogLevel.Error,
        context: value ? [value] : [],
        type: EventType.INTERNAL,
        origin: EventOrigin.HOST,
        message: 'Unparsable recipients. value: ' + value,
      });
      return null;
    }
  };
}
