import { EnvironmentInfo } from './EnvironmentInfo';
import { Message } from './Message';
import { MessageType } from './MessageType';

export class EnvironmentMessage extends Message {
  /**
   * Creates an instance of EnvironmentMessage.
   * @memberof EnvironmentMessage
   */
  constructor() {
    super(MessageType.REQUEST_ENVIRONMENT_UPDATE);
  }

  /**
   * New environment definition addon requests from host.
   *
   * @type {EnvironmentInfo}
   * @memberof EnvironmentMessage
   */
  public environment: EnvironmentInfo;
}
