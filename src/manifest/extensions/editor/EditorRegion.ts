/* eslint-disable no-unused-vars */

export enum EditorRegion {
  /**
   * Template context host
   */
  TEMPLATE = 'template',

  /**
   * Snippet context host
   */
  SNIPPET = 'snippet',

  /**
   * One off email context host
   */
  ONE_OFF_EMAIL = 'oneoffEmail',

  /**
   * Bulk email context host
   */
  BULK_EMAIL = 'bulkEmail',

  /**
   * Task flow context host
   */
  TASK_FLOW = 'taskFlow',

  /**
   * Sequence editor context host
   */
  SEQUENCE = 'sequenceEditor',

  /**
   * Other context host
   */
  OTHER = 'other',
}
