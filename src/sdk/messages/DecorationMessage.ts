import { Message } from './Message';
import { MessageType } from './MessageType';
import { DecorationUpdateType } from './DecorationUpdateType';

export class DecorationUpdateMessage extends Message {
  /**
   *Creates an instance of InitMessage.
   * @memberof DecorationMessage
   */
  constructor() {
    super(MessageType.REQUEST_DECORATION_UPDATE);
  }

  /**
   * Text of the extension decoration to be shown to Outreach user
   * Also it can contain a badge value or a new icon to be shown.
   *
   * @type {string}
   * @memberof DecorationUpdateMessage
   */
  public value: string;

  /**
   * Type of the addon decoration being updated.
   *
   * @type {DecorationUpdateType}
   * @memberof DecorationUpdateMessage
   */
  public decorationType: DecorationUpdateType;
}
