import { ProspectContextKeys } from '../../../..';
import { ClientContextKeys } from '../../../../context/keys/ClientContextKeys';
import { OrganizationContextKeys } from '../../../../context/keys/OrganizationContextKeys';
import { UserContextKeys } from '../../../../context/keys/UserContextKeys';
import { TabExtension } from '../TabExtension';
import { TabExtensionType } from '../TabExtensionType';

export class ProspectActionTabExtension extends TabExtension {
  /**
   * Account tab extension type is 'tab-account'
   *
   * @type {TabExtensionType}
   * @memberof ProspectActionTabExtension
   */
  public type: TabExtensionType.PROSPECT_ACTION = TabExtensionType.PROSPECT_ACTION;

  /**
   * In this section, the application author defines a list of predefined context information that prospect tab extension
   * needs from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys | ProspectContextKeys | OrganizationContextKeys)[]}
   * @memberof ProspectActionTabExtension
   */
  public context: (UserContextKeys | ClientContextKeys | ProspectContextKeys | OrganizationContextKeys)[];

  /**
   * Validates the account tab extension configuration
   *
   * @return {*}  {string[]}
   * @memberof ProspectActionTabExtension
   */
  validate(): string[] {
    const issues = super.validate();

    this.context.forEach((context) => {
      if (
        !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
        !Object.values(ClientContextKeys).includes(context as ClientContextKeys) &&
        !Object.values(ProspectContextKeys).includes(context as ProspectContextKeys)
      ) {
        issues.push('Context key is not one of the valid values for the account tab extension. Key: ' + context);
      }
    });

    return issues;
  }
}
