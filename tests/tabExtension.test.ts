import { OpportunityContext } from '../src/context/host/OpportunityContext';
import { UserContext } from '../src/context/host/UserContext';
import { OpportunityContextKeys } from '../src/context/keys/OpportunityContextKeys';
import { ProspectContextKeys } from '../src/context/keys/ProspectContextKeys';
import { UserContextKeys } from '../src/context/keys/UserContextKeys';
import { OutreachContext } from '../src/context/OutreachContext';
import { TabExtension } from '../src/manifest/extensions/tabs/TabExtension';
import { ApplicationTabExtension } from '../src/manifest/extensions/tabs/types/ApplicationTabExtension';
import { OpportunityTabExtension } from '../src/manifest/extensions/tabs/types/OpportunityTabExtension';

describe('TabExtension init tests', () => {
  test('init will tokenize host url', () => {
    const tabExtension = getValidOpportunityTabExtension();
    tabExtension.host.url = 'https://app-host.com/{opp.id}?usr={usr.id}';
    tabExtension.init(getOutreachContext());

    expect(tabExtension.host.url).toBe(
      'https://app-host.com/opp-id-123?usr=usr-id-123'
    );
  });

  test('init will tokenize notification url', () => {
    const tabExtension = getValidOpportunityTabExtension();
    tabExtension.host.notificationsUrl =
      'https://app-host.com/{opp.id}?usr={usr.id}';
    tabExtension.init(getOutreachContext());
    expect(tabExtension.host.notificationsUrl).toBe(
      'https://app-host.com/opp-id-123?usr=usr-id-123'
    );
  });
});

describe('TabExension validate tests', () => {
  test('title is optional', () => {
    const tabExtension = getValidOpportunityTabExtension();
    delete tabExtension.title;
    var issues = tabExtension.validate();
    expect(issues.length).toBe(0);
  });
  test('description is optional', () => {
    const tabExtension = getValidOpportunityTabExtension();
    delete tabExtension.description;
    var issues = tabExtension.validate();
    expect(issues.length).toBe(0);
  });

  describe('host', () => {
    test('host has to be defined', () => {
      const tabExtension = getValidOpportunityTabExtension();
      delete (tabExtension as any).host;
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host section is missing.');
    });

    test('host.url - only url should be acceptable', () => {
      const tabExtension = getValidOpportunityTabExtension();
      tabExtension.host.url = 'BANANAS';
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host url is invalid. Value: BANANAS');
    });

    test('host.url - tokenized url should be acceptable', () => {
      const tabExtension = getValidOpportunityTabExtension();
      tabExtension.host.url = 'https://tokenizedurl.com/?uid={usr.id}';
      var issues = tabExtension.validate();
      expect(issues.length).toBe(0);
    });

    test('host.icon - only url should be acceptable', () => {
      const tabExtension = getValidOpportunityTabExtension();
      tabExtension.host.icon = 'bananas';
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Host icon definition is invalid url. Value: bananas'
      );
    });

    test('only valid type should be acceptable', () => {
      const tabExtension = getValidOpportunityTabExtension() as TabExtension;
      tabExtension.type = 'BANANAS' as any;
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host type  is invalid. Value: BANANAS');
    });

    test('host.notificationUrl - is optional property', () => {
      const tabExtension = getValidOpportunityTabExtension();
      delete tabExtension.host.notificationsUrl;
      var issues = tabExtension.validate();
      expect(issues.length).toBe(0);
    });

    test('host.notificationUrl - can be defined on addons other then left side menu extensions', () => {
      const tabExtension = getValidOpportunityTabExtension();
      tabExtension.host.notificationsUrl = 'https://someurl.com/endpoint';
      var issues = tabExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Notifications url can be defined only for application tab extension. Type: tab-opportunity'
      );
    });

    test('host.notificationUrl - only url should be acceptable', () => {
      const tabExtension = getValidApplicationTabExtension();
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
      const tabExtension = getValidApplicationTabExtension();
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

    test('only valid opportunity contexts should be acceptable', () => {
      const tabExtension = getValidOpportunityTabExtension();
      tabExtension.context = [
        'bananas',
        UserContextKeys.ID,
        ProspectContextKeys.ID,
        ,
        'apples',
      ] as any;

      var issues = tabExtension.validate();
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
});

const getOutreachContext = () => {
  const context = new OutreachContext();
  context.opportunity = new OpportunityContext();
  context.opportunity.id = 'opp-id-123';

  context.user = new UserContext();
  context.user.id = 'usr-id-123';

  return context;
};
const getValidOpportunityTabExtension = (): OpportunityTabExtension => {
  var tabExtension = new OpportunityTabExtension();
  tabExtension.identifier = 'opportunity-tab-addon';
  tabExtension.environment = {
    fullWidth: false,
    decoration: 'none',
  };
  tabExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };
  tabExtension.version = '0.99';
  tabExtension.context = [UserContextKeys.ID, OpportunityContextKeys.ID];

  return tabExtension;
};

const getValidApplicationTabExtension = (): ApplicationTabExtension => {
  var tabExtension = new ApplicationTabExtension();
  tabExtension.identifier = 'app-tab-addon';
  tabExtension.environment = {
    fullWidth: false,
    decoration: 'none',
  };
  tabExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };
  tabExtension.version = '0.99';
  tabExtension.context = [UserContextKeys.ID];

  return tabExtension;
};
