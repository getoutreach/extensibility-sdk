// eslint-disable-next-line no-unused-vars
import { UserContextKeys } from '../keys/UserContextKeys';
import { ContextParam } from './ContextParam';
import { IUserContext } from '../interfaces/IUserContext';

export class UserContext implements IUserContext {
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

  /**
   * Attempts to initialize the opportunity context with a given parameter.
   *
   * @memberof OpportunityContext
   */
  initFrom = (param: ContextParam): boolean => {
    switch (param.key) {
      case UserContextKeys.EMAIL:
        this.email = param.value;
        break;
      case UserContextKeys.FIRST_NAME:
        this.firstName = param.value;
        break;
      case UserContextKeys.ID:
        this.id = param.value!;
        break;
      case UserContextKeys.LAST_NAME:
        this.lastName = param.value;
        break;
      case UserContextKeys.FULL_NAME:
        this.name = param.value;
        break;
      case UserContextKeys.ROLE:
        this.role = param.value;
        break;
      case UserContextKeys.TITLE:
        this.title = param.value;
        break;
      case UserContextKeys.USERNAME:
        this.username = param.value;
        break;
      case UserContextKeys.CUSTOM_FIELD_1:
        this.customField1 = param.value;
        break;
      case UserContextKeys.CUSTOM_FIELD_2:
        this.customField2 = param.value;
        break;
      case UserContextKeys.CUSTOM_FIELD_3:
        this.customField3 = param.value;
        break;
      case UserContextKeys.CUSTOM_FIELD_4:
        this.customField4 = param.value;
        break;
      case UserContextKeys.CUSTOM_FIELD_5:
        this.customField5 = param.value;
        break;
      default:
        return false;
    }

    return true;
  };

  public toParams(): ContextParam[] {
    const params: ContextParam[] = [];
    if (this.email) {
      params.push({
        key: UserContextKeys.EMAIL,
        value: this.email,
      });
    }

    if (this.firstName) {
      params.push({
        key: UserContextKeys.FIRST_NAME,
        value: this.firstName,
      });
    }

    if (this.id) {
      params.push({
        key: UserContextKeys.ID,
        value: this.id,
      });
    }

    if (this.lastName) {
      params.push({
        key: UserContextKeys.LAST_NAME,
        value: this.lastName,
      });
    }

    if (this.name) {
      params.push({
        key: UserContextKeys.FULL_NAME,
        value: this.name,
      });
    }

    if (this.role) {
      params.push({
        key: UserContextKeys.ROLE,
        value: this.role,
      });
    }
    if (this.title) {
      params.push({
        key: UserContextKeys.TITLE,
        value: this.title,
      });
    }

    if (this.username) {
      params.push({
        key: UserContextKeys.USERNAME,
        value: this.username,
      });
    }

    if (this.customField1) {
      params.push({
        key: UserContextKeys.CUSTOM_FIELD_1,
        value: this.customField1,
      });
    }

    if (this.customField2) {
      params.push({
        key: UserContextKeys.CUSTOM_FIELD_2,
        value: this.customField2,
      });
    }

    if (this.customField3) {
      params.push({
        key: UserContextKeys.CUSTOM_FIELD_3,
        value: this.customField3,
      });
    }

    if (this.customField4) {
      params.push({
        key: UserContextKeys.CUSTOM_FIELD_4,
        value: this.customField4,
      });
    }

    if (this.customField5) {
      params.push({
        key: UserContextKeys.CUSTOM_FIELD_5,
        value: this.customField5,
      });
    }
    return params;
  }
}
