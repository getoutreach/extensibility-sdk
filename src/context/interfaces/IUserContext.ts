export interface IUserContext {
  /**
   * The email address of the user.
   *
   * @type {string}
   * @memberof UserContext
   */
  email?: string | null;

  /**
   * The first name of the user.
   *
   * @type {string}
   * @memberof UserContext
   */
  firstName?: string | null;

  /**
   * Unique user identifier
   *
   * @type {string}
   * @memberof UserContext
   */
  id: string;

  /**
   * Last name of the user.
   *
   * @type {string}
   * @memberof UserContext
   */
  lastName: string | null;

  /**
   * Full name of the user.
   *
   * @type {string}
   * @memberof UserContext
   */
  name?: string | null;

  /**
   * Role of the user.
   *
   * @type {string}
   * @memberof UserContext
   */
  role?: string | null;

  /**
   * The user's job title (e.g. "Staff Accountant").
   *
   * @type {string}
   * @memberof UserContext
   */
  title: string | null;

  /**
   * A reader friendly unique identifier of the user.
   *
   * @type {string}
   * @memberof UserContext
   */
  username: string | null;

  customField1?: string | null;
  customField2?: string | null;
  customField3?: string | null;
  customField4?: string | null;
  customField5?: string | null;
}
