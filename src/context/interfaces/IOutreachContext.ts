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
   * @memberof OutreachContext
   */
  locale: Locale;

  /**
   * A theme addon should be using in rendering.
   *
   * @type {Theme}
   * @memberof OutreachContext
   */
  theme: Theme;

  /**
   * Unique identifier of the Outreach user.
   *
   * @type {string}
   * @memberof OutreachContext
   */
  userIdentifier?: string;

  /**
   * Outreach account context information  (if any)
   *
   * @type {AccountContext}
   * @memberof OutreachContext
   */
  account?: IAccountContext;

  /**
   * Outreach user context information (if any)
   *
   * @type {UserContext}
   * @memberof OutreachContext
   */
  user?: IUserContext;

  /**
   * Outreach user organization information (if any)
   *
   * @type {OrganizationContext}
   * @memberof OutreachContext
   */
  organization?: IOrganizationContext;

  /**
   * Current Outreach opportunity context information (if any)
   *
   * @type {OpportunityContext}
   * @memberof OutreachContext
   */
  opportunity?: IOpportunityContext;

  /**
   * Current Outreach prospect context information (if any)
   *
   * @type {ProspectContext}
   * @memberof OutreachContext
   */
  prospect?: IProspectContext;

  /**
   * Context of the addon hosting environment
   *
   * @type {HostContext}
   * @memberof OutreachContext
   */
  host: IHostContext;

  /**
   * Optional section containing configuration values
   * provided by user.
   *
   * @type {ConfigurationValue[]}
   * @memberof OutreachContext
   */
  config?: IConfigurationValue[];
}
