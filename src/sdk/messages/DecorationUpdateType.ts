/**
 * Type of decoration update being requested
 *    text - The text update is requested
 *    badge - The badge  is being updated (empty text hides badge)
 *    icon -  Adodn icon is being updated (if any shown)
 *
 * @export
 * @enum {number}
 */
export enum DecorationUpdateType {
  /**
   * The badge  is being updated (empty text hides badge)
   */
  BADGE = 'badge',

  /**
   * Application icon is being updated (if any shown)
   */
  ICON = 'icon',

  /**
   * The text update is requested
   */
  TEXT = 'text',
}
