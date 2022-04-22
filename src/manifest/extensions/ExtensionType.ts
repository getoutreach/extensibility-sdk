import { ShellExtensionType } from './shell/ShellExtensionType';
import { TabExtensionType } from './tabs/TabExtensionType';
import { TileExtensionType } from './tiles/TileExtensionType';

export type ExtensionType =
  | TabExtensionType
  | TileExtensionType
  | ShellExtensionType;

export type ProspectExtensionType =
  | TabExtensionType.PROSPECT
  | TabExtensionType.PROSPECT_ACTION
  | TabExtensionType.PROSPECT_SIDEBAR
  | TileExtensionType.PROSPECT;

export type AccountExtensionType =
  | TabExtensionType.ACCOUNT
  | TabExtensionType.ACCOUNT_ACTION
  | TabExtensionType.ACCOUNT_SIDEBAR
  | TileExtensionType.ACCOUNT;

export type OpportunityExtensionType =
  | TabExtensionType.OPPORTUNITY
  | TabExtensionType.OPPORTUNITY_ACTION
  | TabExtensionType.OPPORTUNITY_SIDEBAR
  | TileExtensionType.OPPORTUNITY;
