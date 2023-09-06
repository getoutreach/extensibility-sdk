import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';
import { initOpportunityContext, toOpportunityParams } from './OpportunityContextUtils';
import { IOpportunityContext } from '../interfaces/IOpportunityContext';

export class OpportunityContext extends CustomContext implements IOpportunityContext {
  accountCustomId?: string | null;

  accountDomain?: string | null;

  accountExternalId?: string | null;

  accountExternalProvider?: string | null;

  accountId?: string | null;

  accountName?: string | null;

  amount?: number | null;

  description?: string | null;

  externalCreatedAt?: Date | null;

  externalProviderId?: string | null;

  externalProviderName?: string | null;

  id: string;

  name?: string | null;

  nextStep?: string | null;

  opportunityType?: string | null;

  ownerEmail?: string | null;

  ownerGlobalId?: string | null;

  ownerName?: string | null;

  ownerUsername?: string | null;

  probability?: string | null;

  stage?: string | null;

  tags?: string | null;

  /**
   * A collection of external plugin providers given opportunity has
   *
   * @type {ExternalInfoContext[]}
   * @memberof ProspectContext
   *  @deprecated use externalProviderId and externalProviderName instead
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
