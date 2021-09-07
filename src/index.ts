/* eslint-disable no-unused-vars */
import { InitMessage } from './sdk/messages/InitMessage';
import { Message } from './sdk/messages/Message';
import { MessageType } from './sdk/messages/MessageType';

import { OutreachContext } from './context/OutreachContext';
import { NotificationType } from './sdk/messages/NotificationType';
import { NotificationMessage } from './sdk/messages/NotificationMessage';
import { DecorationMessage } from './sdk/messages/DecorationMessage';
import { LogLevel } from './sdk/logging/LogLevel';
import { ReadyMessage } from './sdk/messages/ReadyMessage';

import { AccountContext } from './context/host/AccountContext';
import { OpportunityContext } from './context/host/OpportunityContext';
import { ProspectContext } from './context/host/ProspectContext';
import { UserContext } from './context/host/UserContext';

import runtime, { RuntimeContext } from './sdk/RuntimeContext';
import tokenService from './sdk/services/tokenService';
import authService from './sdk/services/oauthService';

import logger from './sdk/logging/Logger';
import { Constants } from './sdk/Constants';
import { EventType } from './sdk/logging/EventType';
import { EventOrigin } from './sdk/logging/EventOrigin';
import { ConnectTokenMessage } from './sdk/messages/ConnectTokenMessage';
import { utils } from './utils';
import { ConfigureMessage } from './sdk/messages/ConfigureMessage';
import { DecorationType } from './sdk/messages/DecorationType';
import { NavigationDestination } from './sdk/messages/NavigationDestination';
import { NavigationMessage } from './sdk/messages/NavigationMessage';
import { EnvironmentMessage } from './sdk/messages/EnvironmentMessage';
import { LoadInfoMessage } from './sdk/messages/LoadInfoMessage';
import { LoadingContext } from './context/LoadingContext';
import { ManifestHostEnvironment } from './manifest/extensions/tabs/ManifestHostEnvironment';
import { ILogger } from './sdk/logging/ILogger';

export * from './context/host/AccountContext';
export * from './context/host/ContextParam';
export * from './context/host/CustomContext';

export * from './context/host/ExternalInfoContext';
export * from './context/host/ExternalInfoProvider';
export * from './context/host/ExternalInfoUtils';
export * from './context/host/OpportunityContext';
export * from './context/host/UserContext';

export * from './context/LoadingContext';
export * from './context/OutreachContext';

export * from './sdk/messages/Message';
export * from './sdk/messages/MessageType';
export * from './sdk/messages/ConnectTokenMessage';
export * from './sdk/messages/DecorationMessage';
export * from './sdk/messages/DecorationType';
export * from './sdk/messages/EnvironmentMessage';
export * from './sdk/messages/InitMessage';
export * from './sdk/messages/LoadInfoMessage';
export * from './sdk/messages/NavigationDestination';
export * from './sdk/messages/NavigationMessage';
export * from './sdk/messages/NotificationMessage';
export * from './sdk/messages/NotificationType';
export * from './sdk/messages/ReadyMessage';

export * from './sdk/Constants';
export * from './sdk/logging/Event';
export * from './sdk/logging/EventOrigin';
export * from './sdk/logging/EventType';
export * from './sdk/logging/LogLevel';
export { ILogger } from './sdk/logging/ILogger';

export * from './sdk/Locale';
export * from './sdk/RuntimeContext';
export * from './sdk/Theme';
export * from './sdk/Validator';

export * from './context/keys/AccountContextKeys';
export * from './context/keys/AllContextKeys';
export * from './context/keys/ClientContextKeys';
export * from './context/keys/OpportunityContextKeys';
export * from './context/keys/ProspectContextKeys';
export * from './context/keys/UserContextKeys';
export * from './manifest/app/Category';
export * from './manifest/app/Store';
export * from './manifest/app/LocalizedString';
export * from './manifest/Application';
export * from './manifest/ManifestApi';
export * from './manifest/ManifestAuthor';
export * from './manifest/extensions/shell/ShellExtensionHost';
export * from './manifest/api/Scopes';
export * from './utils';

export * from './manifest/extensions/shell/ShellExtensionHost';
export * from './manifest/extensions/tabs/ManifestHostEnvironment';
export * from './manifest/extensions/tabs/TabExtension';
export * from './manifest/extensions/tabs/TabExtensionType';
export * from './manifest/extensions/tabs/types/AccountTabExtension';
export * from './manifest/extensions/shell/types/ApplicationShellExtension';
export * from './manifest/extensions/tabs/types/OpportunityTabExtension';
export * from './manifest/extensions/tabs/types/ProspectTabExtension';

export * from './manifest/extensions/tiles/TileExtensionType';
export * from './manifest/extensions/tiles/TileExtension';

export * from './manifest/extensions/Extension';
export * from './manifest/extensions/ExtensionType';

class Task<T> {
  public promise: Promise<T>;
  public onfulfilled: (value: T) => void;
  public onrejected: (reason: any) => void;
}

class AddonsSdk {
  private initTimer?: number;
  private initTask?: Task<OutreachContext>;

  private authorizeTask: Task<string | null>;

  public getRuntime = (): RuntimeContext => runtime;
  public activeListener: boolean = false;

  /**
   * Setting of the cookie cxt-sdk-user
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/main/docs/outreach-api.md#caching-the-tokens
   * @memberof AddonsSdk
   */
  public cookie = {
    name: Constants.AUTH_USER_STATE_COOKIE_NAME,
    domain: window.location?.host,
    maxAge: 1 * 60 * 60, // one hour
  };

  /**
   * Init handler being invoked when addon initialized is completed
   * and addon receives from the Outreach host initialization context
   *
   * @deprecated Since version 0.10. Will be removed in version 1.0. Use instead await sdk.init()
   *
   * @memberof AddonsSdk
   */
  public onInit: (context: OutreachContext) => void;

  /**
   * Load handler is being invoked after the addon is fully loaded,
   * and it provides to addon creator performance information on addon loading.
   * Default implementation would show a toast if addon loading times were longer than 2 seconds.
   * Addon creator can implement its load handler and handle the received performance data
   * differently (report it to its telemetry service, show a custom addon UI, etc.)
   *
   * @memberof AddonsSdk
   */
  public onLoad: (context: LoadingContext) => void;

  public onMessage: (message: Message) => void;

  /**
   * Changes the implementation of the logger used by SDK for
   * publishing diagnostic info and events
   *
   * @param {ILogger} newLogger
   * @memberof AddonsSdk
   */
  public setLogger = (newLogger: ILogger) => {
    logger.current = newLogger;
  };

  /**
   * Gets the minimal log level used for
   * deciding which one of the logs should be ignored
   * and which one processed.
   *
   * @type {LogLevel}
   * @memberof AddonsSdk
   */
  public get logLevel(): LogLevel {
    return logger.current.level;
  }

  /**
   * Sets the minimal log level used for
   * deciding which one of the logs should be ignored
   * and which one processed.
   *
   * @type {LogLevel}
   * @memberof AddonsSdk
   */
  public set logLevel(v: LogLevel) {
    logger.current.level = v;
  }

  /**
   * Creates an instance of AddonsSdk.
   * @memberof AddonsSdk
   */
  constructor() {
    this.onInit = (context: OutreachContext) => {
      logger.current.log({
        origin: EventOrigin.HOST,
        type: EventType.MESSAGE,
        messageType: MessageType.INIT,
        level: LogLevel.Info,
        message: '[CXT] addon.onInit received initialization context',
        context: [`context: ${JSON.stringify(context, null, 2)}`],
      });
    };

    this.onMessage = (message: Message) => {
      logger.current.log({
        origin: EventOrigin.HOST,
        type: EventType.MESSAGE,
        messageType: message.type,
        level: LogLevel.Info,
        message: `[CXT] Addon received message:${message.type}  from host`,
        context: [JSON.stringify(message)],
      });
    };

    // Default implementation of a handler showing a toast if loading times are longer then 2 seconds
    this.onLoad = (ctx: LoadingContext) => {
      const sessionId = this.getRuntime().sessionId;

      if (ctx.loadTime > 5000) {
        this.notify(
          `Addon loading takes longer than 5 seconds. Load time:${ctx.loadTime}. Ready time: ${ctx.readyTime}. SessionId: ${sessionId}`,
          'error'
        );
      } else if (ctx.loadTime > 2000) {
        this.notify(
          `Addon loading takes longer than 2 seconds. Load time:${ctx.loadTime}. Ready time: ${ctx.readyTime}. SessionId: ${sessionId}`,
          'warning'
        );
      }
    };
  }

  /**
   * Informs the interested parties that sdk is initialized and
   * ready to receive messages from host and other participants.
   *
   * @memberof AddonsSdk
   * @deprecated Since version 0.10. Will be removed in version 1.0. Use instead await sdk.init()
   */
  public ready() {
    console.warn('Ready function is depricated. Use instead await sdk.init()');

    this.init();
  }

  /**
   * Informs the host that addon needs to be reinitialized with
   * fresh init context in order to operate properly
   * @memberof AddonsSdk
   */
  public initRequest = () => {
    this.sendMessage(new ReadyMessage());
  };

  /**
   * Sends request to Outreach hosting app to notify Outreach user
   * about a certain even happening in addon.
   *
   * @memberof AddonsSdk
   */
  public notify = async (text: string, type: NotificationType) => {
    await this.verifySdkInitialized();

    const message = new NotificationMessage();
    message.notificationText = text;
    message.notificationType = type;
    this.sendMessage(message, true);

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.MESSAGE,
      messageType: message.type,
      level: LogLevel.Info,
      message: `[CXT] Addon is sending ${message.type} message to host`,
      context: [`Notification text: ${text}`, `Notification type: ${type}`],
    });
  };

  /**
   * Sends request to Outreach hosting app to notify Outreach user
   * about a certain even happening in addon.
   *
   * @param {string} value The new decoration value being requested to be shown by the host
   * @param {DecorationType} [type='text'] Type of decoration update (text by default)
   * @memberof AddonsSdk
   */
  public decorate = async (value: string, type: DecorationType = 'text') => {
    await this.verifySdkInitialized();

    const message = new DecorationMessage();
    message.decorationText = value;
    message.decorationType = type;

    this.sendMessage(message, true);

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.MESSAGE,
      messageType: message.type,
      level: LogLevel.Info,
      message: `[CXT] Addon is sending ${message.type} message to host`,
      context: [`Decoration text: ${value}`],
    });
  };

  /**
   * Sends request to Outreach hosting app to display the configuration form.
   *
   * @memberof AddonsSdk
   */
  public configure = async () => {
    await this.verifySdkInitialized();

    const message = new ConfigureMessage();
    this.sendMessage(message, true);

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.MESSAGE,
      messageType: message.type,
      level: LogLevel.Info,
      message: `[CXT] Addon is sending ${message.type} message to host`,
      context: [],
    });
  };

  /**
   * Request from the host to navigate to a different part of the Outreach application.
   *
   * @param {NavigationDestination} destination Host destination of the navigation request.
   * @param {string} [id] Entity or addon identity to which navigation should go.
   * @param {{ [key: string]: string}} [params] List of key value parameters to be sent to the navigation destination (if any)
   * @param {NavigationTarget} [target]
   */
  public navigate = async (
    destination: NavigationDestination,
    id?: string,
    params?: { [key: string]: string }
  ) => {
    await this.verifySdkInitialized();

    const message = new NavigationMessage();
    message.destination = destination;
    message.id = id;
    message.params = params;
    this.sendMessage(message, true);

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.MESSAGE,
      messageType: message.type,
      level: LogLevel.Info,
      message: `[CXT] Addon is sending ${message.type} message to host`,
      context: [],
    });
  };

  /**
   * Initialize the SDK by sending a ready() signal to the Outreach host
   * and resolving a promise when Outreach host responds with a current user
   * initialization context
   *
   * @returns {Promise<OutreachContext>}
   * @memberof AddonsSdk
   */
  public init = async (): Promise<OutreachContext> => {
    if (this.initTask) {
      return this.initTask.promise;
    }

    this.initTask = new Task<OutreachContext>();
    this.initTask.promise = new Promise<OutreachContext>((resolve, reject) => {
      this.initTask!.onfulfilled = resolve;
      this.initTask!.onrejected = reject;

      if (!this.activeListener) {
        this.activeListener = true;
        window.addEventListener('message', this.handleReceivedMessage);
      }

      const message = new ReadyMessage();
      const postMessage = JSON.stringify(message);

      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.MESSAGE,
        messageType: MessageType.READY,
        level: LogLevel.Info,
        message: `[CXT] Addon is sending ${message.type} message to host`,
        context: [],
      });

      window.parent.postMessage(postMessage, '*');

      this.initTimer = window.setTimeout(() => {
        const error = '[CXT] Addon initialization failed - timeout error';
        console.error(error);
        reject(error);
      }, 10 * 1000);
    });

    return this.initTask.promise;
  };

  /**
   * Requests from host to update hosting environment based on
   * sent specification of the environment.
   *
   * @memberof AddonsSdk
   */
  public environment = async (
    environment: ManifestHostEnvironment
  ): Promise<void> => {
    await this.verifySdkInitialized();

    const message = new EnvironmentMessage();
    message.environment = environment;
    this.sendMessage(message, true);

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.MESSAGE,
      messageType: message.type,
      level: LogLevel.Info,
      message: `[CXT] Addon is requesting environment update by sending ${message.type} message to host`,
      context: [JSON.stringify(environment)],
    });
  };

  /**
   *
   * Initialize the OAuth consent process by presenting to Outreach user
   * a form where he needs to consent with granting access rights defined
   * in manifest.api.scopes.
   * It is a promise, which will resolve once the OAuth popup closes and
   * user consents
   *
   * NOTE: This method is showing a popup and to avoid popup blocking
   * it has to be invoked in a handler of the direct user action
   * (e.g. user clicked a button)
   *
   * @returns {Promise<string | null>}
   * @memberof AddonsSdk
   */
  public authenticate = async (): Promise<string | null> => {
    await this.verifySdkInitialized();

    this.authorizeTask = new Task<string | null>();
    this.authorizeTask.promise = new Promise<string | null>(
      (resolve, reject) => {
        this.authorizeTask!.onfulfilled = resolve;
        this.authorizeTask!.onrejected = reject;

        // start the OAuth consent flow by recording user identifier
        // addon host server will need server will need
        // to read in its OAuth implementation
        const cookieContent = `${this.cookie.name}=${runtime.userIdentifier};Secure;SameSite=None;Path=/;Domain=${this.cookie.domain};max-age:${this.cookie.maxAge}`;

        // user identifier goes to cookie to enable addon oauth server
        // linking the outreach user with the addon external identity.
        document.cookie = cookieContent;

        authService.openPopup();
      }
    );

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.INTERNAL,
      message: '[CXT][AddonSdk]::authenticate-starting authorize promise',
      level: LogLevel.Debug,
      context: [],
    });

    return this.authorizeTask!.promise;
  };

  /**
   *
   * Tries to obtain valid Outreach API token first by checking the local cache
   * and then by asking addon host if it can produce a new access token from its own cache
   * or by using previously obtained refresh token.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/outreach-api.md#token-endpoint
   *
   * @memberof AddonsSdk
   */
  public getToken = async (skipCache?: boolean): Promise<string | null> => {
    await this.verifySdkInitialized();

    if (!skipCache) {
      const cachedToken = await tokenService.getCachedTokenAsync();
      if (cachedToken) {
        return cachedToken;
      }
    }

    return await tokenService.fetchTokenAsync();
  };

  public sendMessage<T extends Message>(message: T, logged?: boolean) {
    if (!runtime.origin) {
      console.error(
        'You can not send messages before SDK is initialized',
        message
      );
      return;
    }
    const postMessage = JSON.stringify(message);

    if (!logged) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.MESSAGE,
        messageType: message.type,
        level: LogLevel.Info,
        message: `[CXT] Addon is sending ${message.type} message to host`,
        context: [postMessage, runtime.origin],
      });
    }

    window.parent.postMessage(postMessage, runtime.origin);
  }

  private handleLoadInfoMessage = (message: LoadInfoMessage) => {
    let logLevel = LogLevel.Debug;
    if (message.loadTime > 2000) {
      logLevel = LogLevel.Error;
    } else if (message.loadTime > 1000) {
      logLevel = LogLevel.Warning;
    }

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.MESSAGE,
      messageType: message.type,
      level: logLevel,
      message: `[CXT] Addon received message ${message.type} of type `,
      context: [JSON.stringify(message)],
    });

    const loadCtx: LoadingContext = {
      loadTime: message.loadTime,
      readyTime: message.readyTime,
    };

    this.onLoad(loadCtx);
  };

  private verifySdkInitialized = async () => {
    // check if sdk.init() was called
    if (!this.initTask) {
      const error =
        '[CXT] Please initialize SDK by calling sdk.init() before performing any additional calls';
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        messageType: MessageType.INIT,
        level: LogLevel.Error,
        message: error,
        context: [runtime.origin],
      });

      // throw an error - case is THAT important
      throw new Error(error);
    }

    // check if sdk.init() was resolved
    await this.initTask;
  };

  private handleReceivedMessage = (messageEvent: MessageEvent) => {
    const addonMessage = this.getAddonMessage(messageEvent);
    if (!addonMessage) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        level: LogLevel.Trace,
        message:
          '[CXT][AddonSdk]::handleReceivedMessage - ignoring event message as it is not addon message',
        context: [messageEvent.origin, JSON.stringify(messageEvent.data)],
      });
      return;
    }

    logger.current.log({
      origin: EventOrigin.HOST,
      type: EventType.MESSAGE,
      messageType: addonMessage.type,
      level: LogLevel.Info,
      message: `[CXT] Addon had received a ${addonMessage.type} message from host`,
      context: [JSON.stringify(addonMessage)],
    });

    switch (addonMessage.type) {
      case MessageType.INIT: {
        const initMessage = addonMessage as InitMessage;
        const context = this.preprocessInitMessage(initMessage);
        this.resolveInitPromise(context);
        this.onInit(context);
        break;
      }
      case MessageType.CONNECT_AUTH_TOKEN:
        this.handleRefreshTokenMessage(addonMessage as ConnectTokenMessage);
        break;
      case MessageType.HOST_LOAD_INFO:
        this.handleLoadInfoMessage(addonMessage as LoadInfoMessage);
        break;
      case MessageType.READY:
      case MessageType.REQUEST_DECORATION_UPDATE:
      case MessageType.REQUEST_NOTIFY:
      case MessageType.REQUEST_RELOAD:
        logger.current.log({
          origin: EventOrigin.ADDON,
          type: EventType.INTERNAL,
          message: `[CXT][AddonSdk] :: onReceived - Client event ${addonMessage.type} received from host (ERROR)`,
          level: LogLevel.Error,
          context: [JSON.stringify(addonMessage)],
        });
        break;
      default:
        logger.current.log({
          origin: EventOrigin.ADDON,
          type: EventType.INTERNAL,
          message: `[CXT][AddonSdk] :: onReceived - Unknown event type: ${addonMessage.type}`,
          level: LogLevel.Warning,
          context: [JSON.stringify(addonMessage)],
        });
    }
  };

  private resolveInitPromise = (cxt: OutreachContext) => {
    window.clearTimeout(this.initTimer);
    if (this.initTask) {
      this.initTask.onfulfilled(cxt);
    }
  };

  private preprocessInitMessage = (
    initMessage: InitMessage
  ): OutreachContext => {
    runtime.application = initMessage.application;
    runtime.configuration = initMessage.configuration;
    runtime.extension = initMessage.extension;
    runtime.locale = initMessage.locale;
    runtime.sessionId = initMessage.sessionId;
    runtime.theme = initMessage.theme;
    runtime.userIdentifier = initMessage.userIdentifier;

    const outreachContext = new OutreachContext();
    outreachContext.locale = runtime.locale;
    outreachContext.theme = runtime.theme;
    outreachContext.userIdentifier = runtime.userIdentifier;

    const accountContext = new AccountContext();
    const opportunityContext = new OpportunityContext();
    const userContext = new UserContext();
    const prospectContext = new ProspectContext();

    for (let i = 0; i < initMessage.context.length; i++) {
      const param = initMessage.context[i];

      let handled = accountContext.initFrom(param);
      if (handled) {
        outreachContext.account = outreachContext.account || accountContext;
      }

      handled = opportunityContext.initFrom(param);
      if (handled) {
        outreachContext.opportunity =
          outreachContext.opportunity || opportunityContext;
      }

      handled = prospectContext.initFrom(param);
      if (handled) {
        outreachContext.prospect = outreachContext.prospect || prospectContext;
      }

      handled = userContext.initFrom(param);
      if (handled) {
        outreachContext.user = outreachContext.user || userContext;
      }
    }

    // collect all of the url params host sent
    outreachContext.host = {
      urlParams: initMessage.locationSearchParams,
    };

    runtime.application.extensions.forEach((ext) => ext.init(outreachContext));

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.INTERNAL,
      message: '[CXT][AddonSdk]::preprocessInitMessage',
      level: LogLevel.Debug,
      context: [
        `message: ${JSON.stringify(initMessage)}`,
        `context: ${JSON.stringify(outreachContext)}`,
        `origin: ${runtime.origin || 'N/A'}`,
      ],
    });

    return outreachContext;
  };

  private handleRefreshTokenMessage = (tokenMessage: ConnectTokenMessage) => {
    tokenService.cacheToken({
      value: tokenMessage.token,
      expiresAt: tokenMessage.expiresAt,
    });

    if (this.authorizeTask) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        message: '[CXT][AddonSdk]::onReceived-Resolving authorize promise',
        level: LogLevel.Debug,
        context: [],
      });
      if (tokenMessage.token) {
        this.authorizeTask.onfulfilled(tokenMessage.token);
      } else {
        this.authorizeTask.onrejected('No token value received');
      }
    } else {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        message: `[CXT][AddonSdk] ::onReceived - Client event ${tokenMessage.type} received without promise to resolve`,
        level: LogLevel.Warning,
        context: [JSON.stringify(tokenMessage)],
      });
    }
  };

  private getAddonMessage = (messageEvent: MessageEvent): Message | null => {
    if (!messageEvent) {
      return null;
    }

    const hostOrigin = utils.validHostOrigin(messageEvent.origin);
    const connectOrigin = utils.validConnectOrigin(messageEvent.origin);
    if (!hostOrigin && !connectOrigin) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        level: LogLevel.Trace,
        message: '[CXT][AddonSdk]::getAddonMessage - invalid origin',
        context: [
          messageEvent.origin,
          `host:${hostOrigin}`,
          `connect:${connectOrigin}`,
        ],
      });
      return null;
    }

    if (!messageEvent.data || typeof messageEvent.data !== 'string') {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        level: LogLevel.Trace,
        message:
          '[CXT][AddonSdk]::getAddonMessage - message event data is not a string',
        context: [JSON.stringify(messageEvent.data)],
      });
      return null;
    }

    let hostMessage: Message;
    try {
      hostMessage = JSON.parse(messageEvent.data);
      if (!hostMessage || !hostMessage.type) {
        logger.current.log({
          origin: EventOrigin.ADDON,
          type: EventType.INTERNAL,
          level: LogLevel.Debug,
          message:
            '[CXT][AddonSdk]::getAddonMessage - invalid message data format',
          context: [messageEvent.data],
        });

        return null;
      }
    } catch (e) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        level: LogLevel.Debug,
        message: '[CXT][AddonSdk]::getAddonMessage - not a json data',
        context: [messageEvent.data, JSON.stringify(e)],
      });

      return null;
    }

    if (!runtime.origin) {
      const initializedOrigin = this.initializeOrigin(
        hostMessage,
        messageEvent
      );
      if (!initializedOrigin) {
        logger.current.log({
          origin: EventOrigin.ADDON,
          type: EventType.INTERNAL,
          level: LogLevel.Trace,
          message: '[CXT][AddonSdk]::getAddonMessage - origin not initialized',
          context: [],
        });
        return null;
      }
    }

    return hostMessage;
  };

  private initializeOrigin = (
    hostMessage: Message,
    messageEvent: MessageEvent
  ) => {
    if (hostMessage.type !== MessageType.INIT) {
      return null;
    }

    if (!utils.validHostOrigin(messageEvent.origin)) {
      return null;
    }

    logger.current.log({
      origin: EventOrigin.ADDON,
      type: EventType.INTERNAL,
      level: LogLevel.Debug,
      message: '[CXT][AddonSdk]::getAddonMessage- setting origin',
      context: [messageEvent.origin],
    });

    runtime.origin = messageEvent.origin;
    return runtime.origin;
  };
}

declare global {
  interface Window {
    outreach: {
      logLevel?: LogLevel;
      addonSdk?: AddonsSdk;
    };
  }
}

// exposing sdk as  a global variable
window.outreach = window.outreach || {};
window.outreach.addonSdk = new AddonsSdk();

export default window.outreach.addonSdk;
