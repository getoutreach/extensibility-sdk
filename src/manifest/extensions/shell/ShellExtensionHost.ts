import { ExtensionHost } from '../ExtensionHost';
import { DecorationStyle } from './DecorationStyle';

/**
 * Section defining the addon creator hosting property.
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
 * @export
 * @class ShellExtensionHost
 */
export class ShellExtensionHost extends ExtensionHost {
  /**
   * Base64 string represents the icon to be shown in the addon store
   * and (if applicable) in the Outreach app.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#icon
   * @type {string}
   * @memberof ShellExtensionHost
   */
  icon: string;

  /**
   * Type of the decoration to be used for badge decorations.
   *  - none - no decoration badge
   *  - simple - a dot will be shown in case of badge decoration message with count > 0
   *  - full - a badge with counter will be shown.
   *
   * @see https://github.com/getoutreach/clientxtsdk/blob/master/docs/manifest.md#decoration
   * @type {DecorationStyle}
   * @memberof ShellExtensionHost
   */
  public decoration: DecorationStyle = DecorationStyle.NONE;
}
