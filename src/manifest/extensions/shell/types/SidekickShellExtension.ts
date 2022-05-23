import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class SidekickShellExtension extends ShellExtension {
  /**
   * Tool tab extension
   *
   * @type {ShellExtensionType}
   * @memberof SidekickShellExtension
   */
  public readonly type: ShellExtensionType.SIDEKICK = ShellExtensionType.SIDEKICK;
}
