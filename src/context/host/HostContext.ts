import { UrlParam } from './UrlParam';
import { IHostContext } from '../interfaces/IHostContext';

export class HostContext implements IHostContext {
  /**
   * Collection of url parameters addon hosting url used
   * for loading addon
   *
   * @type UrlParam[]
   * @memberof HostContext
   */
  public urlParams: UrlParam[] = [];
}
