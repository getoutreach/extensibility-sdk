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
