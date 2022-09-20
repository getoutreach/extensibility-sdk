import { ExtensibilitySdk, Message, OAuthDialogCompletedMessage } from '../src/index';
import runtime from '../src/sdk/RuntimeContext';
import oauthService from '../src/sdk/services/oauthService';

describe('sdk tests', () => {
  let sdk: ExtensibilitySdk;

  describe.only('receiving messages', () => {
    var messageHandler: EventListenerOrEventListenerObject;
    let originalEventListener: (event: string, handler: EventListenerOrEventListenerObject) => void;
    let originalOpenPopup: (redirectUri?: string, state?: { [key: string]: string }) => void;
    let originalTimeout: any;

    beforeEach(async () => {
      originalTimeout = window.setTimeout;
      window.setTimeout = jest.fn().mockImplementation(() => 123) as any;

      originalOpenPopup = oauthService.openPopup;
      oauthService.openPopup = jest.fn();

      originalEventListener = window.addEventListener;
      window.addEventListener = (event: string, handler: EventListenerOrEventListenerObject): void => {
        if (event === 'message') {
          messageHandler = handler;
        }
      };
      runtime.application = {
        api: {
          client: { id: '' },
          redirectUris: [],
          scopes: [],
        },
      } as any;
      runtime.origin = 'test.outreach.io';
      sdk = new ExtensibilitySdk();
      sdk.init();
    });

    afterEach(() => {
      window.setTimeout = originalTimeout;
      window.addEventListener = originalEventListener;
      oauthService.openPopup = originalOpenPopup;
      jest.restoreAllMocks();
    });

    it('will register message event listener', () => {
      expect(messageHandler).not.toBeUndefined();
    });

    describe('OAUTH_DIALOG_COMPLETED', () => {
      let authPromise: Promise<string | null>;
      beforeEach(() => {
        authPromise = sdk.authenticate();
      });

      it('will resolve auth promise when success', async () => {
        var message = new OAuthDialogCompletedMessage();
        message.result = '200';
        handleMessage(message);

        await expect(authPromise).resolves.toBe('200');
      });

      it('will reject auth promise when success', async () => {
        var message = new OAuthDialogCompletedMessage();
        message.result = '401';
        handleMessage(message);

        await expect(authPromise).rejects.toEqual({ message: undefined, result: '401' });
      });
    });

    const handleMessage = (message: Message) => {
      const eventMessage: any = {
        data: JSON.stringify(message),
        origin: 'test.outreach.io',
      };

      if (handlerEventListenerObject(messageHandler)) {
        messageHandler.handleEvent(eventMessage);
      } else {
        messageHandler(eventMessage);
      }
    };
  });
});

function handlerEventListenerObject(
  messageHandler: EventListenerOrEventListenerObject
): messageHandler is EventListenerObject {
  return typeof messageHandler !== 'function';
}
