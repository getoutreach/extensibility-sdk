import { ContextParam } from '../host/ContextParam';

export interface IContext {
  toParams(): ContextParam[];

  initFrom(param: ContextParam): boolean;
}
