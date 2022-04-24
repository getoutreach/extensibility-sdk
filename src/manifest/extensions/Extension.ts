import { OutreachContext } from '../../context/OutreachContext';
import { LocalizedString } from '../store/LocalizedString';
import { ExtensionHost } from './ExtensionHost';
import { ExtensionType } from './ExtensionType';

export abstract class Extension {
  /**
   * Extension identifier
   *
   * @type {string}
   * @memberof Extension
   */
  public identifier: string;

  /**
   * Definition of addon host
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
   * @type {ExtensionHost}
   * @memberof Extension
   */
  public host: ExtensionHost;

  /**
   * Optional property defining the text, which will be shown as the tab title.
   * If omitted, app.headline manifest value will be used.
   *
   * @type {LocalizedString}
   * @memberof TabExtension
   */
  public title?: LocalizedString;

  /**
   * Type property defines the type of extension
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {ExtensionType}
   * @memberof Extension
   */
  public type: ExtensionType;

  /**
   * Extension version
   *
   * @type {string}
   * @memberof Extension
   */
  version: string;

  /**
   * Enables extension to contribute to building up
   * outreach context which will be send to addon creator
   *
   * @abstract
   * @param {OutreachContext} context
   * @return {*}  {boolean}
   * @memberof Extension
   */
  abstract init(context: OutreachContext): boolean;

  /**
   * Every extension has to be able to perform its own validation.
   *
   * @abstract
   * @param {Application} application
   * @return {*}  {string[]}
   * @memberof Extension
   */
  abstract validate(): string[];
}
