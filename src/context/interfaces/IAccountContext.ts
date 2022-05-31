import { ICustomContext } from './ICustomContext';
import { IExternalInfoContext } from './IExternalInfoContext';

export interface IAccountContext extends ICustomContext {
  /**
   * Unique account identifier
   *
   * @type {string}
   */
  id: string;

  /**
   * A custom ID for the account, often referencing an ID in an external system.
   *
   * @type {string}
   */
  customId?: string | null;

  /**
   * The domain of the account company
   *
   * @type {string}
   */
  domain?: string | null;

  /**
   * A custom description of the account.
   *
   * @type {string}
   */
  description?: string | null;

  /**
   * Identity of the current account in the external system which is linked through installed Outreach plugin.
   *
   * @type {string}
   */
  externalProviderId?: string | null;

  /**
   * Name of the external system provider which is linked through installed Outreach plugin.
   *
   * @type {string}
   */
  externalProviderName?: string | null;

  /**
   * The company’s primary geographic region (e.g. "Eastern USA").
   *
   * @type {string}
   */
  locality?: string | null;

  /**
   * The name of the company (e.g. "Acme Corporation").
   *
   * @type {string}
   */
  name?: string | null;

  /**
   * A list of tag values associated with the account (e.g. ["Enterprise", "Tier 1"]).
   *
   * @type {string}
   */
  tags?: string | null;

  /**
   * Collection of zero or more external provider data current account has in external systems
   * which are linked through installed Outreach plugins.
   *
   * @type {IExternalInfoContext[]}
   * @deprecated Usage of externalInfo is deprecated. Please use externalProviderId and externalProviderName instead.
   */
  externalInfo: IExternalInfoContext[];
}
