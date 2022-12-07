import { IEmailContext } from '../interfaces/IEmailContext';
import { EmailContextKeys } from '../keys/EmailContextKeys';
import { ContextParam } from './ContextParam';
import { Context } from './CustomContext';

export class EmailContext extends Context implements IEmailContext {
  /**
   * Email to field value
   *
   * @type {string | null}
   */
  to?: string | null;

  /**
   * Email cc field value
   *
   * @type {string | null}
   */
  cc?: string | null;

  /**
   * Email bcc field value
   *
   * @type {string | null}
   */
  bcc?: string | null;

  /**
   * Subject field value
   *
   * @type {string | null}
   */
  subject?: string | null;

  public initFrom(param: ContextParam): boolean {
    switch (param.key) {
      case EmailContextKeys.TO:
        this.to = param.value;
        break;
      case EmailContextKeys.CC:
        this.cc = param.value!;
        break;
      case EmailContextKeys.BCC:
        this.bcc = param.value;
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
        value: this.to,
      });
    }

    if (this.cc) {
      params.push({
        key: EmailContextKeys.CC,
        value: this.cc,
      });
    }

    if (this.bcc) {
      params.push({
        key: EmailContextKeys.BCC,
        value: this.bcc,
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
}
