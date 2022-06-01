/* eslint-disable no-unused-vars */
import { UserContext } from './host/UserContext';
import { OpportunityContext } from './host/OpportunityContext';
import { AccountContext } from './host/AccountContext';
import { ProspectContext } from './host/ProspectContext';
import { HostContext } from './host/HostContext';
import { ContextParam, Locale, Theme } from '..';
import { ConfigurationValue } from '../configuration/ConfigurationValue';
import { OrganizationContext } from './host/OrganizationContext';
import { IOutreachContext } from './interfaces/IOutreachContext';

export class OutreachContext implements IOutreachContext {
  /**
   * Creates an instance of OutreachContext.
   * @memberof OutreachContext
   */
  constructor() {
    this.host = new HostContext();
  }

  public locale: Locale;

  public theme: Theme;

  public userIdentifier?: string;

  public account?: AccountContext;

  public user?: UserContext;

  public organization?: OrganizationContext;

  public opportunity?: OpportunityContext;

  public prospect?: ProspectContext;

  public host: HostContext;

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
