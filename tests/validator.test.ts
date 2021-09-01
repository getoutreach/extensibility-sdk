import { utils } from '../src/utils';
import { validate } from '../src/sdk/Validator';

import { Application } from '../src/manifest/Application';
import { Category } from '../src/manifest/app/Category';
import { Store } from '../src/manifest/app/Store';
import { Scopes } from '../src/manifest/api/Scopes';

import { TabExtension } from '../src/manifest/extensions/tabs/TabExtension';
import { ApplicationTabExtension } from '../src/manifest/extensions/tabs/types/ApplicationTabExtension';
import { OpportunityTabExtension } from '../src/manifest/extensions/tabs/types/OpportunityTabExtension';

import { Locale } from '../src/sdk/Locale';
import { OpportunityContextKeys } from '../src/context/keys/OpportunityContextKeys';
import { UserContextKeys } from '../src/context/keys/UserContextKeys';
import { ProspectContextKeys } from '../src/context/keys/ProspectContextKeys';
import { TabExtensionType } from '../src';

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
      manifest.app.author.privacyUrl = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Author privacy url is invalid url. Value: bananas'
      );
    });

    test('termsOfUseUrl should be url', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.app.author.termsOfUseUrl = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Author terms of use url is invalid url. Value: bananas'
      );
    });

    test('websiteUrl should be url', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.app.author.websiteUrl = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Author website url is invalid url. Value: bananas'
      );
    });

    test('email should be email', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.app.author.email = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Author e-mail is invalid e-mail. Value: bananas');
    });
  });

  describe('api', () => {
    test('only valid scope should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();

      manifest.api!.scopes = [
        'BANANA',
        Scopes.ACCOUNTS_ALL,
        Scopes.CALLS_ALL,
      ] as any;

      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Invalid api scope value. Value: BANANA');
    });

    test('applicationId should be defined', () => {
      const manifest = getNewValidApplicationManifest();

      delete (manifest.api as any).applicationId;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Manifest Api section needs to have applicationId value.'
      );
    });

    test('redirectUri should be valid URL', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.api!.redirectUri = 'bananas';

      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Manifest Api section needs to have a valid redirect url. Value: bananas'
      );
    });

    test('token endpoint should be valid URL', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.api!.token = 'bananas';

      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Manifest Api section needs to have a valid token endpoint url. Value: bananas'
      );
    });

    test('connect endpoint should be valid URL', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.api!.connect = 'bananas';

      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Manifest Api section needs to have a valid connect endpoint url. Value: bananas'
      );
    });
  });

  describe('host', () => {
    test('host has to be defined', () => {
      const manifest = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      delete (tabExtension as any).host;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host section is missing.');
    });

    test('host.url - only url should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      tabExtension.host.url = 'BANANAS';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host url is invalid. Value: BANANAS');
    });

    test('host.url - tokenized url should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      tabExtension.host.url = 'https://tokenizedurl.com/?uid={usr.id}';
      var issues = validate(manifest);
      expect(issues.length).toBe(0);
    });

    test('host.icon - only url should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      tabExtension.host.icon = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Host icon definition is invalid url. Value: bananas'
      );
    });

    test('only valid type should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      tabExtension.type = 'BANANAS' as any;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host type  is invalid. Value: BANANAS');
    });

    test('host.notificationUrl - is optional property', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      delete tabExtension.host.notificationsUrl;
      var issues = validate(manifest);
      expect(issues.length).toBe(0);
    });

    test('host.notificationUrl - can be defined on addons other then left side menu extensions', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      tabExtension.type = TabExtensionType.ACCOUNT;
      tabExtension.host.notificationsUrl = 'https://someurl.com/endpoint';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Notifications url can be defined only for application tab extension. Type: tab-account'
      );
    });

    test('host.notificationUrl - only url should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      tabExtension.type = TabExtensionType.APPLICATION;
      tabExtension.host.notificationsUrl = 'bananas';
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Notifications url definition is invalid url. Value: bananas'
      );
    });

    test('host.notificationUrl - tokenized url should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as TabExtension;
      tabExtension.host.notificationsUrl =
        'https://tokenizedurl.com/{usr.id}?uid={usr.id}';
      var issues = validate(manifest);
      expect(issues.length).toBe(0);
    });
  });

  describe('categories', () => {
    test('no categories section is not acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      delete manifest.app.categories;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Categories section is missing');
    });
    test('empty categories section is not acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.app.categories = [];
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'There are no categories selected for addon. Value: '
      );
    });
  });

  describe('context', () => {
    test('only valid application contexts should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[0] as ApplicationTabExtension;
      tabExtension.context = [
        'bananas',
        UserContextKeys.ID,
        OpportunityContextKeys.ID,
        ,
        'apples',
      ] as any;

      var issues = validate(manifest);
      expect(issues.length).toBe(3);
      expect(issues[0]).toBe(
        'Context key is not one of the valid values for the application tab extension. Key: bananas'
      );
      expect(issues[1]).toBe(
        'Context key is not one of the valid values for the application tab extension. Key: opp.id'
      );
      expect(issues[2]).toBe(
        'Context key is not one of the valid values for the application tab extension. Key: apples'
      );
    });

    test('only valid opportunity contexts should be acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      const tabExtension = manifest.extensions[1] as OpportunityTabExtension;
      tabExtension.context = [
        'bananas',
        UserContextKeys.ID,
        ProspectContextKeys.ID,
        ,
        'apples',
      ] as any;

      var issues = validate(manifest);
      expect(issues.length).toBe(3);
      expect(issues[0]).toBe(
        'Context key is not one of the valid values for the opportunity tab extension. Key: bananas'
      );
      expect(issues[1]).toBe(
        'Context key is not one of the valid values for the opportunity tab extension. Key: pro.id'
      );
      expect(issues[2]).toBe(
        'Context key is not one of the valid values for the opportunity tab extension. Key: apples'
      );
    });
  });

  describe('medias', () => {
    test('no medias section is acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      delete manifest.app.medias;
      var issues = validate(manifest);
      expect(issues.length).toBe(0);
    });

    test('no medias section is acceptable', () => {
      const manifest: Application = getNewValidApplicationManifest();
      manifest.app.medias = 'invalid-media-value' as any;
      var issues = validate(manifest);
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Medias section value is not a valid array. Value: invalid-media-value'
      );
    });

    describe('Invalid media file info is not acceptable', () => {
      test('No uri', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.app.medias = [
          {
            index: 0,
            title: 'Some title',
            type: 'image',
          } as any,
        ];
        var issues = validate(manifest);
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Uri value is missing');
      });

      test('Uri not a valid url', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.app.medias = [
          {
            title: 'Some title',
            type: 'image',
            uri: 'not-a-valid-url',
          },
        ];
        var issues = validate(manifest);
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe(
          'Uri value is not a valid url. Value: not-a-valid-url'
        );
      });

      test('Title is missing', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.app.medias = [
          {
            index: 0,
            type: 'image',
            uri: 'https://www.site.com/image.png',
          } as any,
        ];
        var issues = validate(manifest);

        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Title value is missing');
      });

      test('Type is missing', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.app.medias = [
          {
            index: 0,
            title: 'Some title',
            uri: 'https://www.site.com/image.png',
          } as any,
        ];
        var issues = validate(manifest);

        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Type value is missing');
      });

      test('Type is invalid', () => {
        const manifest: Application = getNewValidApplicationManifest();
        manifest.app.medias = [
          {
            index: 0,
            title: 'Some title',
            type: 'invalid-type',
            uri: 'https://www.site.com/image.png',
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
      manifest.app.store = 'BANANAS' as any;
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
  opportunityTabExtension.environment = {
    fullWidth: false,
    decoration: 'none',
  };
  opportunityTabExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };
  opportunityTabExtension.version = '0.99';
  opportunityTabExtension.context = [
    UserContextKeys.ID,
    OpportunityContextKeys.ID,
  ];

  const appTabExtension = new ApplicationTabExtension();
  appTabExtension.identifier = 'app-tabaddon';
  appTabExtension.environment = {
    fullWidth: false,
    decoration: 'none',
  };
  appTabExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };
  appTabExtension.version = '0.98';
  appTabExtension.context = [UserContextKeys.ID];

  const application = new Application();
  application.app = {
    author: {
      email: 'author@someurl.com',
      company: 'Acme ltd',
      privacyUrl: 'https://someurl.com/privacy',
      termsOfUseUrl: 'https://someurl.com/tos',
      websiteUrl: 'https://someurl.com/',
    },
    categories: [Category.ACCOUNT_BASED_MARKETING],
    medias: [
      {
        uri: 'https://someurl.com/image.png',
        title: 'Our awesome extension',
        type: 'image',
      },
      {
        uri: 'https://youtube.com/some_video',
        title: 'Our awesome animation',
        type: 'video',
      },
    ],
    headline: {
      en: 'Some headline (en)',
    },
    description: {
      en: 'Some description (en)',
    },
    identifier: 'app-identifier',
    icon: 'https://someurl.com/icon',
    locales: [Locale.ENGLISH],
    store: Store.PRIVATE,
    title: {
      en: 'Some title (en)',
    },
    version: '0.10',
  };

  application.api = {
    scopes: [Scopes.ACCOUNTS_ALL, Scopes.CALLS_ALL],
    applicationId: 'AbCd123456qW',
    redirectUri: 'https://addon-host.com/hello-world',
    token: 'https://someurl.com/token',
    connect: 'https://someurl.com/connect',
  };

  application.extensions = [appTabExtension, opportunityTabExtension];

  return application;
};
