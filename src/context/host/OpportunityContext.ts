import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';
import { initOpportunityContext, toOpportunityParams } from './OpportunityContextUtils';
import { IOpportunityContext } from '../interfaces/IOpportunityContext';

export class OpportunityContext extends CustomContext implements IOpportunityContext {
  /**
   * The amount the opportunity is worth.
   *
   * @type {number}
   * @memberof OpportunityContext
   */
  amount?: number | null;

  /**
   * A description of the opportunity.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  description?: string | null;

  /**
   * The date the opportunity was created in the external system.
   *
   * @type {Date}
   * @memberof OpportunityContext
   */
  externalCreatedAt?: Date | null;

  /**
   * Identity of the current opportunity in the external system which is linked through installed Outreach plugin.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  externalProviderId?: string | null;

  /**
   * Name of the external system provider which is linked through installed Outreach plugin.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  externalProviderName?: string;

  /**
   * Unique opportunity identifier.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  id: string;

  /**
   * `The next step to take for the opportunity.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  name?: string | null;

  /**
   * The next step to take for the opportunity.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  nextStep?: string | null;

  /**
   * The type of opportunity.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  opportunityType?: string | null;

  /**
   * The chances of the opportunity succeeding, represented as a percentage.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  probability?: string | null;

  /**
   * Tags associated with the opportunity.
   *
   * @type {string}
   * @memberof OpportunityContext
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
   * Attempts to initialize the opportunity context with a given parameter.
   *
   * @memberof OpportunityContext
   */
  public initFrom = (param: ContextParam): boolean => {
    return initOpportunityContext(this, param);
  };

  /**
   * Converts current state of opportunity context to an array of context params.
   *
   * @return {*}  {ContextParam[]}
   * @memberof OpportunityContext
   */
  public toParams(): ContextParam[] {
    return toOpportunityParams(this);
  }
}
