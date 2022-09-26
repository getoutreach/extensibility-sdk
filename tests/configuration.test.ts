import { ConfigurationItem, ManifestConfiguration } from '../src';

describe('configuration', () => {
  describe('defined as array of config items', () => {
    let config: ManifestConfiguration;
    beforeEach(() => {
      config = new ManifestConfiguration();

      const configItemOne = new ConfigurationItem();
      configItemOne.key = 'cfg-1';
      configItemOne.text = { en: 'txt-1' };
      configItemOne.defaultValue = 'def-val-1';

      const configItemTwo = new ConfigurationItem();
      configItemTwo.key = 'cfg-2';
      configItemTwo.text = { en: 'txt-2' };
      configItemTwo.defaultValue = 'def-val-2';

      config.items = [];
      config.items.push(configItemOne);
      config.items.push(configItemTwo);
    });

    it('can be defined as a set of config items', () => {
      if (config.items == null) {
        throw new Error('Config items were undefined');
      }

      expect(config.items.length).toBe(2);
      expect(config.items[0].key).toBe('cfg-1');
      expect(config.items[0].text).toStrictEqual({ en: 'txt-1' });
      expect(config.items[0].defaultValue).toEqual('def-val-1');
      expect(config.items[1].key).toBe('cfg-2');
      expect(config.items[1].text).toStrictEqual({ en: 'txt-2' });
      expect(config.items[1].defaultValue).toBe('def-val-2');
    });

    it('can be serialized/deserialized', () => {
      var deserializedConfig: ManifestConfiguration = JSON.parse(JSON.stringify(config));

      if (deserializedConfig.items == null) {
        throw new Error('Config items were undefined');
      }
      expect(deserializedConfig.items.length).toBe(2);
      expect(deserializedConfig.items[0].key).toBe('cfg-1');
      expect(deserializedConfig.items[0].text).toStrictEqual({ en: 'txt-1' });
      expect(deserializedConfig.items[0].defaultValue).toEqual('def-val-1');
      expect(deserializedConfig.items[1].key).toBe('cfg-2');
      expect(deserializedConfig.items[1].text).toStrictEqual({ en: 'txt-2' });
      expect(deserializedConfig.items[1].defaultValue).toBe('def-val-2');
    });
  });

  describe('defined as external url', () => {
    let config: ManifestConfiguration;
    beforeEach(() => {
      config = new ManifestConfiguration();
      config.externalUrl = 'https://someurl.com/test';
    });

    it('can be used through SDK api ', () => {
      expect(config.items).toBe(undefined);
      expect(config.externalUrl).toEqual('https://someurl.com/test');
    });

    it('can be serialized/deserialized', () => {
      const serializedString = JSON.stringify(config);

      var deserializedConfig: ManifestConfiguration = JSON.parse(serializedString);

      expect(deserializedConfig.items).toBe(undefined);
      expect(deserializedConfig.externalUrl).toEqual('https://someurl.com/test');
    });
  });
});
