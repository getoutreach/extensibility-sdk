import { Message } from './Message';
import { MessageType } from './MessageType';

/**
 *  Message contains host performance measurements of addon loading.
 * This information can be used by addon creators to improve addon performance,
 * inform users if there are issues and report them to their own telemetry infrastructure.
 *
 * @export
 * @class LoadInfoMessage
 * @extends {Message}
 */
export class LoadInfoMessage extends Message {
  /**
   *Creates an instance of ReadyMessage.
   * @memberof ReadyMessage
   */
  constructor() {
    super(MessageType.HOST_LOAD_INFO);
  }

  /**
   * Duration how long it took for addon to be loaded.
   * Measured as time between addon start (iframe element creation) to iframe onloaded event.
   *
   * @type {number}
   * @memberof LoadInfoMessage
   */
  public loadTime: number;

  /**
   * Duration how long it took from start(iframe element creation) to host receiving Ready message.
   *
   * @type {number}
   * @memberof LoadInfoMessage
   */
  public readyTime: number;
}
