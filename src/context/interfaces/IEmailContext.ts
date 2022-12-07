/**
 * Collection of email context values which can be retrieved
 * in the editor extensions loaded in the email popup
 *
 * @export
 * @interface IEmailContext
 */
export interface IEmailContext {
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
}
