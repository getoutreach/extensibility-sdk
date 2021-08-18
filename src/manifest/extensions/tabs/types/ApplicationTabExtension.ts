import { ClientContextKeys } from '../../../../context/keys/ClientContextKeys';
import { UserContextKeys } from '../../../../context/keys/UserContextKeys';
import { TabExtension } from '../TabExtension';
import { TabExtensionType } from '../TabExtensionType';

export class ApplicationTabExtension extends TabExtension {
  /**
   * Application tab extension type is 'Application'
   *
   * @type {TabExtensionType}
   * @memberof ApplicationTabExtension
   */
  public readonly type: TabExtensionType.APPLICATION =
    TabExtensionType.APPLICATION;

  /**
   * In this section, the application author defines a list of predefined context information that application tab extension
   * needs from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys)}
   * @memberof ApplicationTabExtension
   */
  public context: UserContextKeys[] | ClientContextKeys[];

  /**
   * Validates the application tab extension configuration
   *
   * @return {*}  {string[]}
   * @memberof ApplicationTabExtension
   */
  validate(): string[] {
    const issues = super.validate();

    this.context.forEach((context) => {
      if (
        !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
        !Object.values(ClientContextKeys).includes(context as ClientContextKeys)
      ) {
        issues.push(
          'Context key is not one of the valid values for the application tab extension. Key: ' +
            context
        );
      }
    });

    return issues;
  }
}
