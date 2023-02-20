/**
 * Public key used for accessing s2s endpoints
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#s2s-public-keys
 * @export
 * @class ManifestApiS2SPublicKey
 */
export class ManifestApiS2SPublicKey {
  /**
   * Public key human-readable name
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#s2s-public-keys
   * @type {string}
   * @memberof ManifestApiS2SPublicKey
   */
  name: string;

  /**
   *
   * Public key value
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#s2s-public-keys
   * @type {string}
   * @memberof ManifestApiS2SPublicKey
   */
  value: string;
}
