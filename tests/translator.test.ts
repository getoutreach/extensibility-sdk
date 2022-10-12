import {
  AccountContextKeys,
  ApplicationShellExtension,
  DecorationStyle,
  OpportunityContextKeys,
  OpportunityTabExtension,
  ProspectContextKeys,
  ProspectTabExtension,
  ShellExtensionType,
  StoreType,
  TabExtensionType,
  UserContextKeys,
} from '../src';
import { ManifestTranslator } from '../src/legacy/ManifestTranslator';
import { ManifestV1 } from '../src/legacy/ManifestV1';
import { Locale } from '../src/sdk/Locale';

describe('Manifest translator tests', () => {
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
    expect(tabProspectExt.version).toBe(v1Manifests[0].version);

    expect(result!.extensions[1].type).toBe(ShellExtensionType.APPLICATION);
    const shellAppExt = result!.extensions[1] as ApplicationShellExtension;
    expect(shellAppExt.context).toEqual([UserContextKeys.ID, UserContextKeys.FIRST_NAME, UserContextKeys.LAST_NAME]);
    expect(shellAppExt.host.decoration).toBe(DecorationStyle.FULL);
    expect(shellAppExt.host.icon).toBe(v1Manifests[1].host.icon);
    expect(shellAppExt.host.url).toBe(v1Manifests[1].host.url);
    expect(shellAppExt.host.notificationsUrl).toBeUndefined();
    expect(shellAppExt.identifier).toBe(v1Manifests[1].identifier);
    expect(shellAppExt.title).toBe(v1Manifests[1].title);
    expect(shellAppExt.version).toBe(v1Manifests[1].version);

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
    expect(tabOpportunityExt.version).toBe(v1Manifests[2].version);
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
    host: {
      url: 'https://cxt-demo.azurewebsites.net/addon?type=PROSPECT&param1=abc&param2=xyz',
      icon: 'https://cxt-demo.azurewebsites.net/favicon.png?one',
      type: 'tab-prospect',
      environment: {
        fullWidth: true,
      },
    },
    store: 'personal',
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
    configuration: [],
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
        decoration: 'full',
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
        decoration: 'full',
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
