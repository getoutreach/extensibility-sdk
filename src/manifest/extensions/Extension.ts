import { AllContextKeys } from '../../context/keys/AllContextKeys';
import { OutreachContext } from '../../context/OutreachContext';
import { LocalizedString } from '../store/LocalizedString';
import { ExtensionHost } from './ExtensionHost';
import { ExtensionType } from './ExtensionType';

export abstract class Extension {
  /**
   * In this section, the addon author defines a list of predefined context information that addon needs from Outreach
   * to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {AllContextKeys[]}
   * @memberof Extension
   */
  public context: AllContextKeys[];

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
   * Optional property defining the text, which will be shown as the tab title/in tile selector etc.
   * If omitted, app.headline manifest value will be used.
   *
   * @type {LocalizedString}
   * @memberof Extension
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
