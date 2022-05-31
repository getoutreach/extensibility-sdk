import { OrganizationContextKeys } from '../keys/OrganizationContextKeys';
import { ContextParam } from './ContextParam';
import { Context } from './CustomContext';
import { IOrganizationContext } from '../interfaces/IOrganizationContext';

export class OrganizationContext extends Context implements IOrganizationContext {
  currency?: string | null;

  /**
   * Unique organization identifier
   *
   * @type {string}
   * @memberof UserContext
   */
  id?: string;

  /**
   * Organization logo url
   *
   * @type {(string | null)}
   * @memberof OrganizationContext
   */
  logo?: string | null;

  /**
   * Organization name
   *
   * @type {(string | null)}
   * @memberof OrganizationContext
   */
  name?: string | null;

  /**
   * Orgnaization short name
   *
   * @type {(string | null)}
   * @memberof OrganizationContext
   */
  shortname?: string | null;

  /**
   * Attempts to initialize the opportunity context with a given parameter.
   *
   * @memberof OpportunityContext
   */
  public initFrom = (param: ContextParam): boolean => {
    switch (param.key) {
      case OrganizationContextKeys.CURRENCY:
        this.currency = param.value;
        break;
      case OrganizationContextKeys.ID:
        this.id = param.value!;
        break;
      case OrganizationContextKeys.LOGO:
        this.logo = param.value;
        break;
      case OrganizationContextKeys.NAME:
        this.name = param.value;
        break;
      case OrganizationContextKeys.SHORT_NAME:
        this.shortname = param.value;
        break;
      default:
        return false;
    }

    return true;
  };

  public toParams(): ContextParam[] {
    const params: ContextParam[] = [];
    if (this.currency) {
      params.push({
        key: OrganizationContextKeys.CURRENCY,
        value: this.currency,
      });
    }

    if (this.id) {
      params.push({
        key: OrganizationContextKeys.ID,
        value: this.id,
      });
    }

    if (this.logo) {
      params.push({
        key: OrganizationContextKeys.LOGO,
        value: this.logo,
      });
    }

    if (this.name) {
      params.push({
        key: OrganizationContextKeys.NAME,
        value: this.name,
      });
    }

    if (this.shortname) {
      params.push({
        key: OrganizationContextKeys.SHORT_NAME,
        value: this.shortname,
      });
    }

    return params;
  }
}
