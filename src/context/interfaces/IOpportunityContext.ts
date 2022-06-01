import { ICustomContext } from './ICustomContext';
import { IExternalInfoContext } from './IExternalInfoContext';

export interface IOpportunityContext extends ICustomContext {
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
