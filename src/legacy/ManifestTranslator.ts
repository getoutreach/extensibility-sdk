import {
  ActionShellExtension,
  CompanionShellExtension,
  ToolShellExtension,
} from '..';
import { AccountContextKeys } from '../context/keys/AccountContextKeys';
import { ClientContextKeys } from '../context/keys/ClientContextKeys';
import { OpportunityContextKeys } from '../context/keys/OpportunityContextKeys';
import { ProspectContextKeys } from '../context/keys/ProspectContextKeys';
import { UserContextKeys } from '../context/keys/UserContextKeys';
import { Application } from '../manifest/Application';
import { ExtensionHost } from '../manifest/extensions/ExtensionHost';
import { DecorationStyle } from '../manifest/extensions/shell/DecorationStyle';
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
import { ManifestAuthor } from '../manifest/ManifestAuthor';
import { ManifestStore } from '../manifest/ManifestStore';
import { StoreType } from '../manifest/store/StoreType';
import { Locale } from '../sdk/Locale';
import { ManifestV1 } from './ManifestV1';

export class ManifestTranslator {
  public static getAddonManifest(
    app: Application,
    ext: TabExtension | ShellExtension
  ): ManifestV1 | null {
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
      console.error('Unsupported addon manifest for:', { app, ext });
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
      console.error('Unsupported addon manifest store for:', { app, ext });
      return null;
    }

    const appExt = ext.type === ShellExtensionType.APPLICATION;
    const tabExt =
      ext.type === TabExtensionType.ACCOUNT ||
      ext.type === TabExtensionType.PROSPECT ||
      ext.type === TabExtensionType.OPPORTUNITY;

    const manifestV1: ManifestV1 = {
      author: app.store.author,
      categories: app.store.categories?.map((p) => p.toString()) || [],
      configuration: app.configuration || [],
      context: ext.context.map((c) => c.toString()),
      description: app.store.description,
      host: {
        icon: ext.host.icon,
        url: ext.host.url,
        notificationsUrl: appExt ? ext.host.notificationsUrl || '' : '',
        type: manifestType,
        environment: {
          fullWidth: tabExt,
          decoration: appExt ? ext.host.decoration : 'none',
        },
      },
      identifier: ext.identifier,
      store: manifestStore,
      title: app.store.title,
      version: app.store.version,
      api: app.api,
      medias: app.store.medias,
      disableTimeoutMonitoring: app.notUsingSdk || app.disableTimeoutMonitoring,
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
    app.notUsingSdk = firstExt.notUsingSdk || firstExt.disableTimeoutMonitoring;
    app.store = new ManifestStore();
    app.store.author = new ManifestAuthor();
    app.store.author.company = firstExt.author.company || 'N/A';
    app.store.author.email = 'no@email.com';
    app.store.author.privacyUrl = firstExt.author.privacyUrl;
    app.store.author.termsOfUseUrl = firstExt.author.termsOfUseUrl;
    app.store.author.websiteUrl = firstExt.author.websiteUrl;

    app.store.categories = [];

    app.store.description = firstExt.description;
    app.store.icon = firstExt.host.icon;
    app.store.identifier = firstExt.identifier;
    app.store.locales = [Locale.ENGLISH];
    app.store.medias = [];
    app.store.headline = firstExt.title;
    app.store.title = firstExt.title;
    app.store.version = firstExt.version;
    app.store.type = storeType;

    app.extensions = [];
    app.api = firstExt.api;
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
          extension = this.processTabExtensions(ext);
          break;
        default:
          throw new Error('Unsupported type:' + ext.host.type);
      }

      extension.identifier = ext.identifier;
      extension.title = ext.title;
      extension.host.icon = ext.host.icon;
      extension.host.url = ext.host.url;
      extension.version = ext.version;

      return extension;
    });

    app.extensions = extensions;
    return app;
  }

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

    extension.context = ext.context.map((ctx) => {
      const accountKey = this.getEnumKeyByEnumValue(AccountContextKeys, ctx);
      if (accountKey) {
        return AccountContextKeys[accountKey];
      }

      const prospectKey = this.getEnumKeyByEnumValue(ProspectContextKeys, ctx);
      if (prospectKey) {
        return ProspectContextKeys[prospectKey];
      }

      const opportunityKey = this.getEnumKeyByEnumValue(
        OpportunityContextKeys,
        ctx
      );
      if (opportunityKey) {
        return OpportunityContextKeys[opportunityKey];
      }

      const userKey = this.getEnumKeyByEnumValue(UserContextKeys, ctx);
      if (userKey) {
        return UserContextKeys[userKey];
      }

      const clientKey = this.getEnumKeyByEnumValue(ClientContextKeys, ctx);
      if (clientKey) {
        return ClientContextKeys[clientKey];
      }

      return 'NAN' as any;
    });
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
    extension.host.notificationsUrl = ext.host.notificationsUrl;
    extension.host.decoration = DecorationStyle.FULL;

    if (ext.host.environment) {
      switch (ext.host.environment.decoration) {
        case 'none':
          extension.host.decoration = DecorationStyle.NONE;
          break;
        case 'simple':
          extension.host.decoration = DecorationStyle.SIMPLE;
          break;
        case 'full':
          extension.host.decoration = DecorationStyle.FULL;
          break;
      }
    }

    extension.context = ext.context.map((ctx) => {
      const userKey = this.getEnumKeyByEnumValue(UserContextKeys, ctx);
      if (userKey) {
        return UserContextKeys[userKey];
      }

      const clientKey = this.getEnumKeyByEnumValue(ClientContextKeys, ctx);
      if (clientKey) {
        return ClientContextKeys[clientKey];
      }

      return 'NAN' as any;
    });
    return extension;
  };

  private static getEnumKeyByEnumValue<T extends { [index: string]: string }>(
    myEnum: T,
    enumValue: string
  ): keyof T | null {
    const keys = Object.keys(myEnum).filter((x) => myEnum[x] === enumValue);
    return keys.length > 0 ? keys[0] : null;
  }
}
