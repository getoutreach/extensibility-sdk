/* eslint-disable no-unused-vars */

import { ScopesS2S } from './api/ScopesS2S';
import { ManifestApiS2SPublicKey } from './ManifestApiS2SPublicKey';

/**
 * Optional section defining parameters needed for accessing Outreach API.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#api-optional
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/outreach-api.md
 * @export
 * @class ManifestApiS2S
 */
export class ManifestApiS2S {
  /**
   * The list of scopes will be used for Outreach API authentication
   * where current Outreach user will be asked to consent for granting
   * permissions for defined scopes to addon creator.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#scopes
   * @type {ScopesS2S[]}
   * @memberof ManifestApiS2S
   */
  scopes: ScopesS2S[];

  /**
   *
   * Outreach API client data used for authentication
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#client
   * @type {string}
   * @memberof ManifestApiS2S
   */
  s2sId: string;

  /**
   * One or more public keys used for accessing the Galaxy API org token endpoints.
   *
   * @type {ManifestApiS2SPublicKey[]}
   * @memberof ManifestApiS2S
   */
  publicKeys: ManifestApiS2SPublicKey[];
}
