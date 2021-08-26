/**
 * Section of the manifest describing the addon author.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#author
 * @export
 * @class ManifestAuthor
 */
export class ManifestAuthor {
  /**
   * Name of the company publishing addon.
   *
   * @type {string}
   * @memberof ManifestAuthor
   */
  company: string;

  /**
   * E-mail address for contacts.
   *
   * @type {string}
   * @memberof ManifestAuthor
   */
  email: string;

  /**
   *
   * Website of the addon creator.
   *
   * @type {string}
   * @memberof ManifestAuthor
   */
  websiteUrl: string;

  /**
   * Url of the addon creator privacy policy.
   *
   * @type {string}
   * @memberof ManifestAuthor
   */
  privacyUrl: string;

  /**
   * Terms of use policy url.
   *
   * @type {string}
   * @memberof ManifestAuthor
   */
  termsOfUseUrl: string;
}
