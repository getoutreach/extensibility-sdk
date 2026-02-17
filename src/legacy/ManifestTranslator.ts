import {
  AccountTileExtension,
  ActionShellExtension,
  AllContextKeys,
  ConfigurationItem,
  CompanionShellExtension,
  ContentExtensionType,
  EditorExtension,
  EmailContextKeys,
  HomeEmailsTileExtension,
  HomeTasksTileExtension,
  ManifestApi,
  OpportunityTileExtension,
  ProspectTileExtension,
  TileExtensionType,
  ToolShellExtension,
} from '..';
import { AccountContextKeys } from '../context/keys/AccountContextKeys';
import { ClientContextKeys } from '../context/keys/ClientContextKeys';
import { OpportunityContextKeys } from '../context/keys/OpportunityContextKeys';
import { OrganizationContextKeys } from '../context/keys/OrganizationContextKeys';
import { ProspectContextKeys } from '../context/keys/ProspectContextKeys';
import { UserContextKeys } from '../context/keys/UserContextKeys';
import { Application } from '../manifest/Application';
import { ExtensionHost } from '../manifest/extensions/ExtensionHost';
import { ShellExtension } from '../manifest/extensions/shell/ShellExtension';
import { ShellExtensionHost } from '../manifest/extensions/shell/ShellExtensionHost';
import { ShellExtensionType } from '../manifest/extensions/shell/ShellExtensionType';
import { ApplicationShellExtension } from '../manifest/extensions/shell/types/ApplicationShellExtension';
import { TabExtension } from '../manifest/extensions/tabs/TabExtension';
import { TabExtensionType } from '../manifest/extensions/tabs/TabExtensionType';
import { AccountTabExtension } from '../manifest/extensions/tabs/types/AccountTabExtension';
import { OpportunityTabExtension } from '../manifest/extensions/tabs/types/OpportunityTabExtension';
import { ProspectActionTabExtension } from '../manifest/extensions/tabs/types/ProspectActionTabExtension';
import { ProspectTabExtension } from '../manifest/extensions/tabs/types/ProspectTabExtension';
import { ReportsTabExtension } from '../manifest/extensions/tabs/types/ReportsTabExtension';
import { ManifestApiClient } from '../manifest/ManifestApiClient';
import { ManifestAuthor } from '../manifest/ManifestAuthor';
import { ManifestStore } from '../manifest/ManifestStore';
import { ManifestMcpServer } from '../manifest/ManifestMcpServer';
import { StoreType } from '../manifest/store/StoreType';
import { Locale } from '../sdk/Locale';
import { ManifestV1 } from './ManifestV1';
import { ManifestV1Api } from './ManifestV1Api';

export class ManifestTranslator {
  public static getAddonManifest(app: Application, ext: TabExtension | ShellExtension): ManifestV1 | null {
    let manifestType:
      | 'tab-opportunity'
      | 'tab-prospect'
      | 'tab-account'
      | 'left-side-menu'
      | 'shell-companion'
      | 'shell-tool'
      | 'shell-action'
      | null = null;

    switch (ext.type) {
      case ShellExtensionType.APPLICATION:
        manifestType = 'left-side-menu';
        break;
      case TabExtensionType.ACCOUNT:
        manifestType = 'tab-account';
        break;
      case TabExtensionType.PROSPECT:
        manifestType = 'tab-prospect';
        break;
      case TabExtensionType.OPPORTUNITY:
        manifestType = 'tab-opportunity';
        break;
      case ShellExtensionType.COMPANION:
        manifestType = 'shell-companion';
        break;
      case ShellExtensionType.TOOL:
        manifestType = 'shell-tool';
        break;
      case ShellExtensionType.ACTION:
        manifestType = 'shell-action';
        break;
    }

    if (!manifestType) {
      console.error('Unsupported addon manifest for:', {
        app,
        ext,
      });
      return null;
    }

    let manifestStore: 'personal' | 'private' | 'public' | null = null;
    switch (app.store.type) {
      case StoreType.PRIVATE:
        manifestStore = 'personal';
        break;
      case StoreType.INTERNAL:
        manifestStore = 'private';
        break;
      case StoreType.PUBLIC:
        manifestStore = 'public';
        break;
    }

    if (!manifestStore) {
      console.error('Unsupported addon manifest store for:', {
        app,
        ext,
      });
      return null;
    }

    const tabExt =
      ext.type === TabExtensionType.ACCOUNT ||
      ext.type === TabExtensionType.PROSPECT ||
      ext.type === TabExtensionType.OPPORTUNITY;

    const mapApi = (): ManifestV1Api | undefined => {
      if (!app.api) {
        return;
      }

      return {
        applicationId: app.api.client.id,
        scopes: app.api.scopes,
        connect: '',
        redirectUri: '',
        token: '',
      };
    };

    const manifestV1: ManifestV1 = {
      author: app.store.author,
      categories: app.store.categories?.map((p) => p.toString()) || [],
      configuration: app.configuration ?? [],
      context: ext.context.map((c) => c.toString()),
      description: app.store.description,
      host: {
        icon: ext.host instanceof ShellExtensionHost ? ext.host.icon : '',
        url: ext.host.url!,
        type: manifestType,
        environment: {
          fullWidth: tabExt,
        },
      },
      identifier: ext.identifier,
      store: manifestStore,
      title: app.store.title,
      version: app.store.version,
      api: mapApi(),
      medias: app.store.medias,
      disableTimeoutMonitoring: app.disableTimeoutMonitoring,
    };

    return manifestV1;
  }

  /**
   * Converts collection of addon "v1" manifests to
   * a single application "v2" application.
   *
   * @param {ManifestV1[]} appManifests
   * @return {*}  {(Application | null)}
   */
  public static getAppManifest(appManifests: ManifestV1[]): Application | null {
    if (appManifests.length === 0) {
      return null;
    }
    const firstExt = appManifests[0];
    let storeType: StoreType = StoreType.PRIVATE;
    if (firstExt.store === 'private') {
      storeType = StoreType.INTERNAL;
    } else if (firstExt.store === 'public') {
      storeType = StoreType.PUBLIC;
    }

    const app: Application = new Application();
    app.disableTimeoutMonitoring = firstExt.notUsingSdk || firstExt.disableTimeoutMonitoring;
    app.store = new ManifestStore();
    app.store.author = new ManifestAuthor();
    app.store.author.company = firstExt.author.company || 'N/A';
    app.store.author.email = 'no@email.com';
    app.store.author.privacyUrl = firstExt.author.privacyUrl;
    app.store.author.termsOfUseUrl = firstExt.author.termsOfUseUrl;
    app.store.author.websiteUrl = firstExt.author.websiteUrl;

    app.store.categories = [];

    app.store.description = firstExt.description;
    app.store.iconUrl = '';
    app.store.identifier = firstExt.identifier;
    app.store.locales = [Locale.ENGLISH];
    app.store.medias = [];
    app.store.headline = firstExt.title;
    app.store.title = firstExt.title;
    app.store.version = firstExt.version;
    app.store.type = storeType;

    app.extensions = [];
    if (firstExt.api) {
      app.api = new ManifestApi();
      app.api.client = new ManifestApiClient();
      app.api.scopes = firstExt.api.scopes;
      app.api.client.id = firstExt.api.applicationId;
      app.api.redirectUris = [firstExt.api.redirectUri];
    }
    app.configuration = firstExt.configuration;

    const extensions = appManifests.map((ext) => {
      let extension: ShellExtension | TabExtension;

      switch (ext.host.type) {
        case 'left-side-menu':
        case 'shell-companion':
        case 'shell-tool':
        case 'shell-action':
          extension = this.processShellExtensions(ext);
          break;
        case 'tab-account':
        case 'tab-opportunity':
        case 'tab-prospect':
        case 'tab-prospect-action':
        case 'tab-reports':
          extension = this.processTabExtensions(ext);
          break;
        default:
          throw new Error('Unsupported type:' + ext.host.type);
      }

      extension.identifier = ext.identifier;
      extension.title = ext.title;
      extension.host.url = ext.host.url;

      if (extension.host instanceof ShellExtensionHost) {
        extension.host.icon = ext.host.icon;
      }

      return extension;
    });

    app.extensions = extensions;
    return app;
  }

  public static getContextEnumValue(ctx: string): AllContextKeys | null {
    const accountKey = ManifestTranslator.getEnumKeyByEnumValue(AccountContextKeys, ctx);
    if (accountKey) {
      return AccountContextKeys[accountKey];
    }

    const prospectKey = ManifestTranslator.getEnumKeyByEnumValue(ProspectContextKeys, ctx);
    if (prospectKey) {
      return ProspectContextKeys[prospectKey];
    }

    const opportunityKey = ManifestTranslator.getEnumKeyByEnumValue(OpportunityContextKeys, ctx);
    if (opportunityKey) {
      return OpportunityContextKeys[opportunityKey];
    }

    const userKey = ManifestTranslator.getEnumKeyByEnumValue(UserContextKeys, ctx);
    if (userKey) {
      return UserContextKeys[userKey];
    }

    const organizationKey = ManifestTranslator.getEnumKeyByEnumValue(OrganizationContextKeys, ctx);
    if (organizationKey) {
      return OrganizationContextKeys[organizationKey];
    }

    const clientKey = ManifestTranslator.getEnumKeyByEnumValue(ClientContextKeys, ctx);
    if (clientKey) {
      return ClientContextKeys[clientKey];
    }

    const emailKey = ManifestTranslator.getEnumKeyByEnumValue(EmailContextKeys, ctx);
    if (emailKey) {
      return EmailContextKeys[emailKey];
    }

    return null;
  }

  public static getEnumKeyByEnumValue<T extends { [index: string]: string }>(
    myEnum: T,
    enumValue: string
  ): keyof T | null {
    const keys = Object.keys(myEnum).filter((x) => myEnum[x] === enumValue);
    return keys.length > 0 ? keys[0] : null;
  }

  public static mapEnums<T extends { [index: string]: string }>(myEnum: T, enumValues: string[]): (keyof T)[] {
    const result: (keyof T)[] = [];

    enumValues.map((mc) => {
      const enumKey = ManifestTranslator.getEnumKeyByEnumValue(myEnum, mc);
      if (enumKey) {
        result.push(myEnum[enumKey]);
      }
    });
    return result;
  }

  public static hydrate = (app: Application): Application => {
    const application = new Application();

    application.disableTimeoutMonitoring = app.disableTimeoutMonitoring;
    application.externalInstallationUrl = app.externalInstallationUrl;
    application.externalSetupUrl = app.externalSetupUrl;

    if (app.api) {
      application.api = Object.assign(new ManifestApi(), app.api);
    }

    if (app.mcpServer) {
      application.mcpServer = Object.assign(new ManifestMcpServer(), app.mcpServer);
    }

    application.store = Object.assign(new ManifestStore(), app.store);

    if (app.configuration) {
      application.configuration = app.configuration.map((item) => Object.assign(new ConfigurationItem(), item));
    }

    application.extensions = app.extensions.map((ext) => {
      switch (ext.type) {
        case TabExtensionType.ACCOUNT:
          return Object.assign(new AccountTabExtension(), ext);
        case ShellExtensionType.ACTION:
          return Object.assign(new ActionShellExtension(), ext);
        case ShellExtensionType.APPLICATION:
          return Object.assign(new ApplicationShellExtension(), ext);
        case ShellExtensionType.COMPANION:
          return Object.assign(new CompanionShellExtension(), ext);
        case TabExtensionType.OPPORTUNITY:
          return Object.assign(new OpportunityTabExtension(), ext);
        case TabExtensionType.PROSPECT:
          return Object.assign(new ProspectTabExtension(), ext);
        case TabExtensionType.PROSPECT_ACTION:
          return Object.assign(new ProspectActionTabExtension(), ext);
        case TabExtensionType.REPORTS:
          return Object.assign(new ReportsTabExtension(), ext);
        case ShellExtensionType.TOOL:
          return Object.assign(new ToolShellExtension(), ext);

        case TileExtensionType.ACCOUNT:
          return Object.assign(new AccountTileExtension(), ext);
        case TileExtensionType.HOME_EMAILS:
          return Object.assign(new HomeEmailsTileExtension(), ext);
        case TileExtensionType.HOME_TASKS:
          return Object.assign(new HomeTasksTileExtension(), ext);
        case TileExtensionType.OPPORTUNITY:
          return Object.assign(new OpportunityTileExtension(), ext);
        case TileExtensionType.PROSPECT:
          return Object.assign(new ProspectTileExtension(), ext);

        case ContentExtensionType.EDITOR:
          return Object.assign(new EditorExtension(), ext);

        default:
          throw new Error("Can't hydrate extension " + JSON.stringify(ext));
      }
    });

    return application;
  };

  private static processTabExtensions = (ext: ManifestV1): TabExtension => {
    let extension: TabExtension;
    switch (ext.host.type) {
      case TabExtensionType.ACCOUNT:
        extension = new AccountTabExtension();
        break;
      case TabExtensionType.OPPORTUNITY:
        extension = new OpportunityTabExtension();
        break;
      case TabExtensionType.PROSPECT:
        extension = new ProspectTabExtension();
        break;
      case TabExtensionType.REPORTS:
        extension = new ReportsTabExtension();
        break;
      case TabExtensionType.PROSPECT_ACTION:
        extension = new ProspectActionTabExtension();
        break;
      default:
        throw new Error('Unknown v1 host type:' + ext.host.type);
    }
    extension.title = ext.title;
    extension.description = ext.description;
    extension.identifier = ext.identifier;
    extension.host = new ExtensionHost();
    extension.description = ext.description;
    extension.fullWidth = ext.host.environment?.fullWidth || false;

    const context: AllContextKeys[] = [];
    ext.context.forEach((key) => {
      const enumValue = this.getContextEnumValue(key);
      if (enumValue) {
        context.push(enumValue);
      }
    });
    extension.context = context;
    return extension;
  };

  private static processShellExtensions = (ext: ManifestV1): ShellExtension => {
    let extension: ShellExtension;

    switch (ext.host.type) {
      case 'left-side-menu':
        extension = new ApplicationShellExtension();
        break;
      case 'shell-companion':
        extension = new CompanionShellExtension();
        break;
      case 'shell-tool':
        extension = new ToolShellExtension();
        break;
      case 'shell-action':
        extension = new ActionShellExtension();
        break;

      default:
        throw new Error('Unsupported shell extension type:' + ext.host.type);
    }

    extension.host = new ShellExtensionHost();
    extension.context = ext.context.map((ctx) => {
      const userKey = ManifestTranslator.getEnumKeyByEnumValue(UserContextKeys, ctx);
      if (userKey) {
        return UserContextKeys[userKey];
      }

      const organizationKey = ManifestTranslator.getEnumKeyByEnumValue(OrganizationContextKeys, ctx);
      if (organizationKey) {
        return OrganizationContextKeys[organizationKey];
      }

      const clientKey = ManifestTranslator.getEnumKeyByEnumValue(ClientContextKeys, ctx);
      if (clientKey) {
        return ClientContextKeys[clientKey];
      }

      return 'NAN' as any;
    });
    return extension;
  };
}
