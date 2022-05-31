import { ICustomContext } from './ICustomContext';
import { IExternalInfoContext } from './IExternalInfoContext';

export interface IProspectContext extends ICustomContext {
  /**
   * The domain of the prospect company
   *
   * @type {string}
   */
  accountDomain?: string | null;

  /**
   * The name of the prospect company
   *
   * @type {string}
   */
  accountName?: string | null;

  /**
   * Prospect address - city
   *
   * @type {string | null}
   */
  addressCity?: string | null;

  /**
   * Prospect address - country
   *
   * @type {string}
   */
  addressCountry?: string | null;

  /**
   * Prospect address - state
   *
   * @type {string | null}
   */
  addressState?: string | null;

  /**
   * Prospect address - street
   *
   * @type {string}
   */
  addressStreet?: string | null;

  /**
   * Prospect address - street2
   *
   * @type {string}
   */
  addressStreet2?: string | null;

  /**
   * Prospect address - zip
   *
   * @type {string}
   */
  addressZip?: string | null;

  /**
   * The date and time the prospect is available to contact again.
   *
   * @type {Date}
   */
  availableAt?: Date | null;

  /**
   * The name of the company the prospect works at. If associated with an account,
   * this is the name of the account. (e.g. Acme International).
   *
   * @type {string}
   */
  company?: string | null;

  /**
   * The locality of prospect’s company.
   *
   * @type {string}
   */
  companyLocality?: string | null;

  /**
   * A list of email addresses associated with the prospect.
   *
   * @type {string[]}
   */
  emails?: string[] | null;

  /**
   * Identity of the current prospect in the external system which is linked through installed Outreach plugin.
   *
   * @type {string}
   */
  externalProviderId?: string | null;

  /**
   * Name of the external system provider which is linked through installed Outreach plugin.
   *
   * @type {string}
   */
  externalProviderName?: string | null;

  /**
   * Unique prospect identifier.
   *
   * @type {string}
   */
  id: string;

  /**
   * Tags associated with the opportunity.
   *
   * @type {string}
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
   * Collection of zero or more external provider data current account has in external systems
   * which are linked through installed Outreach plugins.
   *
   * @type {IExternalInfoContext[]}
   * @deprecated Usage of externalInfo is deprecated. Please use externalProviderId and externalProviderName instead.
   */
  externalInfo: IExternalInfoContext[];
}
