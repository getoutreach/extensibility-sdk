import { DataExtensionType } from './data/DataExtensionType';
import { MailingLinksDataExtension } from './data/MailingLinksDataExtension';
import { ContentExtensionType } from './editor/ContentExtensionType';
import { EditorExtension } from './editor/EditorExtension';
import { ExtensionType } from './ExtensionType';
import { ShellExtensionType } from './shell/ShellExtensionType';
import { ApplicationShellExtension } from './shell/types/ApplicationShellExtension';
import { CompanionShellExtension } from './shell/types/CompanionShellExtension';
import { KnowledgeShellExtension } from './shell/types/KnowledgeShellExtension';
import { SidekickShellExtension } from './shell/types/SidekickShellExtension';
import { ToolShellExtension } from './shell/types/ToolShellExtension';
import { TabExtensionType } from './tabs/TabExtensionType';
import { AccountTabExtension } from './tabs/types/AccountTabExtension';
import { OpportunityTabExtension } from './tabs/types/OpportunityTabExtension';
import { ProspectActionTabExtension } from './tabs/types/ProspectActionTabExtension';
import { ProspectTabExtension } from './tabs/types/ProspectTabExtension';
import { ReportsTabExtension } from './tabs/types/ReportsTabExtension';
import { TileExtension } from './tiles/TileExtension';
import { TileExtensionType } from './tiles/TileExtensionType';
import { AccountTileExtension } from './tiles/types/AccountTileExtension';
import { HomeEmailsTileExtension } from './tiles/types/HomeEmailsTileExtension';
import { HomeTasksTileExtension } from './tiles/types/HomeTasksTileExtension';
import { OpportunityTileExtension } from './tiles/types/OpportunityTileExtension';
import { ProspectTileExtension } from './tiles/types/ProspectTileExtension';

export const isProspectTileExtension = (extension: any): extension is ProspectTileExtension => {
  return extension?.type === TileExtensionType.PROSPECT;
};

export const isAccountTileExtension = (extension: any): extension is AccountTileExtension => {
  return extension?.type === TileExtensionType.ACCOUNT;
};

export const isOpportunityTileExtension = (extension: {
  type: ExtensionType;
}): extension is OpportunityTileExtension => {
  return extension?.type === TileExtensionType.OPPORTUNITY;
};

export const isHomeEmailTileExtension = (extension: any): extension is HomeEmailsTileExtension => {
  return extension?.type === TileExtensionType.HOME_EMAILS;
};

export const isHomeTasksTileExtension = (extension: any): extension is HomeTasksTileExtension => {
  return extension?.type === TileExtensionType.HOME_TASKS;
};

export const isTileExtension = (extension: any): extension is TileExtension => {
  if (
    extension.type !== TileExtensionType.ACCOUNT &&
    extension.type !== TileExtensionType.PROSPECT &&
    extension.type !== TileExtensionType.OPPORTUNITY &&
    extension.type !== TileExtensionType.HOME_EMAILS &&
    extension.type !== TileExtensionType.HOME_TASKS
  ) {
    return false;
  }

  return true;
};

export const isAccountTabExtension = (extension: any): extension is AccountTabExtension => {
  return extension?.type === TabExtensionType.ACCOUNT;
};

export const isOpportunityTabExtension = (extension: any): extension is OpportunityTabExtension => {
  return extension?.type === TabExtensionType.OPPORTUNITY;
};

export const isProspectTabExtension = (extension: any): extension is ProspectTabExtension => {
  return extension?.type === TabExtensionType.PROSPECT;
};

export const isReportsTabExtension = (extension: any): extension is ReportsTabExtension => {
  return extension?.type === TabExtensionType.REPORTS;
};

export const isProspectActionExtension = (extension: {
  type: ExtensionType;
}): extension is ProspectActionTabExtension => {
  return extension?.type === TabExtensionType.PROSPECT_ACTION;
};

export const isApplicationShellExtension = (extension: {
  type: ExtensionType;
}): extension is ApplicationShellExtension => {
  return extension?.type === ShellExtensionType.APPLICATION;
};

export const isCompanionShellExtension = (extension: any): extension is CompanionShellExtension => {
  return extension?.type === ShellExtensionType.COMPANION;
};

export const isSidekickShellExtension = (extension: any): extension is SidekickShellExtension => {
  return extension?.type === ShellExtensionType.SIDEKICK;
};

export const isToolShellExtension = (extension: any): extension is ToolShellExtension => {
  return extension?.type === ShellExtensionType.TOOL;
};

export const isKnowledgeShellExtension = (extension: any): extension is KnowledgeShellExtension => {
  return extension?.type === ShellExtensionType.KNOWLEDGE;
};

export const isActionShellExtension = (extension: any): extension is KnowledgeShellExtension => {
  return extension?.type === ShellExtensionType.ACTION;
};

export const isContentEditorExtension = (extension: any): extension is EditorExtension => {
  return extension?.type === ContentExtensionType.EDITOR;
};

export const isDataMailingExtension = (extension: any): extension is MailingLinksDataExtension => {
  return extension?.type === DataExtensionType.MAILING_LINKS;
};

export const isDataProspectEventsExtension = (extension: {
  type: ExtensionType;
}): extension is MailingLinksDataExtension => {
  return extension?.type === DataExtensionType.PROSPECT_EVENTS;
};

export const isIconExtension = (ext: {
  type: ExtensionType;
}): ext is { type: ExtensionType; host: { icon: string } } => {
  switch (ext.type) {
    case ShellExtensionType.APPLICATION:
    case TileExtensionType.ACCOUNT:
    case TileExtensionType.HOME_EMAILS:
    case TileExtensionType.HOME_TASKS:
    case TileExtensionType.PROSPECT:
    case TileExtensionType.OPPORTUNITY:
    case ContentExtensionType.EDITOR:
    case DataExtensionType.PROSPECT_EVENTS:
      return true;
    default:
      return false;
  }
};
