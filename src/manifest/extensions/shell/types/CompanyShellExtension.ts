import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class CompanionShellExtension extends ShellExtension {
  /**
   * Companion tab extension type is 'Companion'
   *
   * @type {ShellExtensionType}
   * @memberof CompanionShellExtension
   */
  public readonly type: ShellExtensionType.COMPANION =
    ShellExtensionType.COMPANION;
}
