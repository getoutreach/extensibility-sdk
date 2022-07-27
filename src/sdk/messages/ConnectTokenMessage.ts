import { Message } from './Message';
import { MessageType } from './MessageType';

/**
 * Message received from OAuth connect window containing
 * the valid access token for Outreach API access.
 *
 * @export
 * @class ConnectTokenMessage
 * @extends {Message}
 * @deprecated This type of message will be deprecated in upcoming future releases.
 */
export class ConnectTokenMessage extends Message {
  /**
   *Creates an instance of ConnectTokenMessage.
   * @memberof ConnectTokenMessage
   */
  constructor() {
    super(MessageType.CONNECT_AUTH_TOKEN);
  }

  /**
   * Access token to be used as bearer token for Outreach API access.
   *
   * @type {string}
   * @memberof TokenMessage
   */
  public token: string;

  /**
   * Time when token will expire.
   *
   * @type {number}
   * @memberof TokenMessage
   */
  public expiresAt: number;
}
