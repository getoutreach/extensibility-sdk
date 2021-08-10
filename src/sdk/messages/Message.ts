/* eslint-disable no-unused-vars */
import { MessageType } from './MessageType';

/**
 * SDK addon message sent and received from other addons and/or host
 *
 * @export
 * @class AddonMessage
 */
export class Message {
  /**
   *Creates an instance of AddonMessage.
   * @param {MessageType} type
   * @memberof AddonMessage
   */
  constructor(type: MessageType) {
    this.type = type;
  }

  /**
   * Type of message being sent
   *
   * @type {string}
   * @memberof AddonMessage
   */
  public type: MessageType;
}
