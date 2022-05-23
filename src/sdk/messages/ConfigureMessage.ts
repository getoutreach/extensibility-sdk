import { Message } from './Message';
import { MessageType } from './MessageType';

export class ConfigureMessage extends Message {
  /**
   *Creates an instance of ConfigureMessage.
   * @memberof ConfigureMessage
   */
  constructor() {
    super(MessageType.CONFIGURE);
  }
}
