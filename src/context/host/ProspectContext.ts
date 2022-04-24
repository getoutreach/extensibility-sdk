// eslint-disable-next-line no-unused-vars
import { ContextParam } from './ContextParam';
import { CustomContext } from './CustomContext';
import { initProspectContext, toProspectParams } from './ProspectContextUtils';

export class ProspectContext extends CustomContext {
  /**
   * The domain of the prospect company
   *
   * @type {string}
   * @memberof ProspectContext
   */
  accountDomain?: string | null;

  /**
   * The name of the prospect company
   *
   * @type {string}
   * @memberof ProspectContext
   */
  accountName?: string | null;

  /**
   * Prospect address - city
   *
   * @type {string | null}
   * @memberof ProspectContext
   */
  addressCity?: string | null;

  /**
   * Prospect address - country
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressCountry?: string | null;

  /**
   * Prospect address - state
   *
   * @type {string | null}
   * @memberof ProspectContext
   */
  addressState?: string | null;

  /**
   * Prospect address - street
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressStreet?: string | null;

  /**
   * Prospect address - street2
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressStreet2?: string | null;

  /**
   * Prospect address - zip
   *
   * @type {string}
   * @memberof ProspectContext
   */
  addressZip?: string | null;

  /**
   * The date and time the prospect is available to contact again.
   *
   * @type {Date}
   * @memberof ProspectContext
   */
  availableAt?: Date | null;

  /**
   * The name of the company the prospect works at. If associated with an account,
   * this is the name of the account. (e.g. Acme International).
   *
   * @type {string}
   * @memberof ProspectContext
   */
  company?: string | null;

  /**
   * The locality of prospect’s company.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  companyLocality?: string | null;

  /**
   * A list of email addresses associated with the prospect.
   *
   * @type {string[]}
   * @memberof ProspectContext
   */
  emails?: string[] | null;

  /**
   * Identity of the current prospect in the external system which is linked through installed Outreach plugin.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  externalProviderId?: string | null;

  /**
   * Name of the external system provider which is linked through installed Outreach plugin.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  externalProviderName?: string | null;

  /**
   * Unique prospect identifier.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  id: string;

  /**
   * Tags associated with the opportunity.
   *
   * @type {string}
   * @memberof ProspectContext
   */
  tags?: string | null;

  /**
   * The prospect’s current timezone, preferably in the IANA format (e.g. "America/LosAngeles").
   */
  timezone?: string | null;

  /**
   * The title of the prospect.
   */
  title?: string | null;

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
