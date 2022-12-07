/* eslint-disable no-unused-vars */
/**
 * Collection of context param keys which can be used for
 * editor extensions loaded in an email context
 * removing the need for editor extensions to parse out manually
 * the values out of email dialog DOM
 *
 * @export
 * @enum {number}
 */
export enum EmailContextKeys {
  /**
   * Email to field entry
   */
  TO = 'eml.to',

  /**
   * Email bcc field entry
   */
  BCC = 'eml.bcc',

  /**
   * Email cc field entry
   */
  CC = 'eml.cc',

  /**
   * Email subject field entry
   */
  SUBJECT = 'eml.subj',
}
