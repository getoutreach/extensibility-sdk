import { Message } from './Message';
import { MessageType } from './MessageType';
import { DecorationType } from './DecorationType';

export class DecorationMessage extends Message {
  /**
     *Creates an instance of InitMessage.
     * @memberof DecorationMessage
     */
  constructor () {
    super(MessageType.REQUEST_DECORATION_UPDATE);
  }

    /**
     * Text of the addon decoration to be shown to Outreach user
     *
     * @type {string}
     * @memberof DecorationMessage
     */
    public decorationText: string;

    /**
     * Type of the addon decoration being updated.
     *
     * @type {DecorationType}
     * @memberof DecorationMessage
     */
    public decorationType: DecorationType;
}
