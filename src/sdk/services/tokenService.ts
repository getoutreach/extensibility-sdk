import { Token } from '../Token';
import runtime from '../RuntimeContext';

import { Constants } from '../../index';
import { EventOrigin } from '../logging/EventOrigin';
import { EventType } from '../logging/EventType';
import { LogLevel } from '../logging/LogLevel';
import logger from '../logging/Logger';

/**
 *
 *
 * @deprecated Usage of this service is deprecated and it will be removed in future reelase.
 * @class TokenService
 */
class TokenService {
  /**
   *
   * @deprecated Usage of this service is deprecated and it will be removed in future reelase.
   * @memberof TokenService
   */
  public fetchTokenAsync = async (): Promise<string | null> => {
    if (!runtime.application.api) {
      throw new Error("This addon manifest is not having api definition so token can't be retrieved");
    }

    // 2. try to refresh a token
    const refreshedToken = await this.getRefreshedTokenAsync();
    if (refreshedToken) {
      localStorage.setItem(Constants.AUTH_TOKEN_CACHE_KEY, JSON.stringify(refreshedToken));
      return refreshedToken.value;
    }

    return null;
  };

  /**
   *
   * @deprecated Usage of this service is deprecated and it will be removed in future reelase.
   * @memberof TokenService
   *
   */
  public getCachedTokenAsync = (): Promise<string | null> => {
    if (!runtime.application.api) {
      throw new Error("This addon manifest is not having api definition so token can't be retrieved");
    }
    // 1. check the local cache for valid token
    var cachedToken = localStorage.getItem(Constants.AUTH_TOKEN_CACHE_KEY);
    if (cachedToken) {
      try {
        const token = JSON.parse(cachedToken) as Token;
        if (token.expiresAt > Date.now()) {
          return Promise.resolve(token.value);
        } else {
          logger.current.log({
            origin: EventOrigin.ADDON,
            type: EventType.INTERNAL,
            level: LogLevel.Debug,
            message: 'Cached token had expired',
            context: [`expiresAt:${token.expiresAt}`, `date.now:${Date.now()}`],
          });
        }
      } catch (e) {
        logger.current.log({
          origin: EventOrigin.ADDON,
          type: EventType.INTERNAL,
          level: LogLevel.Error,
          message: 'Invalid cached token value:' + cachedToken,
          context: [JSON.stringify(e)],
        });
      }
    }

    return Promise.resolve(null);
  };

  /**
   *
   *
   * @param {Token} token
   * @memberof TokenService
   * @deprecated Usage of this service is deprecated and it will be removed in future reelase.
   *
   */
  public cacheToken = (token: Token) => {
    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.INTERNAL,
      level: LogLevel.Debug,
      message: 'New token value stored in cache',
      context: [JSON.stringify(token)],
    });
    localStorage.setItem(Constants.AUTH_TOKEN_CACHE_KEY, JSON.stringify(token));
  };

  private getRefreshedTokenAsync = async (): Promise<Token | null> => {
    if (!runtime.application.api) {
      return Promise.resolve(null);
    }

    try {
      const r = await fetch(runtime.application.api.token, {
        method: 'POST',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: runtime.userIdentifier,
        }),
      });

      if (!r.ok) {
        logger.current.log({
          origin: EventOrigin.ADDON,
          type: EventType.INTERNAL,
          level: r.status === 404 ? LogLevel.Debug : LogLevel.Error,
          message: 'Token fetch failed',
          context: [`status:${r.status}`, `statusText:${r.statusText}`],
        });
        return Promise.resolve(null);
      }

      return (await r.json()) as Token;
    } catch (e) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        level: LogLevel.Error,
        message: 'Refresh token fetch failed with an error',
        context: [JSON.stringify(e)],
      });
      return Promise.resolve(null);
    }
  };
}

export default new TokenService();
