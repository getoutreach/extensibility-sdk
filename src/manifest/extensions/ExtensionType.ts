import { ShellExtensionType } from './shell/ShellExtensionType';
import { TabExtensionType } from './tabs/TabExtensionType';
import { TileExtensionType } from './tiles/TileExtensionType';

export type ExtensionType =
  | TabExtensionType
  | TileExtensionType
  | ShellExtensionType;
