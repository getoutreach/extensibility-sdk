// eslint-disable-next-line no-unused-vars
import { Scopes } from '../manifest/api/Scopes';

/**
 * Optional section defining parameters needed for accessing Outreach API.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#api-optional
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/outreach-api.md
 * @export
 * @class ManifestV1Api
 */
export class ManifestV1Api {
  /**
   * Outreach OAuth application id
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#applicationid
   * @type {string}
   * @memberof ManifestV1Api
   */
  applicationId: string;

  /**
   * Outreach OAuth App redirect uri on which the Authorization endpoint is implemented.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#redirecturi
   * @type {string}
   * @memberof ManifestV1Api
   */
  redirectUri: string;

  /**
   * The list of scopes will be used for Outreach API authentication
   * where current Outreach user will be asked to consent for granting
   * permissions for defined scopes to addon creator.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#scopes
   * @type {Scopes[]}
   * @memberof ManifestV1Api
   */
  scopes: Scopes[];

  /**
   * Address of the endpoint, which will return support refresh token flow.
   *
   * @type {string}
   * @memberof ManifestV1Api
   * @deprecated Usage of token endpoint is deprecated and it will be removed in upcoming releases.
   */
  token: string;

  /**
   *
   * Address of the connect endpoint, which will contain a page
   * posting authentication token info back to addon page which
   * had opened the popup.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#token
   * @type {string}
   * @memberof ManifestV1Api
   */
  connect: string;
}
