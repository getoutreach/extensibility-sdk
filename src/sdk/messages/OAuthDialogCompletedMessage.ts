import { Message } from './Message';
import { MessageType } from './MessageType';

/**
 * Message received from OAuth connect window containing
 * the result of the oauth process (http status code 200, 401 etc).
 *
 * @export
 * @class OAuthDialogCompletedMessage
 * @extends {Message}
 */
export class OAuthDialogCompletedMessage extends Message {
  /**
   *Creates an instance of OAuthDialogCompletedMessage.
   * @memberof OAuthDialogCompletedMessage
   */
  constructor() {
    super(MessageType.OAUTH_DIALOG_COMPLETED);
  }

  /**
   * Result of the OAuth dialog process represented using status codes
   * When result has 200 value it means OAuth completed successfully and sdk.authenticate() will resolve
   * When result has other value sdk.authenticate() will reject
   *
   * @type {string}
   * @memberof TokenMessage
   */
  public result: string;

  /**
   * An optional message providing additional contextual information on the result retrieved.
   *
   * @type {string}
   * @memberof OAuthDialogCompletedMessage
   */
  public message?: string;
}
