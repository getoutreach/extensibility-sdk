import { Extension } from '../Extension';

import { OutreachContext } from '../../../context/OutreachContext';
import { DataExtensionType } from './DataExtensionType';
import { UnknownContextKeys } from '../../../context/keys/UnknownContextKeys';

export abstract class DataExtension extends Extension {
  /**
   * Data extensions are not supporting any contextual properties
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   *  @type {UnknownContextKeys[]}
   * @memberof DataExtension
   */
  public context: UnknownContextKeys[];

  /**
   * Type property defines the type of tab extension
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {DataExtensionType}
   * @memberof DataExtension
   */
  public type!: DataExtensionType;

  /**
   * Initialize Outreach context with contextual information.
   *
   * @param {OutreachContext} context
   * @return {*}  {boolean}
   * @memberof DataExtension
   */
  init(_: OutreachContext): boolean {
    // NOTE: nimal, 10/12/22 - Data extensions are not initialized with context
    return false;
  }
}
