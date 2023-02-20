/* eslint-disable no-unused-vars */

import { ScopesS2S } from './api/ScopesS2S';
import { ManifestApiS2SPublicKey } from './ManifestApiS2SPublicKey';

/**
 * Optional section defining parameters needed for accessing Outreach API from back-end.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#api-s2s-optional
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/outreach-api-s2s.md
 * @export
 * @class ManifestApiS2S
 */
export class ManifestApiS2S {
  /**
   * The list of scopes will be used for Outreach API authentication
   * where current Outreach user will be asked to consent for granting
   * permissions for defined scopes to addon creator.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#scopes-s2s
   * @type {ScopesS2S[]}
   * @memberof ManifestApiS2S
   */
  scopes: ScopesS2S[];

  /**
   * Outreach API server client data used for authentication
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#s2s-id
   * @type {string}
   * @memberof ManifestApiS2S
   */
  s2sId: string;

  /**
   * One or more public keys used for accessing endpoints.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#s2s-public-keys
   * @type {ManifestApiS2SPublicKey[]}
   * @memberof ManifestApiS2S
   */
  publicKeys: ManifestApiS2SPublicKey[];
}
