import { IUrlParam } from '../interfaces/IUrlParam';

export class UrlParam implements IUrlParam {
  /**
   * Url search parameter key
   *
   * @type {string}
   * @memberof UrlParam
   */
  public key: string;

  /**
   * Url search parameter value
   *
   * @type {string}
   * @memberof UrlParam
   */
  public value: string;
}
