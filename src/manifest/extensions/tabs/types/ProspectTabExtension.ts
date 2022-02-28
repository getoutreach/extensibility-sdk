import { ClientContextKeys } from '../../../../context/keys/ClientContextKeys';
import { OrganizationContextKeys } from '../../../../context/keys/OrganizationContextKeys';
import { ProspectContextKeys } from '../../../../context/keys/ProspectContextKeys';
import { UserContextKeys } from '../../../../context/keys/UserContextKeys';
import { TabExtension } from '../TabExtension';
import { TabExtensionType } from '../TabExtensionType';

export class ProspectTabExtension extends TabExtension {
  /**
   * Opportunity tab extension type is 'tab-prospect'
   *
   * @type {TabExtensionType}
   * @memberof ProspectTabExtension
   */
  public readonly type: TabExtensionType.PROSPECT = TabExtensionType.PROSPECT;

  /**
   * In this section, the application author defines a list of predefined context information that
   * prospect tab extensionneeds from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys | ProspectContextKeys | OrganizationContextKeys)[]}
   * @memberof ProspectTabExtension
   */
  public context: (
    | UserContextKeys
    | ClientContextKeys
    | ProspectContextKeys
    | OrganizationContextKeys
  )[];

  /**
   * Validates the prospect tab extension configuration
   *
   * @return {*}  {string[]}
   * @memberof ProspectTabExtension
   */
  validate(): string[] {
    const issues = super.validate();

    this.context.forEach((context) => {
      if (
        !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
        !Object.values(ClientContextKeys).includes(
          context as ClientContextKeys
        ) &&
        !Object.values(ProspectContextKeys).includes(
          context as ProspectContextKeys
        )
      ) {
        issues.push(
          'Context key is not one of the valid values for the prospect tab extension. Key: ' +
            context
        );
      }
    });

    return issues;
  }
}
