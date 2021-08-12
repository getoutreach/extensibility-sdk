import { Message } from './Message';
import { MessageType } from './MessageType';

export class ReadyMessage extends Message {
  /**
     *Creates an instance of ReadyMessage.
     * @memberof ReadyMessage
     */
  constructor () {
    super(MessageType.READY);
  }
}
