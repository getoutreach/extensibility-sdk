import { OutreachContext } from '../../context/OutreachContext';
import { Application } from '../Application';

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
   * Every extension has to be able to perform its own validation.
   *
   * @abstract
   * @param {Application} application
   * @return {*}  {string[]}
   * @memberof Extension
   */
  abstract validate(application: Application): string[];

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
