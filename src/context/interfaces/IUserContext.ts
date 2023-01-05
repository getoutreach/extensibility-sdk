export interface IUserContext {
  /**
   * The email address of the user.
   *
   * @type {string}
   */
  email?: string | null;

  /**
   * The first name of the user.
   *
   * @type {string}
   */
  firstName?: string | null;

  /**
   *
   *  A cross org unique identifier of the user
   *
   * @type {string}
   * @memberof UserContext
   */
  globalId: string;

  /**
   * A user id which is bound to the org of user (in every org it starts from 1...)
   *
   * @type {string}
   * @memberof UserContext
   */
  id: string;

  /**
   * Last name of the user.
   *
   * @type {string}
   */
  lastName: string | null;

  /**
   * Full name of the user.
   *
   * @type {string}
   */
  name?: string | null;

  /**
   * Role of the user.
   *
   * @type {string}
   */
  role?: string | null;

  /**
   * The user's job title (e.g. "Staff Accountant").
   *
   * @type {string}
   */
  title: string | null;

  /**
   * A reader friendly unique identifier of the user.
   *
   * @type {string}
   */
  username: string | null;

  customField1?: string | null;
  customField2?: string | null;
  customField3?: string | null;
  customField4?: string | null;
  customField5?: string | null;
}
