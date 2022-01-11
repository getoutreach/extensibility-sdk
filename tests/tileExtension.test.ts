import { ProspectContext } from '../src/context/host/ProspectContext';
import { UserContext } from '../src/context/host/UserContext';
import { OpportunityContextKeys } from '../src/context/keys/OpportunityContextKeys';
import { ProspectContextKeys } from '../src/context/keys/ProspectContextKeys';
import { UserContextKeys } from '../src/context/keys/UserContextKeys';
import { OutreachContext } from '../src/context/OutreachContext';
import { TileExtension } from '../src/manifest/extensions/tiles/TileExtension';
import { ProspectTileExtension } from '../src/manifest/extensions/tiles/types/ProspectTileExtension';

describe('Tile extension init tests', () => {
  test('init will tokenize host url', () => {
    const tileExtension = getValidProspectTileExtension();
    tileExtension.host.url = 'https://app-host.com/{pro.id}?usr={usr.id}';
    tileExtension.init(getOutreachContext());

    expect(tileExtension.host.url).toBe(
      'https://app-host.com/pro-id-123?usr=usr-id-123'
    );
  });
});

describe('TileExension validate tests', () => {
  describe('host', () => {
    test('host has to be defined', () => {
      const tileExtension = getValidProspectTileExtension();
      delete (tileExtension as any).host;
      var issues = tileExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host section is missing.');
    });

    test('host.url - only url should be acceptable', () => {
      const tileExtension = getValidProspectTileExtension();
      tileExtension.host.url = 'BANANAS';
      var issues = tileExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host url is invalid. Value: BANANAS');
    });

    test('host.url - tokenized url should be acceptable', () => {
      const tileExtension = getValidProspectTileExtension();
      tileExtension.host.url = 'https://tokenizedurl.com/?uid={usr.id}';
      var issues = tileExtension.validate();
      expect(issues.length).toBe(0);
    });

    test('host.url - missing is acceptable if template is there', () => {
      const tileExtension = getValidProspectTileExtension();
      delete tileExtension.host.url;
      tileExtension.host.template = 'some template';

      var issues = tileExtension.validate();
      expect(issues.length).toBe(0);
    });

    test('host.url - missing is not acceptable', () => {
      const tileExtension = getValidProspectTileExtension();
      delete tileExtension.host.url;
      delete tileExtension.host.template;

      var issues = tileExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host definition is missing url/template value.');
    });

    test('host.icon - only url should be acceptable', () => {
      const tileExtension = getValidProspectTileExtension();
      tileExtension.host.icon = 'bananas';
      var issues = tileExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe(
        'Host icon definition is invalid url. Value: bananas'
      );
    });

    test('only valid type should be acceptable', () => {
      const tileExtension = getValidProspectTileExtension() as TileExtension;
      tileExtension.type = 'BANANAS' as any;
      var issues = tileExtension.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host type  is invalid. Value: BANANAS');
    });
  });

  describe('context', () => {
    test('only valid prospect contexts should be acceptable', () => {
      const tileExtension = getValidProspectTileExtension();
      tileExtension.context = [
        'bananas',
        UserContextKeys.ID,
        OpportunityContextKeys.ID,
        ,
        'apples',
      ] as any;

      var issues = tileExtension.validate();
      expect(issues.length).toBe(3);
      expect(issues[0]).toBe(
        'Context key is not one of the valid values for the prospect tile extension. Key: bananas'
      );
      expect(issues[1]).toBe(
        'Context key is not one of the valid values for the prospect tile extension. Key: opp.id'
      );
      expect(issues[2]).toBe(
        'Context key is not one of the valid values for the prospect tile extension. Key: apples'
      );
    });
  });

  describe('settings', () => {
    test('are optional', () => {
      const tileExtension = getValidProspectTileExtension();
      delete tileExtension.settings;
    });
  });
});

const getOutreachContext = () => {
  const context = new OutreachContext();
  context.prospect = new ProspectContext();
  context.prospect.id = 'pro-id-123';

  context.user = new UserContext();
  context.user.id = 'usr-id-123';

  return context;
};
const getValidProspectTileExtension = (): ProspectTileExtension => {
  var tileExtension = new ProspectTileExtension();
  tileExtension.identifier = 'prospect-tile-addon';
  tileExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };
  tileExtension.version = '0.99';
  tileExtension.context = [UserContextKeys.ID, ProspectContextKeys.ID];
  tileExtension.settings = {
    recommended: [{ width: 2, height: 2 }],
  };

  return tileExtension;
};
