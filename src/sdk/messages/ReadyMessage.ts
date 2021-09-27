import { Message } from './Message';
import { MessageType } from './MessageType';

export class ReadyMessage extends Message {
  /**
   *Creates an instance of ReadyMessage.
   * @memberof ReadyMessage
   */
  constructor() {
    super(MessageType.READY);

    this.version = 2;
  }

  /**
   * Version of the client SDK determining the type of init
   * message Outreach host will send. (optional)
   *
   *
   * @type {number}
   * @memberof ReadyMessage
   */
  public version?: number;
}
