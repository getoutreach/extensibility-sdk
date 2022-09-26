import { Message } from './Message';
import { MessageType } from './MessageType';

/**
 * Message sent from the addon containing the data to enhance rich text editor content.
 *
 * @export
 * @class EnhanceTextEditorMessage
 * @extends {Message}
 */
export class EnhanceTextEditorMessage extends Message {
  /**
   *Creates an instance of EnhanceTextEditorMessage.
   * @memberof EnhanceTextEditorMessage
   */
  constructor() {
    super(MessageType.ENHANCE_TEXT_EDITOR);
  }

  /**
   * An html content to be appended at the current cursor in the text editor.
   *
   * @type {string}
   * @memberof EnhanceTextEditorMessage
   */
  public html: string;

  /**
   * A string containing "subject" field for some composer areas (e.g. e-mail).
   *
   * @type {string}
   * @memberof EnhanceTextEditorMessage
   */
  public subject?: string;
}
