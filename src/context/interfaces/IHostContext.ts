import { IUrlParam } from './IUrlParam';

export interface IHostContext {
  /**
   * Collection of url parameters addon hosting url used
   * for loading addon
   *
   * @type IUrlParam[]
   */
  urlParams: IUrlParam[];
}
