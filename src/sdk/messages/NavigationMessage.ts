import { Message } from './Message';
import { MessageType } from './MessageType';
import { NavigationDestination } from './NavigationDestination';

/**
 * Message sent from the addon to host requesting that host
 * navigate away addon iframe to a different part of the Outreach application
 *
 * @export
 * @class NavigationMessage
 * @extends {Message}
 */
export class NavigationMessage extends Message {
  /**
   *Creates an instance of InitMessage.
   * @memberof NavigationMessage
   */
  constructor() {
    super(MessageType.REQUEST_NAVIGATE);
  }

  /**
   * Host destination of the navigation request.
   *
   * @type {NavigationDestination}
   * @memberof NavigationMessage
   */
  public destination: NavigationDestination;

  /**
   * Identity value (if any)
   *
   * @type {string}
   * @memberof NavigationMessage
   */
  public id?: string;

  /**
   * List of key value parameters to be sent to the navigation destination (if any)
   *
   * @type {{ [key: string]: string}}
   * @memberof NavigationMessage
   */
  public params?: { [key: string]: string };
}
