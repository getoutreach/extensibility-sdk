/* eslint-disable no-unused-vars */
/**
 * The individual that uses the application.
 *
 * @see https://api.outreach.io/api/v2/docs#user
 * @export
 * @enum {number}
 */
export enum UserContextKeys {
  /**
   * The email address of the user.
   */
  EMAIL = 'usr.email',

  /**
   * The first name of the user.
   */
  FIRST_NAME = 'usr.fname',

  /**
   * Organization specific user id (1,2....)
   */
  ID = 'usr.id',

  /**
   * The last name of the user.
   */
  LAST_NAME = 'usr.lname',

  /**
   * The last name of the user.
   */
  FULL_NAME = 'usr.name',

  /**
   * Global Outreach user id (e.g. eb2b1dc5-ab49-3be5-8cb5-96ef280e261a)
   */
  GLOBAL_ID = 'usr.globid',

  /**
   * The user's role
   */
  ROLE = 'usr.role',

  /**
   * The user's job title (e.g. "Staff Accountant").
   */
  TITLE = 'usr.tit',

  /**
   * A reader friendly unique identifier of the user.
   */
  USERNAME = 'usr.uname',

  CUSTOM_FIELD_1 = 'usr.csf1',
  CUSTOM_FIELD_2 = 'usr.csf2',
  CUSTOM_FIELD_3 = 'usr.csf3',
  CUSTOM_FIELD_4 = 'usr.csf4',
  CUSTOM_FIELD_5 = 'usr.csf5',
}
