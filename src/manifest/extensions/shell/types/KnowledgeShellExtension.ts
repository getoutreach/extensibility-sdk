import { ShellExtension } from '../ShellExtension';
import { ShellExtensionType } from '../ShellExtensionType';

export class KnowledgeShellExtension extends ShellExtension {
  /**
   * Tool tab extension
   *
   * @type {ShellExtensionType}
   * @memberof KnowledgeShellExtension
   */
  public readonly type: ShellExtensionType.KNOWLEDGE = ShellExtensionType.KNOWLEDGE;
}
