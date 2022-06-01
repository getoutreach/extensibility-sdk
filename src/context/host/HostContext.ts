import { UrlParam } from './UrlParam';
import { IHostContext } from '../interfaces/IHostContext';

export class HostContext implements IHostContext {
  public urlParams: UrlParam[] = [];
}
