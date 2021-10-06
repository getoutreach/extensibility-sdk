import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class ToolShellExtension extends ShellExtension {
  /**
   * Tool tab extension
   *
   * @type {ShellExtensionType}
   * @memberof ToolShellExtension
   */
  public readonly type: ShellExtensionType.TOOL =
    ShellExtensionType.TOOL;
}
