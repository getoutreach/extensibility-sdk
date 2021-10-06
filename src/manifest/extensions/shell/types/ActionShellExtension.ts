import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class ActionShellExtension extends ShellExtension {
  /**
   * Action shell extension
   *
   * @type {ShellExtensionType}
   * @memberof ActionShellExtension
   */
  public readonly type: ShellExtensionType.ACTION = ShellExtensionType.ACTION;
}
