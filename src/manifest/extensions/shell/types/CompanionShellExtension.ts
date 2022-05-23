import { LocalizedString } from '../../../store/LocalizedString';
import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class CompanionShellExtension extends ShellExtension {
  /**
   * Companion tab extension type is 'Companion'
   *
   * @type {ShellExtensionType}
   * @memberof CompanionShellExtension
   */
  public readonly type: ShellExtensionType.COMPANION = ShellExtensionType.COMPANION;

  /**
   * Optional property defining the text, which will be shown as the tab title tooltip.
   * If omitted, app.headline manifest value will be used.
   *
   * @type {LocalizedString}
   * @memberof TabExtension
   */
  public description?: LocalizedString;
}
