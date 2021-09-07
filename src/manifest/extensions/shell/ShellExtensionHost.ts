import { ExtensionHost } from '../ExtensionHost';

/**
 * Section defining the addon creator hosting property.
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
 * @export
 * @class ManifestHost
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
   * @memberof ManifestHost
   */
  notificationsUrl?: string;
}
