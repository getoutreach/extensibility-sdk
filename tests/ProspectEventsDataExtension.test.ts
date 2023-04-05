import { UserContextKeys } from '../src';
import { ProspectEventsDataExtension } from '../src/manifest/extensions/data/ProspectEventsDataExtension';

describe('ProspectEventsDataExtension', () => {
  test('only valid type should be acceptable', () => {
    const ext = getValidExtension();
    ext.type = 'BANANAS' as any;
    var issues = ext.validate();
    expect(issues.length).toBe(1);
    expect(issues[0]).toBe('Host type is invalid. Value: BANANAS');
  });

  describe('host', () => {
    test('host has to be defined', () => {
      const ext = getValidExtension();
      delete (ext as any).host;
      var issues = ext.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host section is missing.');
    });

    describe('host.icon', () => {
      test('has to be defined', () => {
        const ext = getValidExtension();
        delete (ext.host as any).icon;
        var issues = ext.validate();
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Host icon definition is missing');
      });
      test('only url should be acceptable', () => {
        const ext = getValidExtension();
        ext.host.icon = 'BANANAS';
        var issues = ext.validate();
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Host icon definition is invalid. Value: BANANAS');
      });
    });

    test('name to be defined', () => {
      const ext = getValidExtension();
      delete (ext as any).title;
      var issues = ext.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('title definition is missing');
    });

    describe('template', () => {
      test('has to be defined', () => {
        const ext = getValidExtension();
        delete (ext as any).template;
        var issues = ext.validate();
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Template definition is missing');
      });

      test('prospect token is supported', () => {
        const ext = getValidExtension();
        var issues = ext.validate();
        expect(issues.length).toBe(0);
      });

      test('user token is supported', () => {
        const ext = getValidExtension();
        ext.template.en = 'Template text for {{user}}';
        var issues = ext.validate();
        expect(issues.length).toBe(0);
      });

      test('other tokens are not supported', () => {
        const ext = getValidExtension();
        ext.template.en = 'Template text for {{unknown}}';
        var issues = ext.validate();
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Unsupported token: {{unknown}}');
      });
    });

    describe('context', () => {
      test('section is missing', () => {
        const ext = getValidExtension();
        delete (ext as any).context;
        var issues = ext.validate();
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Context section is missing');
      });

      test('section is not an array', () => {
        const ext = getValidExtension();
        (ext as any).context = 'BANANAS';
        var issues = ext.validate();
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Context section is not an array. Value: BANANAS');
      });

      test('no context properties should be acceptable', () => {
        const ext = getValidExtension();
        ext.context = [UserContextKeys.ID] as any;

        var issues = ext.validate();
        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Prospect events data extension context properties are not supported');
      });
    });
  });
});

const getValidExtension = (): ProspectEventsDataExtension => {
  var ext = new ProspectEventsDataExtension();
  ext.identifier = 'data-mail-links';
  ext.template = { en: '' };
  ext.title = { en: '' };
  ext.host = {
    icon: 'http://someurl.com/host',
  };
  ext.context = [];

  return ext;
};
