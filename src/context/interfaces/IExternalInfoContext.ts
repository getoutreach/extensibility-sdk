import { ExternalInfoProvider } from '../host/ExternalInfoProvider';

/**
 * Definition of the prospect in the external data provider
 * which is linked with Outreach prospect data.
 *
 * @deprecated Usage of the external info is deprecated and will be removed in future release
 */
export interface IExternalInfoContext {
  /**
   *Type of external prospect data provider.
   *
   * @type {ExternalInfoProvider}
   */
  provider: ExternalInfoProvider;

  /**
   * Is external provider plugin integration enabled?
   *
   * @type {boolean}
   */
  enabled: boolean;

  /**
   * External data provider prospect id
   *
   * @type {string}
   */
  id: string;

  /**
   * External data provider prospect name
   *
   * @type {(string | null)}
   */
  name?: string | null;

  /**
   * External data provider type.
   *
   * @type {string}
   */
  type: string;

  /**
   * The date of last data inbound operation.
   *
   * @type {Date}
   */
  lastInbound?: Date | null;

  /**
   * The date of last data outbound operation.
   *
   * @type {(Date | null)}
   */
  lastOutbound?: Date | null;
}
