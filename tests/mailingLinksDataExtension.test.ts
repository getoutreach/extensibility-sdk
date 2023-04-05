import { MailingLinksDataExtension } from '../src/manifest/extensions/data/MailingLinksDataExtension';

describe('MailingLinksDataExtension', () => {
  describe('host', () => {
    test('host has to be defined', () => {
      const ext = getValidExtension();
      delete (ext as any).host;
      var issues = ext.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host section is missing.');
    });

    test('host.url - has to be defined', () => {
      const ext = getValidExtension();
      delete (ext.host as any).url;
      var issues = ext.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host url definition is missing.');
    });

    test('host.url - only url should be acceptable', () => {
      const ext = getValidExtension();
      ext.host.url = 'BANANAS';
      var issues = ext.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host url is invalid. Value: BANANAS');
    });

    test('only valid type should be acceptable', () => {
      const ext = getValidExtension();
      ext.type = 'BANANAS' as any;
      var issues = ext.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host type is invalid. Value: BANANAS');
    });
  });
});

const getValidExtension = (): MailingLinksDataExtension => {
  var ext = new MailingLinksDataExtension();
  ext.identifier = 'data-mail-links';
  ext.host = {
    url: 'http://someurl.com/host',
  };
  ext.context = [];

  return ext;
};
