import oauthService from '../src/sdk/services/oauthService';

jest.mock('../src/sdk/RuntimeContext', () => ({
  default: {
    authorizationHost: 'https://accounts.com',
    application: {
      api: {
        scopes: ['accounts.all'],
        redirectUris: ['https://addon-host.com/hello-world1', 'https://addon-host.com/hello-world2'],
        client: {
          id: 'AbCd123456qW',
        },
      },
    },
  },
}));

describe('OAuthService', () => {
  beforeEach(() => {
    global.window.open = jest.fn();
    (global.window as any).innerWidth = 640;
    (global.window as any).innerHeight = 480;
    (global.window as any).screenX = 0;
    (global.window as any).screenY = 0;
    (global.window as any).screen = {
      availWidth: 640,
      width: 640,
      height: 480,
    };
  });

  test('instantiates', () => {
    expect(oauthService).toBeDefined();
  });

  test('opens new window on auth', () => {
    oauthService.openPopup();

    expect(global.window.open).toBeCalledWith(
      'https://accounts.com/oauth/authorize?client_id=AbCd123456qW&redirect_uri=https%3A%2F%2Faddon-host.com%2Fhello-world1&response_type=code&scope=accounts.all',
      '_blank',
      'scrollbars=yes,width=800,height=600,top=-60,left=-80'
    );
  });

  test('opens new window on auth with appropriate redirect uri', () => {
    oauthService.openPopup('https://addon-host.com/hello-world2');

    expect(global.window.open).toBeCalledWith(
      'https://accounts.com/oauth/authorize?client_id=AbCd123456qW&redirect_uri=https%3A%2F%2Faddon-host.com%2Fhello-world2&response_type=code&scope=accounts.all',
      '_blank',
      'scrollbars=yes,width=800,height=600,top=-60,left=-80'
    );
  });

  test('appends state parameter when provided', () => {
    oauthService.openPopup('https://addon-host.com/hello-world2', 'test');

    expect(global.window.open).toBeCalledWith(
      'https://accounts.com/oauth/authorize?client_id=AbCd123456qW&redirect_uri=https%3A%2F%2Faddon-host.com%2Fhello-world2&response_type=code&scope=accounts.all&state=test',
      '_blank',
      'scrollbars=yes,width=800,height=600,top=-60,left=-80'
    );
  });

  test('fails with a redirect uri not from the list', () => {
    expect(() => {
      oauthService.openPopup('https://addon-host.com/hello-world3');
    }).toThrow();
  });
});
