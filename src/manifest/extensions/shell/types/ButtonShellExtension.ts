import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class ButtonShellExtension extends ShellExtension {
  /**
   * Button shell extension
   *
   * @type {ShellExtensionType}
   * @memberof ButtonShellExtension
   */
  public readonly type: ShellExtensionType.BUTTON = ShellExtensionType.BUTTON;
}
