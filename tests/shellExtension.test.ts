import { ApplicationShellExtension } from '../src/manifest/extensions/shell/types/ApplicationShellExtension';
import { OpportunityContext } from '../src/context/host/OpportunityContext';
import { UserContext } from '../src/context/host/UserContext';
import { OpportunityContextKeys } from '../src/context/keys/OpportunityContextKeys';
import { UserContextKeys } from '../src/context/keys/UserContextKeys';
import { OutreachContext } from '../src/context/OutreachContext';
import { ShellExtension } from '../src/manifest/extensions/shell/ShellExtension';

describe('ShellExtension init tests', () => {
  test('init will tokenize host url', () => {
    const tabExtension = getValidShellApplicationExtension();
    tabExtension.host.url = 'https://app-host.com/{opp.id}?usr={usr.id}';
    tabExtension.init(getOutreachContext());

    expect(tabExtension.host.url).toBe(
      'https://app-host.com/opp-id-123?usr=usr-id-123'
    );
  });

  test('init will tokenize notification url', () => {
    const tabExtension = getValidShellApplicationExtension();
    tabExtension.host.notificationsUrl =
      'https://app-host.com/{opp.id}?usr={usr.id}';
    tabExtension.init(getOutreachContext());
    expect(tabExtension.host.notificationsUrl).toBe(
      'https://app-host.com/opp-id-123?usr=usr-id-123'
    );
  });
});

describe('ShellExension validate tests', () => {
  test('title is optional', () => {
    const tabExtension = getValidShellApplicationExtension();
    delete tabExtension.title;
    var issues = tabExtension.validate();
    expect(issues.length).toBe(0);
  });

  describe('host', () => {
    test('host has to be defined', () => {
      const tabExtension = getValidShellApplicationExtension();
      delete (tabExtension as any).host;
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host section is missing.');
    });

    test('host.url - only url should be acceptable', () => {
      const tabExtension = getValidShellApplicationExtension();
      tabExtension.host.url = 'BANANAS';
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host url is invalid. Value: BANANAS');
    });

    test('host.url - tokenized url should be acceptable', () => {
      const tabExtension = getValidShellApplicationExtension();
      tabExtension.host.url = 'https://tokenizedurl.com/?uid={usr.id}';
      var issues = tabExtension.validate();
      expect(issues.length).toBe(0);
    });

    test('host.icon - only url should be acceptable', () => {
      const tabExtension = getValidShellApplicationExtension();
      tabExtension.host.icon = 'bananas';
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Host icon definition is invalid url. Value: bananas'
      );
    });

    test('only valid type should be acceptable', () => {
      const tabExtension =
        getValidShellApplicationExtension() as ShellExtension;
      tabExtension.type = 'BANANAS' as any;
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host type  is invalid. Value: BANANAS');
    });

    test('host.notificationUrl - is optional property', () => {
      const tabExtension = getValidShellApplicationExtension();
      delete tabExtension.host.notificationsUrl;
      var issues = tabExtension.validate();
      expect(issues.length).toBe(0);
    });

    test('host.notificationUrl - only url should be acceptable', () => {
      const tabExtension = getValidShellApplicationExtension();
      tabExtension.host.notificationsUrl = 'bananas';
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Notifications url definition is invalid url. Value: bananas'
      );
    });
  });

  describe('context', () => {
    test('only valid application contexts should be acceptable for applicatition tab', () => {
      const tabExtension = getValidShellApplicationExtension();
      tabExtension.context = [
        'bananas',
        UserContextKeys.ID,
        OpportunityContextKeys.ID,
        ,
        'apples',
      ] as any;

      var issues = tabExtension.validate();

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
  });
});

const getOutreachContext = () => {
  const context = new OutreachContext();
  context.opportunity = new OpportunityContext();
  context.opportunity.id = 'opp-id-123';

  context.user = new UserContext();
  context.user.id = 'usr-id-123';

  return context;
};

const getValidShellApplicationExtension = (): ApplicationShellExtension => {
  var shellAppExtension = new ApplicationShellExtension();
  shellAppExtension.identifier = 'app-tab-addon';
  shellAppExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
    decoration: 'none',
  };
  shellAppExtension.version = '0.99';
  shellAppExtension.context = [UserContextKeys.ID];

  return shellAppExtension;
};
