// eslint-disable-next-line no-unused-vars
import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { ExternalInfoContext } from './ExternalInfoContext';
import { initProspectContext, toProspectParams } from './ProspectContextUtils';

export class ProspectContext extends CustomContext {
  /**
   * Prospect address - city
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressCity: string;

  /**
   * Prospect address - country
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressCountry: string;

  /**
   * Prospect address - state
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressState: string;

  /**
   * Prospect address - street
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressStreet: string;

  /**
   * Prospect address - street2
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressStreet2: string;

  /**
   * Prospect address - zip
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressZip: string;

  /**
   * The date and time the prospect is available to contact again.
   *
   * @type {Date}
   * @memberof ProspectContext
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
   * The domain of the prospect company
   *
   * @type {string}
   * @memberof ProspectContext
   */
  domain: string;

  /**
   * A list of email addresses associated with the prospect.
   *
   * @type {string[]}
   * @memberof ProspectContext
   */
  emails: string[];

  /**
   * Identity of the current prospect in the external system which is linked through installed Outreach plugin.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  externalProviderId?: string;

  /**
   * Name of the external system provider which is linked through installed Outreach plugin.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  externalProviderName?: string;

  /**
   * Unique prospect identifier.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  id?: string;

  /**
   * The name of the prospect company
   *
   * @type {string}
   * @memberof ProspectContext
   */
  name: string;

  /**
   * Tags associated with the opportunity.
   *
   * @type {string}
   * @memberof ProspectContext
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
   * Collection of zero or more external provider data current account has in external systems
   * which are linked through installed Outreach plugins.
   *
   * @type {ExternalInfoContext[]}
   * @memberof ProspectContext
   * @deprecated Usage of externalInfo is depricated. Please use externalProviderId and externalProviderName instead.
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
