import {
  AccountContextKeys,
  Application,
  ApplicationShellExtension,
  Category,
  OpportunityContextKeys,
  OpportunityTabExtension,
  ProspectContextKeys,
  ProspectTabExtension,
  ScopesS2S,
  Scopes,
  ShellExtensionType,
  StoreType,
  TabExtensionType,
  UserContextKeys,
} from '../src';
import { ManifestTranslator } from '../src/legacy/ManifestTranslator';
import { ManifestV1 } from '../src/legacy/ManifestV1';
import { Locale } from '../src/sdk/Locale';
import { WebHookEvents } from '../src/manifest/api/WebHookEvents';

describe('Manifest translator tests', () => {
  test('hydrate works fine', () => {
    const application = getValidApplication();

    const result = ManifestTranslator.hydrate(application);

    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(Application);

    expect(result!.store.author.company).toBe(application.store.author.company);
    expect(result!.store.author.email).toBe(application.store.author.email);
    expect(result!.store.author.privacyUrl).toBe(application.store.author.privacyUrl);
    expect(result!.store.author.websiteUrl).toBe(application.store.author.websiteUrl);
    expect(result!.store.author.termsOfUseUrl).toBe(application.store.author.termsOfUseUrl);

    expect(result!.store.categories.length).toBe(1);
    expect(result!.store.description).toEqual(application.store.description);
    expect(result!.store.headline).toBe(application.store.headline);
    expect(result!.store.iconUrl).toBe(application.store.iconUrl);

    expect(result!.store.identifier).toBe(application.store.identifier);
    expect(result!.store.locales).toEqual([Locale.ENGLISH]);
    expect(result!.store.medias).toEqual(application.store.medias);
    expect(result!.store.title).toEqual(application.store.title);
    expect(result!.store.type).toEqual(StoreType.PRIVATE);
    expect(result!.store.version).toEqual(application.store.version);

    expect(result!.api!.client.id).toBe(application.api!.client.id);
    expect(result!.api!.scopes).toBe(application.api!.scopes);
    expect(result!.api!.redirectUris).toEqual(application.api!.redirectUris);

    expect(result!.configuration).toEqual(application.configuration);
    expect(result!.extensions.length).toBe(2);
    expect(result!.extensions[1].type).toBe(TabExtensionType.OPPORTUNITY);
    expect(result!.apiS2S).toBeUndefined();
  });

  test('getAppManifest works fine', () => {
    const result = ManifestTranslator.getAppManifest(v1Manifests);

    expect(result).not.toBeNull();

    expect(result!.extensions.length).toBe(3);

    expect(result!.store.author.company).toBe('N/A');
    expect(result!.store.author.email).toBe('no@email.com');
    expect(result!.store.author.privacyUrl).toBe('https://someurl.com/privacy1');
    expect(result!.store.author.websiteUrl).toBe('https://someurl.com/1');
    expect(result!.store.author.termsOfUseUrl).toBe('https://someurl.com/tos1');

    expect(result!.store.categories.length).toBe(0);
    expect(result!.store.description).toEqual(v1Manifests[0].description);
    expect(result!.store.headline).toBe(v1Manifests[0].title);
    expect(result!.store.iconUrl).toBe('');

    expect(result!.store.identifier).toBe(v1Manifests[0].identifier);
    expect(result!.store.locales).toEqual([Locale.ENGLISH]);
    expect(result!.store.medias).toEqual([]);
    expect(result!.store.title).toEqual(v1Manifests[0].title);
    expect(result!.store.type).toEqual(StoreType.PRIVATE);
    expect(result!.store.version).toEqual(v1Manifests[0].version);

    expect(result!.api!.client.id).toBe(v1Manifests[0].api!.applicationId);
    expect(result!.api!.scopes).toBe(v1Manifests[0].api!.scopes);
    expect(result!.api!.redirectUris).toEqual([v1Manifests[0].api!.redirectUri]);

    expect(result!.configuration).toBe(v1Manifests[0].configuration);

    expect(result!.extensions.length).toBe(3);

    expect(result!.extensions[0].type).toBe(TabExtensionType.PROSPECT);
    const tabProspectExt = result!.extensions[0] as ProspectTabExtension;
    expect(tabProspectExt.context).toEqual([
      AccountContextKeys.CUSTOM_ID,
      UserContextKeys.ID,
      UserContextKeys.FIRST_NAME,
      UserContextKeys.LAST_NAME,
      ProspectContextKeys.ID,
      ProspectContextKeys.COMPANY,
      ProspectContextKeys.TITLE,
      ProspectContextKeys.EXTERNAL,
    ]);
    expect(tabProspectExt.description).toBe(v1Manifests[0].description);
    expect(tabProspectExt.fullWidth).toBe(v1Manifests[0].host.environment.fullWidth);
    expect(tabProspectExt.host.url).toBe(v1Manifests[0].host.url);
    expect(tabProspectExt.identifier).toBe(v1Manifests[0].identifier);
    expect(tabProspectExt.title).toBe(v1Manifests[0].title);

    expect(result!.extensions[1].type).toBe(ShellExtensionType.APPLICATION);
    const shellAppExt = result!.extensions[1] as ApplicationShellExtension;
    expect(shellAppExt.context).toEqual([UserContextKeys.ID, UserContextKeys.FIRST_NAME, UserContextKeys.LAST_NAME]);
    expect(shellAppExt.host.icon).toBe(v1Manifests[1].host.icon);
    expect(shellAppExt.host.url).toBe(v1Manifests[1].host.url);
    expect(shellAppExt.identifier).toBe(v1Manifests[1].identifier);
    expect(shellAppExt.title).toBe(v1Manifests[1].title);

    expect(result!.extensions[2].type).toBe(TabExtensionType.OPPORTUNITY);
    const tabOpportunityExt = result!.extensions[2] as OpportunityTabExtension;
    expect(tabOpportunityExt.context).toEqual([
      AccountContextKeys.CUSTOM_ID,
      UserContextKeys.ID,
      UserContextKeys.FIRST_NAME,
      UserContextKeys.LAST_NAME,
      OpportunityContextKeys.ID,
      OpportunityContextKeys.NAME,
    ]);
    expect(tabOpportunityExt.description).toBe(v1Manifests[2].description);
    expect(tabOpportunityExt.fullWidth).toBe(v1Manifests[2].host.environment.fullWidth);
    expect(tabOpportunityExt.host.url).toBe(v1Manifests[2].host.url);
    expect(tabOpportunityExt.identifier).toBe(v1Manifests[2].identifier);
    expect(tabOpportunityExt.title).toBe(v1Manifests[2].title);
  });

  describe('disableTimeoutMonitoring', () => {
    test('if omitted in manifest, it is false', () => {
      const result = ManifestTranslator.getAppManifest(v1Manifests);
      expect(result!.disableTimeoutMonitoring).toBeFalsy();
    });

    test('preserved through translation', () => {
      v1Manifests[0].disableTimeoutMonitoring = true;
      const result = ManifestTranslator.getAppManifest(v1Manifests);
      expect(result!.disableTimeoutMonitoring).toBe(true);
    });
    test('it replaces notUsingSdk', () => {
      v1Manifests[0].notUsingSdk = true;
      const result = ManifestTranslator.getAppManifest(v1Manifests);
      expect(result!.disableTimeoutMonitoring).toBe(true);
    });
  });
});

const v1Manifests = [
  {
    api: {
      token: 'https://cxt-demo.azurewebsites.net/token',
      scopes: ['users.read', 'prospects.read'],
      connect: 'https://cxt-demo.azurewebsites.net/connect',
      redirectUri: 'https://cxt-demo.azurewebsites.net/authorize',
      applicationId: 'WHnHrLrl1XEBP3liH1YIzVgrWD2xxVcEdr_zmwLGcQ0',
    },
    configuration: [{
      key: 'app-configuration',
      text: { en: 'configuration value' },
      type: 'string',
      required: true,
      urlInclude: false,
    }],
    host: {
      url: 'https://cxt-demo.azurewebsites.net/addon?type=PROSPECT&param1=abc&param2=xyz',
      icon: 'https://cxt-demo.azurewebsites.net/favicon.png?one',
      type: 'tab-prospect',
      environment: {
        fullWidth: true,
      },
    },
    title: {
      en: 'Hello world (OREX)',
      'de-DE': 'German',
      'en-US': 'Hello world (OREX)',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
    author: {
      privacyUrl: 'https://someurl.com/privacy1',
      websiteUrl: 'https://someurl.com/1',
      termsOfUseUrl: 'https://someurl.com/tos1',
    },
    context: ['acc.cstmId', 'usr.id', 'usr.fname', 'usr.lname', 'pro.id', 'pro.comp', 'pro.title', 'pro.ext'],
    version: '0.10',
    identifier: 'prospect-tab-hello',
    description: {
      en: 'Hello world addon for Outreach prospect',
      'de-DE': 'German',
      'en-US': 'Hello world addon for Outreach prospect',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
  } as ManifestV1,
  {
    api: {
      token: 'https://cxt-demo.azurewebsites.net/token',
      scopes: ['users.read'],
      connect: 'https://cxt-demo.azurewebsites.net/connect',
      redirectUri: 'https://cxt-demo.azurewebsites.net/authorize',
      applicationId: 'WHnHrLrl1XEBP3liH1YIzVgrWD2xxVcEdr_zmwLGcQ0',
    },
    host: {
      url: 'https://cxt-demo.azurewebsites.net/addon?param1=abc&param2=xyz',
      icon: 'https://cxt-demo.azurewebsites.net/favicon.png?two',
      type: 'left-side-menu',
      environment: {
        fullWidth: true,
      },
    },
    store: 'personal',
    title: {
      en: 'Hello world (left sidemenu addon)',
      'de-DE': 'German',
      'en-US': 'Hello world (left sidemenu addon)',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
    author: {
      privacyUrl: 'https://someurl.com/privacy',
      websiteUrl: 'https://someurl.com/',
      termsOfUseUrl: 'https://someurl.com/tos',
    },
    context: ['usr.id', 'usr.fname', 'usr.lname'],
    version: '0.10',
    identifier: 'left-side-menu-hello',
    description: {
      en: 'Hello world addon for Outreach app',
      'de-DE': 'German',
      'en-US': 'Hello world addon for Outreach app',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
    configuration: [],
    categories: ['account_based_marketing', 'chat'],
  } as ManifestV1,
  {
    api: {
      token: 'https://cxt-demo.azurewebsites.net/token',
      scopes: ['users.read', 'opportunities.read'],
      connect: 'https://cxt-demo.azurewebsites.net/connect',
      redirectUri: 'https://cxt-demo.azurewebsites.net/authorize',
      applicationId: 'WHnHrLrl1XEBP3liH1YIzVgrWD2xxVcEdr_zmwLGcQ0',
    },
    host: {
      url: 'https://cxt-demo.azurewebsites.net/addon?param1=abc&param2=xyz',
      icon: 'https://cxt-demo.azurewebsites.net/favicon.png?three',
      type: 'tab-opportunity',
      environment: {
        fullWidth: true,
      },
    },
    store: 'personal',
    title: {
      en: 'Hello world (opportunity addon)',
      'de-DE': 'German',
      'en-US': 'Hello world (opportunity addon)',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
    author: {
      privacyUrl: 'https://someurl.com/privacy',
      websiteUrl: 'https://someurl.com/',
      termsOfUseUrl: 'https://someurl.com/tos',
    },
    context: ['acc.cstmId', 'usr.id', 'usr.fname', 'usr.lname', 'opp.id', 'opp.name'],
    version: '0.10',
    identifier: 'opportunity-tab-hello',
    description: {
      en: 'Hello world addon for Outreach opportunity',
      'de-DE': 'German',
      'en-US': 'Hello world addon for Outreach opportunity',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
    configuration: [],
  } as ManifestV1,
];

const getValidApplication = (): Application => {
  const opportunityTabExtension = new OpportunityTabExtension();
  opportunityTabExtension.identifier = 'opportunity-tab-addon';
  opportunityTabExtension.fullWidth = false;
  opportunityTabExtension.host = {
    url: 'http://someurl.com/host',
  };
  opportunityTabExtension.context = [UserContextKeys.ID, OpportunityContextKeys.ID];

  const appTabExtension = new ApplicationShellExtension();
  appTabExtension.identifier = 'app-tabaddon';
  appTabExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };

  const application = new Application();
  application.store = {
    author: {
      email: 'author@someurl.com',
      company: 'Acme ltd',
      privacyUrl: 'https://someurl.com/privacy',
      supportUrl: 'https://someurl.com/support',
      termsOfUseUrl: 'https://someurl.com/tos',
      websiteUrl: 'https://someurl.com/',
    },
    categories: [Category.ACCOUNT_BASED_MARKETING],
    medias: [
      {
        url: 'https://someurl.com/image.png',
        title: 'Our awesome extension',
        type: 'image',
      },
      {
        url: 'https://youtube.com/some_video',
        title: 'Our awesome animation',
        type: 'video',
      },
    ],
    headline: {
      en: 'Some headline (en)',
      'de-DE': 'German',
      'en-US': 'Hello world (left sidemenu addon)',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
    description: {
      en: 'Some description (en)',
      'de-DE': 'German',
      'en-US': 'Hello world (left sidemenu addon)',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
    identifier: 'app-identifier',
    iconUrl: 'https://someurl.com/icon',
    locales: [Locale.ENGLISH],
    type: StoreType.PRIVATE,
    title: {
      en: 'Some title (en)',
      'de-DE': 'German',
      'en-US': 'Hello world (left sidemenu addon)',
      'es-LA': 'Spanish',
      'fr-FR': 'French',
    },
    version: '0.10',
  };

  application.api = {
    scopes: [Scopes.ACCOUNTS_ALL, Scopes.CALLS_ALL],
    redirectUris: ['https://addon-host.com/hello-world'],
    scopesAll: false,
    client: {
      id: 'AbCd123456qW',
    },
  };

  application.apiS2S = {
    scopes: [ScopesS2S.ACCOUNTS_ALL, ScopesS2S.CALLS_ALL],
    publicKeys: [
      {
        name: 'My key',
        value: 'PUBLIC KEY',
      },
    ],
    guid: 'AbCd123456qW',
  };

  application.webhook = {
    events: [WebHookEvents.ALL],
    url: 'https://addon-host.com/webhook',
  };

  application.configuration = [{
    key: 'app-configuration',
    text: { en: 'configuration value' },
    type: 'string',
    required: true,
    urlInclude: false,
  }],

  application.extensions = [appTabExtension, opportunityTabExtension];

  return application;
};
