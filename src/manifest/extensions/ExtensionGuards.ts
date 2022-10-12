import { DataExtensionType } from './data/DataExtensionType';
import { MailingLinksDataExtension } from './data/MailingLinksDataExtension';
import { ContentExtensionType } from './editor/ContentExtensionType';
import { EditorExtension } from './editor/EditorExtension';
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
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TileExtensionType.PROSPECT) {
    return false;
  }

  return true;
};

export const isAccountTileExtension = (extension: any): extension is AccountTileExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TileExtensionType.ACCOUNT) {
    return false;
  }

  return true;
};

export const isOpportunityTileExtension = (extension: any): extension is OpportunityTileExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TileExtensionType.OPPORTUNITY) {
    return false;
  }

  return true;
};

export const isHomeEmailTileExtension = (extension: any): extension is HomeEmailsTileExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TileExtensionType.HOME_EMAILS) {
    return false;
  }

  return true;
};

export const isHomeTasksTileExtension = (extension: any): extension is HomeTasksTileExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TileExtensionType.HOME_TASKS) {
    return false;
  }

  return true;
};

export const isTileExtension = (extension: any): extension is TileExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

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
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TabExtensionType.ACCOUNT) {
    return false;
  }

  return true;
};

export const isOpportunityTabExtension = (extension: any): extension is OpportunityTabExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TabExtensionType.OPPORTUNITY) {
    return false;
  }

  return true;
};

export const isProspectTabExtension = (extension: any): extension is ProspectTabExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TabExtensionType.PROSPECT) {
    return false;
  }

  return true;
};

export const isReportsTabExtension = (extension: any): extension is ReportsTabExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TabExtensionType.REPORTS) {
    return false;
  }

  return true;
};

export const isProspectActionExtension = (extension: any): extension is ProspectActionTabExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== TabExtensionType.PROSPECT_ACTION) {
    return false;
  }

  return true;
};

export const isApplicationShellExtension = (extension: any): extension is ApplicationShellExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== ShellExtensionType.APPLICATION) {
    return false;
  }

  return true;
};

export const isCompanionShellExtension = (extension: any): extension is CompanionShellExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== ShellExtensionType.COMPANION) {
    return false;
  }

  return true;
};

export const isSidekickShellExtension = (extension: any): extension is SidekickShellExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== ShellExtensionType.SIDEKICK) {
    return false;
  }

  return true;
};

export const isToolShellExtension = (extension: any): extension is ToolShellExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== ShellExtensionType.TOOL) {
    return false;
  }

  return true;
};

export const isKnowledgeShellExtension = (extension: any): extension is KnowledgeShellExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== ShellExtensionType.KNOWLEDGE) {
    return false;
  }

  return true;
};

export const isActionShellExtension = (extension: any): extension is KnowledgeShellExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== ShellExtensionType.ACTION) {
    return false;
  }

  return true;
};

export const isEditorShellExtension = (extension: any): extension is EditorExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== ContentExtensionType.EDITOR) {
    return false;
  }

  return true;
};

export const isDataMailingExtension = (extension: any): extension is MailingLinksDataExtension => {
  if (!Object.prototype.hasOwnProperty.call(extension, 'type') || typeof extension.type !== 'string') {
    return false;
  }

  if (extension.type !== DataExtensionType.MAILING_LINKS) {
    return false;
  }

  return true;
};
