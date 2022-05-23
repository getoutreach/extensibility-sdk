import { ClientContextKeys } from '../../../../context/keys/ClientContextKeys';
import { OrganizationContextKeys } from '../../../../context/keys/OrganizationContextKeys';
import { UserContextKeys } from '../../../../context/keys/UserContextKeys';
import { TabExtension } from '../TabExtension';
import { TabExtensionType } from '../TabExtensionType';

export class ReportsTabExtension extends TabExtension {
  /**
   * Opportunity tab extension type is 'tab-reports'
   *
   * @type {TabExtensionType}
   * @memberof ReportsTabExtension
   */
  public readonly type: TabExtensionType.REPORTS = TabExtensionType.REPORTS;

  /**
   * In this section, the application author defines a list of predefined context information that
   * prospect tab extensionneeds from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * In case of reports tab as there is no contextual entity (like in the case of prospects, accounts and opportunities) only
   * a user and client context are available
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys | OrganizationContextKeys)[]}
   * @memberof ReportsTabExtension
   */
  public context: (UserContextKeys | ClientContextKeys | OrganizationContextKeys)[];

  /**
   * Validates the prospect tab extension configuration
   *
   * @return {*}  {string[]}
   * @memberof ReportsTabExtension
   */
  validate(): string[] {
    const issues = super.validate();

    this.context.forEach((context) => {
      if (
        !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
        !Object.values(ClientContextKeys).includes(context as ClientContextKeys)
      ) {
        issues.push('Context key is not one of the valid values for the reports tab extension. Key: ' + context);
      }
    });

    return issues;
  }
}
