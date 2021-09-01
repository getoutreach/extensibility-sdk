import {
  ManifestHost,
  OpportunityContext,
  OutreachContext,
  TabExtension,
  UserContext,
} from '../src';

describe('TabExtension tests', () => {
  test('init will unpack host url', () => {
    const context = new OutreachContext();
    context.user = {
      id: 'usr-id-123',
    } as UserContext;

    context.opportunity = {
      id: 'opp-id-123',
    } as OpportunityContext;

    const tabExtension = new TabExtension();
    tabExtension.host = {
      url: 'https://app-host.com/{opp.id}?usr={usr.id}',
    } as ManifestHost;
    tabExtension.init(context);

    expect(tabExtension.host.url).toBe(
      'https://app-host.com/opp-id-123?usr=usr-id-123'
    );
  });

  test('init will unpack notification url', () => {
    const context = new OutreachContext();
    context.user = {
      id: 'usr-id-123',
    } as UserContext;

    context.opportunity = {
      id: 'opp-id-123',
    } as OpportunityContext;

    const tabExtension = new TabExtension();
    tabExtension.host = {
      notificationsUrl: 'https://app-host.com/{opp.id}?usr={usr.id}',
    } as ManifestHost;
    tabExtension.init(context);

    expect(tabExtension.host.notificationsUrl).toBe(
      'https://app-host.com/opp-id-123?usr=usr-id-123'
    );
  });
});
