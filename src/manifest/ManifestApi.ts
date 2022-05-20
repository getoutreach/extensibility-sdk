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
   * Outreach OAuth application id
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#applicationid
   * @type {string}
   * @deprecated applicationId is deprecated and replaced by client.id
   * @memberof ManifestApi
   */
  applicationId: string;

  /**
   * Outreach OAuth App redirect uri on which the Authorization endpoint is implemented.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#redirecturi
   * @type {string}
   * @deprecated redirectUri is deprecated and replaced by redirectUris array
   * @memberof ManifestApi
   */
  redirectUri: string;

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
   * Address of the endpoint, which will return support refresh token flow.
   *
   * @type {string}
   * @memberof ManifestApi
   * @deprecated Usage of token endpoint is deprecated and will be removed in upcoming releases.
   */
  token: string;

  /**
   *
   * Address of the connect endpoint, which will contain a page
   * posting authentication token info back to addon page which
   * had opened the popup.
   *
   * @type {string}
   * @deprecated Usage of connect endpoint is deprecated and will be removed in upcoming releases.
   * @memberof ManifestApi
   */
  connect: string;

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
