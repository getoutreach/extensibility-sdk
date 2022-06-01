import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';
import { initOpportunityContext, toOpportunityParams } from './OpportunityContextUtils';
import { IOpportunityContext } from '../interfaces/IOpportunityContext';

export class OpportunityContext extends CustomContext implements IOpportunityContext {
  amount?: number | null;

  description?: string | null;

  externalCreatedAt?: Date | null;

  externalProviderId?: string | null;

  externalProviderName?: string;

  id: string;

  name?: string | null;

  nextStep?: string | null;

  opportunityType?: string | null;

  probability?: string | null;

  tags?: string | null;

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
