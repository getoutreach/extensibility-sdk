import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class FloatShellExtension extends ShellExtension {
  /**
   * Float shell extension
   *
   * @type {ShellExtensionType}
   * @memberof FloatShellExtension
   */
  public readonly type: ShellExtensionType.FLOAT = ShellExtensionType.FLOAT;
}
