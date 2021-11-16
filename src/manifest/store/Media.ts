/**
 * Definition of the media file shown in the extension marketplace.
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#media
 *
 * @export
 * @class ManifestMedia
 */
export class ManifestMedia {
  /**
   * Url of the media file.
   *
   * @type {string}
   * @memberof ManifestMedia
   */
  public url: string;

  /**
   * Title of the media file (used as alt tag value)
   *
   * @type {string}
   * @memberof ManifestMedia
   */
  public title: string;

  /**
   * Type of the media file.
   *
   * @type {('video' | 'image')}
   * @memberof ManifestMedia
   */
  public type: 'video' | 'image';
}
