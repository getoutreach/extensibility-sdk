import runtime from './sdk/RuntimeContext';
import { ContextParam } from './context/host/ContextParam';
import { EventOrigin } from './sdk/logging/EventOrigin';
import { EventType } from './sdk/logging/EventType';
import { LogLevel } from './sdk/logging/LogLevel';
import logger from './sdk/logging/Logger';

export class utils {
  /**
   * Tokenize url by replacing all token placeholders with matching context params.
   *
   * @memberof utils
   */
  public static tokenizeUrl = (
    url: string,
    params: ContextParam[]
  ): {
    url: string;
    params: ContextParam[];
  } => {
    const tokenizer = /{(.*?)}/g;
    let token = tokenizer.exec(url);
    while (token) {
      if (!token) {
        break;
      }
      const key = token[1];
      const tokenParam = params.find((p) => p.key.toString() === key);
      if (tokenParam) {
        url = url.replace(`{${key}}`, tokenParam.value);
        params = params.filter((p) => p !== tokenParam);
      }

      token = tokenizer.exec(url);
    }

    return {
      url,
      params,
    };
  };

  /**
   * Parameterize url by appending context params to the url parameters.
   *
   * @static
   * @memberof utils
   */
  public static parameterizeUrl = (
    url: string,
    params: ContextParam[]
  ): string => {
    const hostUrl = new URL(url);

    const hostParams = new URLSearchParams(hostUrl.searchParams);
    params.forEach((param) => hostParams.append(param.key, param.value));
    const hostParamsString = hostParams.toString();

    return `${utils.getUrlDomain(hostUrl)}${
      hostUrl.pathname
    }?${hostParamsString}`;
  };

  public static getUrlDomain = (url: URL): string => {
    let originHost = `${url.protocol}//${url.hostname}`;

    if (url.port && url.port !== '443') {
      originHost += `:${url.port}`;
    }

    return originHost;
  };

  public static validHostOrigin = (origin: string): boolean => {
    if (!origin) {
      return false;
    }
    const valid =
      origin.endsWith('outreach.io') ||
      origin.endsWith('outreach-staging.com') ||
      origin.endsWith('outreach-dev.com');

    if (!valid) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        level: LogLevel.Trace,
        message: '[CXT][AddonSdk]::validHostOrigin - invalid origin',
        context: [],
      });
      return false;
    }

    return true;
  };

  public static validConnectOrigin = (origin: string): boolean => {
    if (!origin) {
      return false;
    }

    if (!runtime.application) {
      return false;
    }

    if (!runtime.application.api) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        level: LogLevel.Trace,
        message: '[CXT][AddonSdk]::connectOrigin - no manifest api',
        context: [],
      });
      return false;
    }

    // connect endpoint is posting a message with token to addon so it is valid origin
    // see: https://github.com/getoutreach/extensibility-sdk/blob/master/docs/outreach-api.md#connect-endpoint
    const connectUri = new URL(runtime.application.api.connect);
    const connectOrigin = utils.getUrlDomain(connectUri);
    const connectMessage = origin === connectOrigin;
    if (!connectMessage) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        level: LogLevel.Trace,
        message:
          '[CXT][AddonSdk]::connectOrigin - invalid connect origin received',
        context: [origin, connectOrigin],
      });
      return false;
    }

    return true;
  };

  public static objectValues = (data: any) => {
    return Object.keys(data).map((key) => data[key]);
  };

  public static urlValidation = (url: string): boolean => {
    if (!url) {
      return false;
    }

    try {
      const validatedUrl = new URL(url).toString();
      if (validatedUrl === url) {
        return true;
      }

      if (validatedUrl.endsWith('/')) {
        const trimmedUrl = validatedUrl.substring(0, validatedUrl.length - 1);
        if (trimmedUrl === url) {
          return true;
        }
      }

      return false;
    } catch (e) {
      return false;
    }
  };
}
