import { LocalizedString } from '..';
import { Category } from './store/Category';
import { ManifestAuthor } from './ManifestAuthor';
import { ManifestMedia } from './store/Media';
import { StoreType } from './store/StoreType';
import { Locale } from '../sdk/Locale';

export class ManifestStore {
  /**
   * List of culture locales supported by the extension
   *
   * @type {Locale[]}
   * @memberof ManifestStore
   */
  public locales: Locale[] = [Locale.ENGLISH];

  /**
   * This section contains information to be presented to a user of the addon in the marketplace and on the
   * consent screen: addon creator name, website URL, privacy policy document URL, and terms of use document URL.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#author
   * @type {ManifestAuthor}
   * @memberof ManifestStore
   */
  public author: ManifestAuthor;

  /**
   * Collection of one or more extension categories.
   *
   * @type {Category[]}
   * @memberof ManifestStore
   */
  public categories: Category[] = [];

  /**
   * A localized addon description is shown in the addon store to
   * explain what the addon does and why someone would want to install it.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#description
   * @type {LocalizedString}
   * @memberof ManifestStore
   */
  public description: LocalizedString;

  /**
   * A localized short addon description is shown in the addon store to
   * explain what the addon does and why someone would want to install it.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#description
   * @type {LocalizedString}
   * @memberof ManifestStore
   */
  public headline: LocalizedString;

  /**
   * Application icon URL
   * @type {string}
   * @memberof ManifestStore
   */
  public iconUrl: string;

  /**
   * Collection of zero or more manifest media file used in extension marketplace
   * to explain to Outreach user what extension does.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#media
   *
   * @type {ManifestMedia}
   * @memberof ManifestStore
   */
  public medias: ManifestMedia[] = [];

  /**
   * Type of addon: public, private or personal.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#storeType
   * @type {StoreType}
   * @memberof ManifestStore
   */
  public type: StoreType;

  /**
   * The localized addon title is shown in the addon store and Outreach app as a tab tile.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#title
   * @type {LocalizedString}
   * @memberof ManifestStore
   */
  public title: LocalizedString;

  /**
   * Application version
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#version
   * @type {string}
   * @memberof ManifestStore
   */
  public version: string;
}
