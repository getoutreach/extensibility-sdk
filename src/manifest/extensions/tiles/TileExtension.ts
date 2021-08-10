import { OutreachContext } from '../../../context/OutreachContext';
import { Extension } from '../Extension';
import { TileExtensionType } from './TileExtensionType';

export class TileExtension extends Extension {
  /**
   * Type property defines what the type of intelligent tile and where it should be loaded.
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {TileExtensionType}
   * @memberof Host
   */
  public type: TileExtensionType;

  /**
   * Validates the tile extension configuration.
   *
   * @return {*}  {string[]}
   * @memberof TileExtension
   */
  validate(): string[] {
    throw new Error('Method not implemented.');
  }

  init(_context: OutreachContext): boolean {
    throw new Error('Method not implemented.');
  }
}
