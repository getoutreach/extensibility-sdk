import { initAccountContext, toAccountParams } from './AccountContextUtils';
import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';
import { IAccountContext } from '../interfaces/IAccountContext';

export class AccountContext extends CustomContext implements IAccountContext {
  id: string;

  customId?: string | null;

  domain?: string | null;

  description?: string | null;

  externalProviderId?: string | null;

  externalProviderName?: string | null;

  locality?: string | null;

  name?: string | null;

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
