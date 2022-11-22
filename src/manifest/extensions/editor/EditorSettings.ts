import { EditorSize } from './EditorSize';

/**
 * Optional section defining tile settings defined by extension creator
 * defining the editor iframe rendering in Outreach client
 *
 * @export
 * @class EditorSettings
 */
export class EditorSettings {
  /**
   * Recommended size of the iframe popup.
   *
   * @type {EditorSize[]}
   * @memberof EditorSettings
   */
  public recommended?: EditorSize[];
}
