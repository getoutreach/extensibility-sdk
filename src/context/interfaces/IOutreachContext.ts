import { Locale } from '../../sdk/Locale';
import { Theme } from '../../sdk/Theme';
import { IAccountContext } from './IAccountContext';
import { IUserContext } from './IUserContext';
import { IOrganizationContext } from './IOrganizationContext';
import { IOpportunityContext } from './IOpportunityContext';
import { IProspectContext } from './IProspectContext';
import { IHostContext } from './IHostContext';
import { IConfigurationValue } from './IConfigurationValue';

export interface IOutreachContext {
  /**
   * Language locale to be used in rendering addon.
   *
   * @type {string}
   */
  locale: Locale;

  /**
   * A theme addon should be using in rendering.
   *
   * @type {Theme}
   */
  theme: Theme;

  /**
   * Unique identifier of the Outreach user.
   *
   * @type {string}
   */
  userIdentifier?: string;

  /**
   * Outreach account context information  (if any)
   *
   * @type {IAccountContext}
   */
  account?: IAccountContext;

  /**
   * Outreach user context information (if any)
   *
   * @type {UserContext}
   */
  user?: IUserContext;

  /**
   * Outreach user organization information (if any)
   *
   * @type {OrganizationContext}
   */
  organization?: IOrganizationContext;

  /**
   * Current Outreach opportunity context information (if any)
   *
   * @type {IOpportunityContext}
   */
  opportunity?: IOpportunityContext;

  /**
   * Current Outreach prospect context information (if any)
   *
   * @type {IProspectContext}
   */
  prospect?: IProspectContext;

  /**
   * Context of the addon hosting environment
   *
   * @type {IHostContext}
   */
  host: IHostContext;

  /**
   * Optional section containing configuration values
   * provided by user.
   *
   * @type {IConfigurationValue[]}
   */
  config?: IConfigurationValue[];
}
