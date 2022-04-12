/* eslint-disable no-unused-vars */
export enum ClientContextKeys {
  /**
   * Version of the addon manifest being used.
   */
  MANIFEST_VERSION = 'mfv',

  /**
   * A culture locale used by Outreach app which addon should
   * use to initialize itself using the same locale.
   */
  LOCALE = 'loc',

  /**
   * Extensibility region where extension was loaded.
   */
  REGION = 'region',

  /**
   * Color theme used by the Outreach app which addon should
   * use to reneder itself to
   */
  THEME = 'theme',
}
