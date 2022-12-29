import { Recipient } from './Recipient';

export interface IEmailContext {
  /**
   * List of email TO recipients entered in send email dialog (if any)
   *
   * @type {Recipient[]}
   * @memberof EmailContext
   */
  to?: Recipient[] | null;

  /**
   * List of email CC recipients entered in send email dialog (if any)
   *
   * @type {Recipient[]}
   * @memberof EmailContext
   */
  cc?: Recipient[] | null;

  /**
   *  List of BCC recipients entered in send email dialog (if any)
   *
   * @type {Recipient[]}
   * @memberof EmailContext
   */
  bcc?: Recipient[] | null;

  /**
   * Subject of send email dialog (if any)
   *
   * @type {string}
   * @memberof EmailContext
   */
  subject?: string | null;
}
