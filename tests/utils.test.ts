import { ContextParam } from '../src/context/host/ContextParam';
import { OpportunityContextKeys } from '../src/context/keys/OpportunityContextKeys';
import { UserContextKeys } from '../src/context/keys/UserContextKeys';
import { LocalizedString } from '../src/manifest/store/LocalizedString';
import { Locale } from '../src/sdk/Locale';
import { utils } from '../src/utils';

const usrIdParam = { key: UserContextKeys.ID, value: 'uid-123' };
const oppIdParam = { key: OpportunityContextKeys.ID, value: '112233' };
const queryParams: ContextParam[] = [usrIdParam, oppIdParam];

describe('tokenizer tests', () => {
  test('untokenized url', () => {
    const url = 'https://someurl.com/test';
    const result = utils.tokenizeUrl(url, queryParams);
    expect(result.url).toBe(url);
    expect(result.params).toBe(queryParams);
  });

  describe('full tokenization', () => {
    test('all params known - routes', () => {
      const url = 'https://someurl.com/{usr.id}/something/{opp.id}';
      const result = utils.tokenizeUrl(url, queryParams);
      expect(result.url).toEqual('https://someurl.com/uid-123/something/112233');
      expect(result.params).toEqual([]);
    });

    test('all params known - params', () => {
      const url = 'https://someurl.com/something?oid={opp.id}&uid={usr.id}';
      const result = utils.tokenizeUrl(url, queryParams);
      expect(result.url).toEqual('https://someurl.com/something?oid=112233&uid=uid-123');
      expect(result.params).toEqual([]);
    });

    test('all params known - routes and params', () => {
      const url = 'https://someurl.com/{usr.id}/something?oid={opp.id}';
      const result = utils.tokenizeUrl(url, queryParams);
      expect(result.url).toEqual('https://someurl.com/uid-123/something?oid=112233');
      expect(result.params).toEqual([]);
    });
  });

  describe('partial tokenization', () => {
    test('some params known - routes', () => {
      const url = 'https://someurl.com/{usr.id}/something/{abc.id}';
      const result = utils.tokenizeUrl(url, queryParams);
      expect(result.url).toEqual('https://someurl.com/uid-123/something/{abc.id}');
      expect(result.params).toEqual([oppIdParam]);
    });

    test('some params known - params', () => {
      const url = 'https://someurl.com/something?oid={opp.id}&uid={abc.id}';
      const result = utils.tokenizeUrl(url, queryParams);
      expect(result.url).toEqual('https://someurl.com/something?oid=112233&uid={abc.id}');
      expect(result.params).toEqual([usrIdParam]);
    });
  });
});

describe('parmeterization tests', () => {
  test('all the params are added as url params', () => {
    const url = 'https://someurl.com/test';
    const result = utils.parameterizeUrl(url, queryParams);
    expect(result).toBe('https://someurl.com/test?usr.id=uid-123&opp.id=112233');
  });

  test('parametarization preserves fragment', () => {
    const url = 'https://someurl.com/webapp/index_dev.html?hc_reset#/Account/159978';
    const result = utils.parameterizeUrl(url, queryParams);
    expect(result).toBe(
      'https://someurl.com/webapp/index_dev.html?hc_reset&usr.id=uid-123&opp.id=112233#/Account/159978'
    );
  });
});

describe('getUrlDomain tests', () => {
  test('url without the port will be stripped to domain', () => {
    const url = new URL('https://someurl.com/test');
    const result = utils.getUrlDomain(url);
    expect(result).toBe('https://someurl.com');
  });

  test('url with the 443 port will be stripped to domain', () => {
    const url = new URL('https://someurl.com:443/test');
    const result = utils.getUrlDomain(url);
    expect(result).toBe('https://someurl.com');
  });

  test('url with the custom port will be stripped to domain', () => {
    const url = new URL('https://someurl.com:123/test');
    const result = utils.getUrlDomain(url);
    expect(result).toBe('https://someurl.com:123');
  });
});

describe('getLocalizedString tests', () => {
  test('will return exact string when possible', () => {
    const localizedString: LocalizedString = {
      en: 'ENGLISH',
      'fr-FR': 'FRENCH',
    };

    expect(utils.getLocalizedString(localizedString, Locale.FRENCH)).toBe('FRENCH');
  });

  test('will return english us string when available even when english is requested as english is deprecated', () => {
    const localizedString: LocalizedString = {
      en: 'ENGLISH',
      'en-US': 'ENGLISH_US',
    };

    expect(utils.getLocalizedString(localizedString, Locale.ENGLISH)).toBe('ENGLISH_US');
  });

  test('will default to english_US string when exact locale not available', () => {
    const localizedString: LocalizedString = {
      en: 'ENGLISH',
      'en-US': 'ENGLISH_US',
    };

    expect(utils.getLocalizedString(localizedString, Locale.FRENCH)).toBe('ENGLISH_US');
  });

  test('will default to english when english us not available', () => {
    const localizedString: LocalizedString = {
      en: 'ENGLISH',
    };

    expect(utils.getLocalizedString(localizedString, Locale.FRENCH)).toBe('ENGLISH');
  });
});
