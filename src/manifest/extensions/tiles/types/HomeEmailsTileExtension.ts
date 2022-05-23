import { ClientContextKeys } from '../../../../context/keys/ClientContextKeys';
import { OrganizationContextKeys } from '../../../../context/keys/OrganizationContextKeys';
import { UserContextKeys } from '../../../../context/keys/UserContextKeys';
import { TileExtension } from '../TileExtension';
import { TileExtensionType } from '../TileExtensionType';

export class HomeEmailsTileExtension extends TileExtension {
  /**
   * Type property defines what the type of intelligent tile and where it should be loaded.
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {TileExtensionType}
   * @memberof HomeEmailTileExtension
   */
  public type: TileExtensionType.HOME_EMAILS = TileExtensionType.HOME_EMAILS;

  /**
   * In this section, the application author defines a list of predefined context information that
   * home tile extension needs from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys | AccountContextKeys | OrganizationContextKeys)[]}
   * @memberof HomeEmailTileExtension
   */
  public context: (UserContextKeys | ClientContextKeys | OrganizationContextKeys)[];

  /**
   * Validates the home tile extension configuration
   *
   * @return {*}  {string[]}
   * @memberof HomeEmailTileExtension
   */
  validate(): string[] {
    const issues = super.validate();

    this.context.forEach((context) => {
      if (
        !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
        !Object.values(ClientContextKeys).includes(context as ClientContextKeys)
      ) {
        issues.push('Context key is not one of the valid values for the home tile extension. Key: ' + context);
      }
    });

    return issues;
  }
}
