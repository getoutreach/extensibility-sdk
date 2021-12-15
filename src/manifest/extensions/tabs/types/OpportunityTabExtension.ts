import { ClientContextKeys, OpportunityContextKeys, UserContextKeys } from '@outreach/extensibility-sdk-context-keys';
import { TabExtension } from '../TabExtension';
import { TabExtensionType } from '../TabExtensionType';

export class OpportunityTabExtension extends TabExtension {
  /**
   * Opportunity tab extension type is 'tab-opportunity'
   *
   * @type {TabExtensionType}
   * @memberof OpportunityTabExtension
   */
  public readonly type: TabExtensionType.OPPORTUNITY =
    TabExtensionType.OPPORTUNITY;

  /**
   * In this section, the application author defines a list of predefined context information that
   * opportunity tab extension needs from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys | OpportunityContextKeys)}
   * @memberof OpportunityTabExtension
   */
  public context: (
    | UserContextKeys
    | ClientContextKeys
    | OpportunityContextKeys
  )[];

  /**
   * Validates the opportunity tab extension configuration
   *
   * @return {*}  {string[]}
   * @memberof OpportunityTabExtension
   */
  validate(): string[] {
    const issues = super.validate();

    this.context.forEach((context) => {
      if (
        !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
        !Object.values(ClientContextKeys).includes(
          context as ClientContextKeys
        ) &&
        !Object.values(OpportunityContextKeys).includes(
          context as OpportunityContextKeys
        )
      ) {
        issues.push(
          'Context key is not one of the valid values for the opportunity tab extension. Key: ' +
            context
        );
      }
    });

    return issues;
  }
}
