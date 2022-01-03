import { ClientContextKeys } from '../../../../context/keys/ClientContextKeys';
import { OpportunityContextKeys } from '../../../../context/keys/OpportunityContextKeys';
import { UserContextKeys } from '../../../../context/keys/UserContextKeys';
import { TileExtension } from '../TileExtension';
import { TileExtensionType } from '../TileExtensionType';

export class OpportunityTileExtension extends TileExtension {
  /**
   * Type property defines what the type of intelligent tile and where it should be loaded.
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {TileExtensionType}
   * @memberof OpportunityTileExtension
   */
  public type: TileExtensionType.OPPORTUNITY = TileExtensionType.OPPORTUNITY;

  /**
   * In this section, the application author defines a list of predefined context information that
   * opportunity tile extension needs from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys | OpportunityContextKeys)}
   * @memberof OpportunityTileExtension
   */
  public context: (
    | UserContextKeys
    | ClientContextKeys
    | OpportunityContextKeys
  )[];

  /**
   * Validates the opportunity tile extension configuration
   *
   * @return {*}  {string[]}
   * @memberof OpportunityTileExtension
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
          'Context key is not one of the valid values for the opportunity tile extension. Key: ' +
            context
        );
      }
    });

    return issues;
  }
}
