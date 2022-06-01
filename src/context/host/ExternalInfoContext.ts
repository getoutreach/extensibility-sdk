import { ExternalInfoProvider } from './ExternalInfoProvider';
import { IExternalInfoContext } from '../interfaces/IExternalInfoContext';

/**
 * Definition of the prospect in the external data provider
 * which is linked with Outreach prospect data.
 *
 * @export
 * @class ExternalInfoContext
 * @deprecated Usage of the external info is depricated and will be removed in future release
 */
export class ExternalInfoContext implements IExternalInfoContext {
  public provider: ExternalInfoProvider;

  public enabled: boolean;

  public id: string;

  public name?: string | null;

  public type: string;

  public lastInbound?: Date | null;

  public lastOutbound?: Date | null;
}
