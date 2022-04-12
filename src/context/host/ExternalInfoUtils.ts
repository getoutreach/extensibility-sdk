import { ExternalInfoContext } from './ExternalInfoContext';
import { ExternalInfoProvider } from './ExternalInfoProvider';

/**
 * Packed format of the extensibility provider
 *
 * @export
 * @interface PackedProvider
 * @deprecated Usage of PackedProvider is depricated and it will be removed in some of the future releases
 */
export interface PackedProvider {
  e: boolean;
  i: string;
  n?: string | null;
  p: ExternalInfoProvider;
  t: string;
  li?: Date | null;
  lo?: Date | null;
}

/**
 *
 * Util functions for maniputlating external info format.
 *
 * @export
 * @class ExternalInfoUtils
 * @deprecated Usage of ExternalInfoUtils is depricated and it will be removed in some of the future releases
 *
 */
export class ExternalInfoUtils {
  /**
   * Packs the contextual provider information to a shorter format
   * which is more suitable for url usage.
   *
   * @static
   * @param {ExternalInfoContext[]} contexts
   * @returns {string}
   * @memberof ExternalInfoUtils
   * @deprecated Usage of ExternalInfoUtils is depricated and it will be removed in some of the future releases
   */
  public static pack = (contexts: ExternalInfoContext[]): string => {
    const packedProviders: PackedProvider[] = [];
    contexts.forEach((context) => {
      packedProviders.push({
        e: context.enabled,
        i: context.id,
        n: context.name,
        p: context.provider,
        t: context.type,
        li: context.lastInbound,
        lo: context.lastOutbound,
      });
    });

    return JSON.stringify(packedProviders);
  };

  /**
   * Unpacks the packed format of the external prospect information
   *
   * @memberof ExternalInfoUtils
   * @deprecated Usage of ExternalInfoUtils is depricated and it will be removed in some of the future releases
   */
  public static unpack = (packed: string): ExternalInfoContext[] => {
    const providers: ExternalInfoContext[] = [];
    try {
      const packedProviders = JSON.parse(packed) as PackedProvider[];
      packedProviders.forEach((pp) => {
        providers.push({
          enabled: pp.e,
          id: pp.i,
          lastInbound: pp.li ? new Date(pp.li) : null,
          lastOutbound: pp.lo ? new Date(pp.lo) : null,
          name: pp.n,
          provider: pp.p,
          type: pp.t,
        } as ExternalInfoContext);
      });
    } catch (err) {
      console.error("Can't unpack the provider info", { err, packed });
    }

    return providers;
  };
}
