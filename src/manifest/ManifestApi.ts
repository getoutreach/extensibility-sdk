// eslint-disable-next-line no-unused-vars
import { Scopes } from './api/Scopes';
import { ManifestApiClient } from './ManifestApiClient';

/**
 * Optional section defining parameters needed for accessing Outreach API.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#api-optional
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/outreach-api.md
 * @export
 * @class ManifestApi
 */
export class ManifestApi {
  /**
   * The list of scopes will be used for Outreach API authentication
   * where current Outreach user will be asked to consent for granting
   * permissions for defined scopes to addon creator.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#scopes
   * @type {Scopes[]}
   * @memberof ManifestApi
   */
  scopes: Scopes[];

  /**
   *
   * Outreach API client data used for authentication
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#client
   * @type {ManifestApiClient}
   * @memberof ManifestApi
   */
  client: ManifestApiClient;

  /**
   * Outreach OAuth App redirect uris on which the Authorization endpoint is implemented.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#redirecturis
   * @type {string}
   * @memberof ManifestApi
   */
  redirectUris: string[];
}
