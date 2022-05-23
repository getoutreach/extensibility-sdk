import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class ApplicationShellExtension extends ShellExtension {
  /**
   * Application tab extension type is 'Application'
   *
   * @type {ShellExtensionType}
   * @memberof ApplicationShellExtension
   */
  public readonly type: ShellExtensionType.APPLICATION = ShellExtensionType.APPLICATION;
}
