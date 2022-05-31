import { ExternalInfoProvider } from '../host/ExternalInfoProvider';

/**
 * Definition of the prospect in the external data provider
 * which is linked with Outreach prospect data.
 *
 * @export
 * @class ExternalInfoContext
 * @deprecated Usage of the external info is depricated and will be removed in future release
 */
export interface IExternalInfoContext {
  /**
   *Type of external prospect data provider.
   *
   * @type {ExternalInfoProvider}
   * @memberof ExternalInfoContext
   */
  provider: ExternalInfoProvider;

  /**
   * Is external provider plugin integration enabled?
   *
   * @type {boolean}
   * @memberof ExternalInfoContext
   */
  enabled: boolean;

  /**
   * External data provider prospect id
   *
   * @type {string}
   * @memberof ExternalInfoContext
   */
  id: string;

  /**
   * External data provider prospect name
   *
   * @type {(string | null)}
   * @memberof ExternalInfoContext
   */
  name?: string | null;

  /**
   * External data provider type.
   *
   * @type {string}
   * @memberof ExternalInfoContext
   */
  type: string;

  /**
   * The date of last data inbound operation.
   *
   * @type {Date}
   * @memberof ExternalInfoContext
   */
  lastInbound?: Date | null;

  /**
   * The date of last data outbound operation.
   *
   * @type {(Date | null)}
   * @memberof ExternalInfoContext
   */
  lastOutbound?: Date | null;
}
