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
   * Optional address of the endpoint serving notification centric version of the addon experience.
   *
   * If defined, this endpoint will serve an empty HTML page with SDK on it, and the Outreach app
   * will load it early without the need for user interaction. That's how addon can update badge
   * decoration and invite Outreach user to open full addon experience as defined in host.url property.
   *
   * Addons of AddonType.LeftSideMenu type can only use this property.
   * For other addon types, this property will be ignored.
   *
   * @see https://github.com/getoutreach/clientxtsdk/blob/master/docs/manifest.md#notificationsUrl
   * @type {string}
   * @memberof ShellExtensionHost
   */
  notificationsUrl?: string;

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
