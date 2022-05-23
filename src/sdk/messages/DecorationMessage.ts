import { Message } from './Message';
import { MessageType } from './MessageType';

export class DecorationUpdateMessage extends Message {
  /**
   * Creates an instance of DecorationMessage.
   * @memberof DecorationMessage
   */
  constructor() {
    super(MessageType.REQUEST_DECORATION_UPDATE);
  }

  /**
   * Extension decoration to be shown to Outreach user
   * in a form of badge or text decoration
   *
   * @type {string}
   * @memberof DecorationUpdateMessage
   */
  public value: string;
}
