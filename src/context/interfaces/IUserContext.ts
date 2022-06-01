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
   * Unique user identifier
   *
   * @type {string}
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
