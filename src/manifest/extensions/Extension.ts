import { OutreachContext } from '../../context/OutreachContext';
import { ExtensionHost } from './ExtensionHost';
import { ExtensionType } from './ExtensionType';

export abstract class Extension {
  /**
   * Extension identifier
   *
   * @type {string}
   * @memberof Extension
   */
  identifier: string;

  /**
   * Extension version
   *
   * @type {string}
   * @memberof Extension
   */
  version: string;

  /**
   * Type property defines the type of extension
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {ExtensionType}
   * @memberof Extension
   */
  public type: ExtensionType;

  /**
   * Definition of addon host
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
   * @type {TabManifestHost}
   * @memberof TabExtension
   */
  public host: ExtensionHost;

  /**
   * Every extension has to be able to perform its own validation.
   *
   * @abstract
   * @param {Application} application
   * @return {*}  {string[]}
   * @memberof Extension
   */
  abstract validate(): string[];

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
}
