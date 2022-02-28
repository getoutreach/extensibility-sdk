import { OrganizationContextKeys } from '../keys/OrganizationContextKeys';
import { ContextParam } from './ContextParam';
import { Context } from './CustomContext';

export class OrganizationContext extends Context {
  /**
   * Unique user identifier
   *
   * @type {string}
   * @memberof UserContext
   */
  id?: string;

  /**
   * Attempts to initialize the opportunity context with a given parameter.
   *
   * @memberof OpportunityContext
   */
  public initFrom = (param: ContextParam): boolean => {
    switch (param.key) {
      case OrganizationContextKeys.ID:
        this.id = param.value;
        break;
      default:
        return false;
    }

    return true;
  };

  public toParams(): ContextParam[] {
    const params: ContextParam[] = [];
    if (this.id) {
      params.push({
        key: OrganizationContextKeys.ID,
        value: this.id,
      });
    }

    return params;
  }
}
