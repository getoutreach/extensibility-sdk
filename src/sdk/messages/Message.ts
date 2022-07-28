/* eslint-disable no-unused-vars */
import { MessageType } from './MessageType';

export interface IMessage {
  [key: string]: unknown;
}

/**
 * SDK addon message sent and received from other addons and/or host
 *
 * @export
 * @class AddonMessage
 */
export class Message implements IMessage {
  /**
   *Creates an instance of AddonMessage.
   * @param {MessageType} type
   * @memberof Message
   */
  constructor(type: MessageType) {
    this.type = type;
  }

  [key: string]: unknown;

  /**
   * Type of message being sent
   *
   * @type {string}
   * @memberof Message
   */
  public type: MessageType;
}
