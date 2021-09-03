/* eslint-disable no-unused-vars */
import { UserContext } from './host/UserContext';
import { OpportunityContext } from './host/OpportunityContext';
import { AccountContext } from './host/AccountContext';
import { ProspectContext } from './host/ProspectContext';
import { HostContext } from './host/HostContext';
import { ContextParam, Locale, Theme } from '..';
import { ConfigurationValue } from '../configuration/ConfigurationValue';

export class OutreachContext {
  /**
   * Creates an instance of OutreachContext.
   * @memberof OutreachContext
   */
  constructor() {
    this.host = new HostContext();
  }

  /**
   * Language locale to be used in rendering addon.
   *
   * @type {string}
   * @memberof Context
   */
  public locale: Locale;

  /**
   * A theme addon should be using in rendering.
   *
   * @type {Theme}
   * @memberof Context
   */
  public theme: Theme;

  /**
   * Unique identifier of the Outreach user.
   *
   * @type {string}
   * @memberof Context
   */
  public userIdentifier?: string;

  /**
   * Outreach account context information  (if any)
   *
   * @type {AccountContext}
   * @memberof OutreachContext
   */
  public account?: AccountContext;

  /**
   * Outreach user context information (if any)
   *
   * @type {UserContext}
   * @memberof OutreachContext
   */
  public user?: UserContext;

  /**
   * Current Outreach opportunity context information (if any)
   *
   * @type {OpportunityContext}
   * @memberof OutreachContext
   */
  public opportunity?: OpportunityContext;

  /**
   * Current Outreach prospect context information (if any)
   *
   * @type {ProspectContext}
   * @memberof OutreachContext
   */
  public prospect?: ProspectContext;

  /**
   * Context of the addon hosting environment
   *
   * @type {HostContext}
   * @memberof OutreachContext
   */
  public host: HostContext;

  /**
   * Optional section containing configuration values
   * provided by user.
   *
   * @type {ConfigurationValue[]}
   * @memberof OutreachContext
   */
  public config?: ConfigurationValue[];

  public toParams = (): ContextParam[] => {
    const params: ContextParam[] = [];

    if (this.account) {
      this.account.toParams().forEach((p) => params.push(p));
    }

    if (this.opportunity) {
      this.opportunity.toParams().forEach((p) => params.push(p));
    }

    if (this.prospect) {
      this.prospect.toParams().forEach((p) => params.push(p));
    }

    if (this.user) {
      this.user.toParams().forEach((p) => params.push(p));
    }

    return params;
  };
}
