import { initAccountContext, toAccountParams } from './AccountContextUtils';
import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';
import { IAccountContext } from '../interfaces/IAccountContext';

export class AccountContext extends CustomContext implements IAccountContext {
  /**
   * Unique account identifier
   *
   * @type {string}
   * @memberof AccountContext
   */
  id: string;

  /**
   * A custom ID for the account, often referencing an ID in an external system.
   *
   * @type {string}
   * @memberof AccountContext
   */
  customId?: string | null;

  /**
   * The domain of the account company
   *
   * @type {string}
   * @memberof AccountContext
   */
  domain?: string | null;

  /**
   * A custom description of the account.
   *
   * @type {string}
   * @memberof AccountContext
   */
  description?: string | null;

  /**
   * Identity of the current account in the external system which is linked through installed Outreach plugin.
   *
   * @type {string}
   * @memberof AccountContext
   */
  externalProviderId?: string | null;

  /**
   * Name of the external system provider which is linked through installed Outreach plugin.
   *
   * @type {string}
   * @memberof AccountContext
   */
  externalProviderName?: string | null;

  /**
   * The company’s primary geographic region (e.g. "Eastern USA").
   *
   * @type {string}
   * @memberof AccountContext
   */
  locality?: string | null;

  /**
   * The name of the company (e.g. "Acme Corporation").
   *
   * @type {string}
   * @memberof AccountContext
   */
  name?: string | null;

  /**
   * A list of tag values associated with the account (e.g. ["Enterprise", "Tier 1"]).
   *
   * @type {string}
   * @memberof AccountContext
   */
  tags?: string | null;

  /**
   * Collection of zero or more external provider data current account has in external systems
   * which are linked through installed Outreach plugins.
   *
   * @type {ExternalInfoContext[]}
   * @memberof AccountContext
   * @deprecated Usage of externalInfo is deprecated. Please use externalProviderId and externalProviderName instead.
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
