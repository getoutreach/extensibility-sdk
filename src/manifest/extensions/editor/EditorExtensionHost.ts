import { ExtensionHost } from '../ExtensionHost';

/**
 * Section defining the addon creator hosting property.
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
 * @export
 * @class EditorExtensionHost
 */
export class EditorExtensionHost extends ExtensionHost {
  /**
   * Width of the iframe popup dialog
   *
   * @type {number}
   * @memberof ShellExtensionHost
   */
  width?: number;

  /**
   * Height of the iframe dialog
   *
   * @type {number}
   * @memberof ShellExtensionHost
   */
  height?: number;
}
