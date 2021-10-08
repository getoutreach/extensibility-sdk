/* eslint-disable no-unused-vars */

/**
 * List of supported addon types.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
 * @export
 * @enum {number}
 */
export enum ShellExtensionType {
  /**
   * Action extension - action icon toolbar on the page top right
   */
  ACTION = 'shell-action',

  /**
   * Application extension (a.k.a 'left side menu addon')
   */
  APPLICATION = 'shell-application',

  BUTTON = 'shell-button',

  FLOAT = 'shell-float',

  /**
   * Companion extension - a separate sidebar on the right side of the screen.
   */
  COMPANION = 'shell-companion',

  /**
   * Help extension - used to extend varios places wher
   */
  KNOWLEDGE = 'shell-knowledge',

  /**
   * Sidekick extension is a button docked to the right edge of the experience
   * Upon klicking it it can popup modal, slide in, show a tool, show a companion etc.
   */
  SIDEKICK = 'shell-sidekick',

  /**
   * Tool extension is shown as modal div in the right down corner.
   * To be used for extensions ike chat etc.
   */
  TOOL = 'shell-tool',
}
