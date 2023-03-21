import { ICustomContext } from './ICustomContext';
import { IExternalInfoContext } from './IExternalInfoContext';

export interface IOpportunityContext extends ICustomContext {
  /**
   * The domain of the opportunity account
   *
   * @type {string}
   */
  accountDomain?: string | null;

  /**
   * Account external id  (eg. Salesforce id) (if any)
   *
   * @type {(string | null)}
   * @memberof IOpportunityContext
   */
  accountExternalId?: string | null;

  /**
   * Account external plugin type  (Salesforce, Dynamics etc) (if any)
   *
   * @type {(string | null)}
   * @memberof IOpportunityContext
   */
  accountExternalProvider?: string | null;

  /**
   * The Outreach id of the opportunity account
   *
   * @type {string}
   */
  accountId?: string | null;

  /**
   * The name of the opportunity account
   *
   * @type {string}
   */
  accountName?: string | null;

  /**
   * The amount the opportunity is worth.
   *
   * @type {number}
   */
  amount?: number | null;

  /**
   * A description of the opportunity.
   *
   * @type {string}
   */
  description?: string | null;

  /**
   * The date the opportunity was created in the external system.
   *
   * @type {Date}
   */
  externalCreatedAt?: Date | null;

  /**
   * Identity of the current opportunity in the external system which is linked through installed Outreach plugin.
   *
   * @type {string}
   */
  externalProviderId?: string | null;

  /**
   * Name of the external system provider which is linked through installed Outreach plugin.
   *
   * @type {string}
   */
  externalProviderName?: string;

  /**
   * Unique opportunity identifier.
   *
   * @type {string}
   */
  id: string;

  /**
   * `The next step to take for the opportunity.
   *
   * @type {string}
   */
  name?: string | null;

  /**
   * The next step to take for the opportunity.
   *
   * @type {string}
   */
  nextStep?: string | null;

  /**
   * The type of opportunity.
   *
   * @type {string}
   */
  opportunityType?: string | null;

  /**
   * Opportunity owner email
   *
   * @type {(string | null)}
   * @memberof IOpportunityContext
   */
  ownerEmail?: string | null;

  /**
   * A global cross-org outreach identifier of the opportunity owner
   *
   * @type {(string | null)}
   * @memberof IOpportunityContext
   */
  ownerGlobalId?: string | null;

  /**
   * Full name of the opportunity owner
   *
   * @type {(string | null)}
   * @memberof IOpportunityContext
   */
  ownerName?: string | null;

  /**
   * Outreach user name of the owner
   *
   * @type {(string | null)}
   * @memberof IOpportunityContext
   */
  ownerUsername?: string | null;

  /**
   * The chances of the opportunity succeeding, represented as a percentage.
   *
   * @type {string}
   */
  probability?: string | null;

  /**
   * Tags associated with the opportunity.
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
