import { utils } from '../src/utils';
import { validate } from '../src/sdk/Validator';

import { Application } from '../src/manifest/Application';
import { Category } from '../src/manifest/store/Category';
import { StoreType } from '../src/manifest/store/StoreType';
import { Scopes } from '../src/manifest/api/Scopes';

import { OpportunityTabExtension } from '../src/manifest/extensions/tabs/types/OpportunityTabExtension';

import { Locale } from '../src/sdk/Locale';
import { OpportunityContextKeys } from '../src/context/keys/OpportunityContextKeys';
import { UserContextKeys } from '../src/context/keys/UserContextKeys';
import { ApplicationShellExtension } from '../src/manifest/extensions/shell/types/ApplicationShellExtension';
import { DecorationStyle } from '../src';

describe('manifest tests', () => {
  describe('valid', () => {
    test('only valid manifest should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      var issues = validate(manifest);
      expect(issues.length).toBe(0);
    });
  });

  describe('author', () => {
    test('privacyUrl should be url', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.author.privacyUrl = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Author privacy url is invalid url. Value: bananas');
    });

    test('termsOfUseUrl should be url', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.author.termsOfUseUrl = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Author terms of use url is invalid url. Value: bananas');
    });

    test('websiteUrl should be url', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.author.websiteUrl = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Author website url is invalid url. Value: bananas');
    });

    test('email should be email', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.author.email = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Author e-mail is invalid e-mail. Value: bananas');
    });
  });

  describe('api', () => {
    test('only valid scope should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();

      manifest.api!.scopes = ['BANANA', Scopes.ACCOUNTS_ALL, Scopes.CALLS_ALL] as any;

      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Invalid api scope value. Value: BANANA');
    });

    test('applicationId should be defined', () => {
      const manifest = getNewValidApplicationManifest();

      delete (manifest.api as any).client;
      delete (manifest.api as any).applicationId;
      var issues = validate(manifest);
      expect(issues.length).toBe(2);
      expect(issues[1]).toBe('Manifest Api section needs to have applicationId value.');
    });

    test('client should be defined', () => {
      const manifest = getNewValidApplicationManifest();

      delete (manifest.api as any).client;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Manifest Api section needs to have client value.');
    });

    test('client.id should be defined', () => {
      const manifest = getNewValidApplicationManifest();

      delete (manifest.api as any).client.id;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Manifest Api section needs to have client.id value.');
    });

    test('redirectUri should be valid URL', () => {
      const manifest: Application = getNewValidApplicationManifest();
      delete (manifest.api as any).redirectUris;
      manifest.api!.redirectUri = 'bananas';

      var issues = validate(manifest);
      expect(issues.length).toBe(2);
      expect(issues[1]).toBe('Manifest Api section needs to have a valid redirect url. Value: bananas');
    });

    test('redirectUris should be valid URLs', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.api!.redirectUris = ['bananas'];

      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Manifest Api section needs to have valid redirect urls. Value: bananas');
    });

    test('token endpoint should be valid URL', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.api!.token = 'bananas';

      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Manifest Api section needs to have a valid token endpoint url. Value: bananas');
    });

    test('connect endpoint should be valid URL', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.api!.connect = 'bananas';

      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Manifest Api section needs to have a valid connect endpoint url. Value: bananas');
    });
  });

  describe('categories', () => {
    test('no categories section is not acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.categories = [];
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('There are no categories selected for addon. Value: ');
    });
    test('empty categories section is not acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.categories = [];
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('There are no categories selected for addon. Value: ');
    });
  });

  describe('medias', () => {
    test('no medias section is acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.medias = [];
      var issues = validate(manifest);
      expect(issues.length).toBe(0);
    });

    test('no medias section is acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.medias = 'invalid-media-value' as any;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Medias section value is not a valid array. Value: invalid-media-value');
    });

    describe('Invalid media file info is not acceptable', () => {
      test('No uri', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.store.medias = [
          {
            index: 0,
            title: 'Some title',
            type: 'image',
          } as any,
        ];
        var issues = validate(manifest);
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Url value is missing');
      });

      test('Uri not a valid url', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.store.medias = [
          {
            title: 'Some title',
            type: 'image',
            url: 'not-a-valid-url',
          },
        ];
        var issues = validate(manifest);
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Url value is not a valid url. Value: not-a-valid-url');
      });

      test('Title is missing', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.store.medias = [
          {
            index: 0,
            type: 'image',
            url: 'https://www.site.com/image.png',
          } as any,
        ];
        var issues = validate(manifest);

        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Title value is missing');
      });

      test('Type is missing', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.store.medias = [
          {
            index: 0,
            title: 'Some title',
            url: 'https://www.site.com/image.png',
          } as any,
        ];
        var issues = validate(manifest);

        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Type value is missing');
      });

      test('Type is invalid', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.store.medias = [
          {
            index: 0,
            title: 'Some title',
            type: 'invalid-type',
            url: 'https://www.site.com/image.png',
          } as any,
        ];
        var issues = validate(manifest);

        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Type value is invalid. Value: invalid-type');
      });
    });
  });

  describe('store', () => {
    test('only valid store type hould be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.store.type = 'BANANAS' as any;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Store value is invalid. Value:BANANAS');
    });
  });

  describe('urlValidation', () => {
    test('url with no trailing / is valid', () => {
      expect(utils.urlValidation('https://somedomain.com')).toBe(true);
    });
  });
});

const getNewValidApplicationManifest = (): Application => {
  const opportunityTabExtension = new OpportunityTabExtension();
  opportunityTabExtension.identifier = 'opportunity-tab-addon';
  opportunityTabExtension.fullWidth = false;
  opportunityTabExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };
  opportunityTabExtension.version = '0.99';
  opportunityTabExtension.context = [UserContextKeys.ID, OpportunityContextKeys.ID];

  const appTabExtension = new ApplicationShellExtension();
  appTabExtension.identifier = 'app-tabaddon';
  appTabExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
    decoration: DecorationStyle.NONE,
  };
  appTabExtension.version = '0.98';
  appTabExtension.context = [UserContextKeys.ID];

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
    applicationId: 'AbCd123456qW',
    redirectUri: 'https://addon-host.com/hello-world',
    redirectUris: ['https://addon-host.com/hello-world'],
    client: {
      id: 'AbCd123456qW',
    },
    token: 'https://someurl.com/token',
    connect: 'https://someurl.com/connect',
  };

  application.extensions = [appTabExtension, opportunityTabExtension];

  return application;
};
