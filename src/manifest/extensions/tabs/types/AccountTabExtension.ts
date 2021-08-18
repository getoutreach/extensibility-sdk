import { AccountContextKeys } from '../../../../context/keys/AccountContextKeys';
import { ClientContextKeys } from '../../../../context/keys/ClientContextKeys';
import { UserContextKeys } from '../../../../context/keys/UserContextKeys';
import { TabExtension } from '../TabExtension';
import { TabExtensionType } from '../TabExtensionType';

export class AccountTabExtension extends TabExtension {
  /**
   * Account tab extension type is 'tab-account'
   *
   * @type {TabExtensionType}
   * @memberof AccountTabExtension
   */
  public type: TabExtensionType.ACCOUNT = TabExtensionType.ACCOUNT;

  /**
   * In this section, the application author defines a list of predefined context information that prospect tab extension
   * needs from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys | AccountContextKeys)[]}
   * @memberof AccountTabExtension
   */
  public context: (UserContextKeys | ClientContextKeys | AccountContextKeys)[];

  /**
   * Validates the account tab extension configuration
   *
   * @return {*}  {string[]}
   * @memberof AccountTabExtension
   */
  validate(): string[] {
    const issues = super.validate();

    this.context.forEach((context) => {
      if (
        !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
        !Object.values(ClientContextKeys).includes(
          context as ClientContextKeys
        ) &&
        !Object.values(AccountContextKeys).includes(
          context as AccountContextKeys
        )
      ) {
        issues.push(
          'Context key is not one of the valid values for the account tab extension. Key: ' +
            context
        );
      }
    });

    return issues;
  }
}
