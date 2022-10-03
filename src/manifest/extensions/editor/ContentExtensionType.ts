/* eslint-disable no-unused-vars */
/**
 * List of supported addon types.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
 * @export
 * @enum {number}
 */
export enum ContentExtensionType {
  /**
   * Editor extension is show as a toolbar of icons extending the editor
   * with a set of 3rd party tools which are loaded in a iframe popup
   * once editor user clicks on some of the icons.
   */
  EDITOR = 'content-editor',
}
