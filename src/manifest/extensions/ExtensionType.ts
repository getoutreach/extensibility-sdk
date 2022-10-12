import { DataExtensionType } from './data/DataExtensionType';
import { MailingLinksDataExtension } from './data/MailingLinksDataExtension';
import { ContentExtensionType } from './editor/ContentExtensionType';
import { ShellExtensionType } from './shell/ShellExtensionType';
import { ActionShellExtension } from './shell/types/ActionShellExtension';
import { ApplicationShellExtension } from './shell/types/ApplicationShellExtension';
import { CompanionShellExtension } from './shell/types/CompanionShellExtension';
import { SidekickShellExtension } from './shell/types/SidekickShellExtension';
import { ToolShellExtension } from './shell/types/ToolShellExtension';
import { TabExtensionType } from './tabs/TabExtensionType';
import { AccountTabExtension } from './tabs/types/AccountTabExtension';
import { OpportunityTabExtension } from './tabs/types/OpportunityTabExtension';
import { ProspectActionTabExtension } from './tabs/types/ProspectActionTabExtension';
import { ProspectTabExtension } from './tabs/types/ProspectTabExtension';
import { ReportsTabExtension } from './tabs/types/ReportsTabExtension';
import { TileExtensionType } from './tiles/TileExtensionType';
import { AccountTileExtension } from './tiles/types/AccountTileExtension';
import { OpportunityTileExtension } from './tiles/types/OpportunityTileExtension';
import { ProspectTileExtension } from './tiles/types/ProspectTileExtension';

export type ExtensionType =
  | TabExtensionType
  | TileExtensionType
  | ShellExtensionType
  | ContentExtensionType
  | DataExtensionType;

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

export type AccountExtension = AccountTabExtension | AccountTileExtension;

export type OpportunityExtension = OpportunityTabExtension | OpportunityTileExtension;

export type ProspectExtension = ProspectTabExtension | ProspectTileExtension | ProspectActionTabExtension;

export type AppExtension =
  | ApplicationShellExtension
  | CompanionShellExtension
  | SidekickShellExtension
  | ToolShellExtension
  | ActionShellExtension;

export type DataExtension = MailingLinksDataExtension;

export type GeneralExtension = AppExtension | ReportsTabExtension;
