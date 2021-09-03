// eslint-disable-next-line no-unused-vars
import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';
import { initProspectContext, toProspectParams } from './ProspectContextUtils';

export class ProspectContext extends CustomContext {
  /**
   * The date and time the prospect is available to contact again.
   *
   * @type {Date}
   * @memberof OpportunityContext
   */
  availableAt: Date;

  /**
   * The name of the company the prospect works at. If associated with an account,
   * this is the name of the account. (e.g. Acme International).
   *
   * @type {string}
   * @memberof ProspectContext
   */
  company: string;

  /**
   * The locality of prospect’s company.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  companyLocality: string;

  /**
   * A list of email addresses associated with the prospect.
   *
   * @type {string[]}
   * @memberof ProspectContext
   */
  emails: string[];

  /**
   * Unique prospect identifier.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  id?: string;

  /**
   * Tags associated with the opportunity.
   *
   * @type {string}
   * @memberof OpportunityContext
   */
  tags: string;

  /**
   * The prospect’s current timezone, preferably in the IANA format (e.g. "America/LosAngeles").
   */
  timezone: string;

  /**
   * The title of the prospect.
   */
  title: string;

  /**
   * Collection of zero or more external provider data current prospect has in external systems
   * which are linked through installed Outreach plugins.
   *
   * @type {ExternalInfoContext[]}
   * @memberof ProspectContext
   */
  externalInfo: ExternalInfoContext[] = [];

  /**
   * Attempts to initialize the opportunity context with a given parameter.
   *
   * @memberof OpportunityContext
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
