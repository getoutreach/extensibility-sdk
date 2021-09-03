import { initAccountContext, toAccountParams } from './AccountContextUtils';
import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';

export class AccountContext extends CustomContext {
  /**
   * Unique account identifier
   *
   * @type {string}
   * @memberof AccountContext
   */
  id?: string;

  /**
   * A custom ID for the account, often referencing an ID in an external system.
   *
   * @type {string}
   * @memberof AccountContext
   */
  customId?: string;

  /**
   * A custom description of the account.
   *
   * @type {string}
   * @memberof AccountContext
   */
  description?: string;

  /**
   * The company’s primary geographic region (e.g. "Eastern USA").
   *
   * @type {string}
   * @memberof AccountContext
   */
  locality?: string;

  /**
   * The name of the company (e.g. "Acme Corporation").
   *
   * @type {string}
   * @memberof AccountContext
   */
  name?: string;

  /**
   * A list of tag values associated with the account (e.g. ["Enterprise", "Tier 1"]).
   *
   * @type {string}
   * @memberof AccountContext
   */
  tags?: string;

  /**
   * Collection of zero or more external provider data current account has in external systems
   * which are linked through installed Outreach plugins.
   *
   * @type {ExternalInfoContext[]}
   * @memberof AccountContext
   */
  externalInfo: ExternalInfoContext[] = [];

  /**
   * Attempts to initialize the account context with a given parameter.
   *
   * @memberof AccountContext
   */
  public initFrom = (param: ContextParam): boolean => {
    return initAccountContext(this, param);
  };

  /**
   * Converts current state of account context to an array of context params.
   *
   * @return {*}  {ContextParam[]}
   * @memberof AccountContext
   */
  public toParams(): ContextParam[] {
    return toAccountParams(this);
  }
}
