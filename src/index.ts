/* eslint-disable no-unused-vars */
import { InitMessage } from './sdk/messages/InitMessage';
import { Message } from './sdk/messages/Message';
import { MessageType } from './sdk/messages/MessageType';

import { OutreachContext } from './context/OutreachContext';
import { NotificationType } from './sdk/messages/NotificationType';
import { NotificationMessage } from './sdk/messages/NotificationMessage';
import { DecorationUpdateMessage } from './sdk/messages/DecorationMessage';
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
import { DecorationUpdateType } from './sdk/messages/DecorationUpdateType';
import { NavigationDestination } from './sdk/messages/NavigationDestination';
import { NavigationMessage } from './sdk/messages/NavigationMessage';
import { EnvironmentMessage } from './sdk/messages/EnvironmentMessage';
import { LoadInfoMessage } from './sdk/messages/LoadInfoMessage';
import { LoadingContext } from './context/LoadingContext';
import { ILogger } from './sdk/logging/ILogger';
import { EnvironmentInfo } from './sdk/messages/EnvironmentInfo';
import { Application } from './manifest/Application';
import { ManifestApi } from './manifest/ManifestApi';
import { ConfigurationItem } from './configuration/ConfigurationItem';
import { ManifestStore } from './manifest/ManifestStore';
import { TabExtensionType } from './manifest/extensions/tabs/TabExtensionType';
import { AccountTabExtension } from './manifest/extensions/tabs/types/AccountTabExtension';
import { OpportunityTabExtension } from './manifest/extensions/tabs/types/OpportunityTabExtension';
import { ProspectTabExtension } from './manifest/extensions/tabs/types/ProspectTabExtension';
import { ShellExtensionType } from './manifest/extensions/shell/ShellExtensionType';
import { ApplicationShellExtension } from './manifest/extensions/shell/types/ApplicationShellExtension';
import { CompanionShellExtension } from './manifest/extensions/shell/types/CompanionShellExtension';
import { ToolShellExtension } from './manifest/extensions/shell/types/ToolShellExtension';
import { ActionShellExtension } from './manifest/extensions/shell/types/ActionShellExtension';
import { ProspectActionTabExtension } from './manifest/extensions/tabs/types/ProspectActionTabExtension';

export { ConfigurationItem } from './configuration/ConfigurationItem';
export { ConfigurationItemOption } from './configuration/ConfigurationItemOption';
export { ConfigurationItemType } from './configuration/ConfigurationItemType';
export { ConfigurationValue } from './configuration/ConfigurationValue';

export { AccountContextKeys } from './context/keys/AccountContextKeys';
export { AllContextKeys } from './context/keys/AllContextKeys';
export { ClientContextKeys } from './context/keys/ClientContextKeys';
export { OpportunityContextKeys } from './context/keys/OpportunityContextKeys';
export { ProspectContextKeys } from './context/keys/ProspectContextKeys';
export { UserContextKeys } from './context/keys/UserContextKeys';

export { AccountContext } from './context/host/AccountContext';
export { ContextParam } from './context/host/ContextParam';
export { CustomContext } from './context/host/CustomContext';
export { ExternalInfoContext } from './context/host/ExternalInfoContext';
export { ExternalInfoProvider } from './context/host/ExternalInfoProvider';
export { ExternalInfoUtils } from './context/host/ExternalInfoUtils';
export { OpportunityContext } from './context/host/OpportunityContext';
export { UserContext } from './context/host/UserContext';

export { LoadingContext } from './context/LoadingContext';
export { OutreachContext } from './context/OutreachContext';

export { Event } from './sdk/logging/Event';
export { EventOrigin } from './sdk/logging/EventOrigin';
export { EventType } from './sdk/logging/EventType';
export { LogLevel } from './sdk/logging/LogLevel';
export { ILogger } from './sdk/logging/ILogger';

export { ConfigureMessage } from './sdk/messages/ConfigureMessage';
export { ConnectTokenMessage } from './sdk/messages/ConnectTokenMessage';
export { DecorationUpdateMessage } from './sdk/messages/DecorationMessage';
export { DecorationUpdateType } from './sdk/messages/DecorationUpdateType';
export { EnvironmentInfo } from './sdk/messages/EnvironmentInfo';
export { EnvironmentMessage } from './sdk/messages/EnvironmentMessage';
export { InitMessage } from './sdk/messages/InitMessage';
export { LoadInfoMessage } from './sdk/messages/LoadInfoMessage';
export { Message } from './sdk/messages/Message';
export { MessageType } from './sdk/messages/MessageType';
export { NavigationDestination } from './sdk/messages/NavigationDestination';
export { NavigationMessage } from './sdk/messages/NavigationMessage';
export { NotificationMessage } from './sdk/messages/NotificationMessage';
export { NotificationType } from './sdk/messages/NotificationType';
export { ReadyMessage } from './sdk/messages/ReadyMessage';

export { Constants } from './sdk/Constants';
export { Locale } from './sdk/Locale';
export { RuntimeContext } from './sdk/RuntimeContext';
export { Theme } from './sdk/Theme';
export { validate } from './sdk/Validator';

export { utils } from './utils';

export { Application } from './manifest/Application';
export { ManifestApi } from './manifest/ManifestApi';
export { ManifestAuthor } from './manifest/ManifestAuthor';
export { ManifestStore } from './manifest/ManifestStore';
export { Scopes } from './manifest/api/Scopes';

export { Category } from './manifest/store/Category';
export { LocalizedString } from './manifest/store/LocalizedString';
export { ManifestMedia } from './manifest/store/Media';
export { StoreType } from './manifest/store/StoreType';

export { Extension } from './manifest/extensions/Extension';
export { ExtensionType } from './manifest/extensions/ExtensionType';
export { ExtensionHost } from './manifest/extensions/ExtensionHost';

export { ShellExtension } from './manifest/extensions/shell/ShellExtension';
export { DecorationStyle } from './manifest/extensions/shell/DecorationStyle';
export { ShellExtensionHost } from './manifest/extensions/shell/ShellExtensionHost';
export { ShellExtensionType } from './manifest/extensions/shell/ShellExtensionType';
export { ActionShellExtension } from './manifest/extensions/shell/types/ActionShellExtension';
export { ApplicationShellExtension } from './manifest/extensions/shell/types/ApplicationShellExtension';
export { CompanionShellExtension } from './manifest/extensions/shell/types/CompanionShellExtension';
export { SidekickShellExtension } from './manifest/extensions/shell/types/SidekickShellExtension';
export { ToolShellExtension } from './manifest/extensions/shell/types/ToolShellExtension';

export { TabExtension } from './manifest/extensions/tabs/TabExtension';
export { TabExtensionType } from './manifest/extensions/tabs/TabExtensionType';
export { AccountTabExtension } from './manifest/extensions/tabs/types/AccountTabExtension';
export { OpportunityTabExtension } from './manifest/extensions/tabs/types/OpportunityTabExtension';
export { ProspectTabExtension } from './manifest/extensions/tabs/types/ProspectTabExtension';

export { TileExtensionType } from './manifest/extensions/tiles/TileExtensionType';
export { HomeTileExtension } from './manifest/extensions/tiles/types/HomeTileExtension';
export { AccountTileExtension } from './manifest/extensions/tiles/types/AccountTileExtension';
export { OpportunityTileExtension } from './manifest/extensions/tiles/types/OpportunityTileExtension';
export { ProspectTileExtension } from './manifest/extensions/tiles/types/ProspectTileExtension';

export { ManifestTranslator } from './legacy/ManifestTranslator';

class Task<T> {
  public promise: Promise<T>;
  public onfulfilled: (value: T) => void;
  public onrejected: (reason: any) => void;
}

class ExtensibilitySdk {
  private initTimer?: number;
  private initTask?: Task<OutreachContext>;

  private authorizeTask: Task<string | null>;

  public getRuntime = (): RuntimeContext => runtime;
  public activeListener: boolean = false;

  /**
   * Setting of the cookie cxt-sdk-user
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/main/docs/outreach-api.md#caching-the-tokens
   * @memberof ExtensibilitySdkW
   * @deprecated Usage of SDK cookie is deprecated and it will be removed in future releases.
   *
   */
  public cookie = {
    name: Constants.AUTH_USER_STATE_COOKIE_NAME,
    domain: window.location?.host,
    maxAge: 1 * 60 * 60, // one hour
  };

  /**
   * Load handler is being invoked after the addon is fully loaded,
   * and it provides to addon creator performance information on addon loading.
   * Default implementation would show a toast if addon loading times were longer than 2 seconds.
   * Addon creator can implement its load handler and handle the received performance data
   * differently (report it to its telemetry service, show a custom addon UI, etc.)
   *
   * @memberof ExtensibilitySdk
   */
  public onLoad: (context: LoadingContext) => void;

  public onMessage: (message: Message) => void;

  /**
   * Changes the implementation of the logger used by SDK for
   * publishing diagnostic info and events
   *
   * @param {ILogger} newLogger
   * @memberof ExtensibilitySdk
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
   * @memberof ExtensibilitySdk
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
   * @memberof ExtensibilitySdk
   */
  public set logLevel(v: LogLevel) {
    logger.current.level = v;
  }

  /**
   * Creates an instance of ExtensibilitySdk.
   * @memberof ExtensibilitySdk
   */
  constructor() {
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
   * Informs the host that addon needs to be reinitialized with
   * fresh init context in order to operate properly
   * @memberof ExtensibilitySdk
   */
  public initRequest = () => {
    this.sendMessage(new ReadyMessage());
  };

  /**
   * Sends request to Outreach hosting app to notify Outreach user
   * about a certain even happening in addon.
   *
   * @memberof ExtensibilitySdk
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
   * @param {DecorationUpdateType} [type=DecorationUpdateType.TEXT] Type of decoration update (text by default)
   * @memberof ExtensibilitySdk
   */
  public decorate = async (
    value: string,
    type: DecorationUpdateType = DecorationUpdateType.TEXT
  ) => {
    await this.verifySdkInitialized();

    const message = new DecorationUpdateMessage();
    message.value = value;
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
   * @memberof ExtensibilitySdk
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
   * @memberof ExtensibilitySdk
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
   * @memberof ExtensibilitySdk
   */
  public environment = async (environment: EnvironmentInfo): Promise<void> => {
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
   * @memberof ExtensibilitySdk
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
   * @memberof ExtensibilitySdk
   * @deprecated This usage of function is deprecated and it will be removed in future release.
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
    runtime.application = this.hydrateApplication(initMessage.application);
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

  public hydrateApplication = (app: Application): Application => {
    const application = new Application();
    if (app.api) {
      application.api = Object.assign(new ManifestApi(), app.api);
    }

    if (app.configuration) {
      application.configuration = app.configuration.map((item) =>
        Object.assign(new ConfigurationItem(), item)
      );
    }

    application.store = Object.assign(new ManifestStore(), app.store);

    application.extensions = app.extensions.map((ext) => {
      switch (ext.type) {
        case TabExtensionType.ACCOUNT:
          return Object.assign(new AccountTabExtension(), ext);
        case TabExtensionType.OPPORTUNITY:
          return Object.assign(new OpportunityTabExtension(), ext);
        case TabExtensionType.PROSPECT:
          return Object.assign(new ProspectTabExtension(), ext);
        case TabExtensionType.PROSPECT_ACTION:
          return Object.assign(new ProspectActionTabExtension(), ext);
        case ShellExtensionType.APPLICATION:
          return Object.assign(new ApplicationShellExtension(), ext);
        case ShellExtensionType.COMPANION:
          return Object.assign(new CompanionShellExtension(), ext);
        case ShellExtensionType.TOOL:
          return Object.assign(new ToolShellExtension(), ext);
        case ShellExtensionType.ACTION:
          return Object.assign(new ActionShellExtension(), ext);
        default:
          throw new Error("Can't hydrate extension " + JSON.stringify(ext));
      }
    });

    return application;
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
      extensibilitySdk?: ExtensibilitySdk;
    };
  }
}

// exposing sdk as  a global variable
window.outreach = window.outreach || {};
window.outreach.extensibilitySdk = new ExtensibilitySdk();

export default window.outreach.extensibilitySdk;
