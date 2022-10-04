// eslint-disable-next-line no-unused-vars
import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';
import { initProspectContext, toProspectParams } from './ProspectContextUtils';
import { IProspectContext } from '../interfaces/IProspectContext';

export class ProspectContext extends CustomContext implements IProspectContext {
  accountDomain?: string | null;

  accountName?: string | null;

  addressCity?: string | null;

  addressCountry?: string | null;

  addressState?: string | null;

  addressStreet?: string | null;

  addressStreet2?: string | null;

  addressZip?: string | null;

  availableAt?: Date | null;

  company?: string | null;

  companyLocality?: string | null;

  emails?: string[] | null;

  externalProviderId?: string | null;

  externalProviderName?: string | null;

  id: string;

  tags?: string | null;

  timezone?: string | null;

  title?: string | null;

  /**
   * A collection of external plugin providers given prospect has
   *
   * @type {ExternalInfoContext[]}
   * @memberof ProspectContext
   *  @deprecated use externalProviderId and externalProviderName instead
   */
  externalInfo: ExternalInfoContext[] = [];

  /**
   * Attempts to initialize the opportunity context with a given parameter.
   *
   * @memberof ProspectContext
   */
  public initFrom = (param: ContextParam): boolean => {
    return initProspectContext(this, param);
  };

  /**
   * Converts current state of account context to an array of context params.
   *
   * @return {*}  {ContextParam[]}
   * @memberof ProspectContext
   */
  public toParams(): ContextParam[] {
    return toProspectParams(this);
  }
}
