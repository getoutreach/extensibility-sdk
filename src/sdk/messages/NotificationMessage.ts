/* eslint-disable no-unused-vars */

import { Message } from './Message';
import { MessageType } from './MessageType';
import { NotificationType } from './NotificationType';

export class NotificationMessage extends Message {
  /**
   *Creates an instance of NotificationMessage.
   * @memberof InitMessage
   */
  constructor() {
    super(MessageType.REQUEST_NOTIFY);
  }

  /**
   * Text of the notification to be shown to Outreach user
   *
   * @type {string}
   * @memberof NotificationMessage
   */
  public notificationText: string;

  /**
   * Type of notification being shown to Outreach user.
   *
   * @type {NotificationType}
   * @memberof NotificationMessage
   */
  public notificationType: NotificationType;
}
