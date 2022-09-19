import { ExtensibilitySdk, Message, OAuthDialogCompletedMessage } from '../src/index';
import runtime from '../src/sdk/RuntimeContext';
import oauthService from '../src/sdk/services/oauthService';

describe('sdk tests', () => {
  let sdk: ExtensibilitySdk;

  describe('receiving messages', () => {
    var messageHandler: EventListenerOrEventListenerObject;
    let originalEventListener: (event: string, handler: EventListenerOrEventListenerObject) => void;
    let originalOpenPopup: (redirectUri?: string, state?: { [key: string]: string }) => void;

    beforeEach(() => {
      originalOpenPopup = oauthService.openPopup;
      oauthService.openPopup = jest.fn();

      originalEventListener = window.addEventListener;
      window.addEventListener = (event: string, handler: EventListenerOrEventListenerObject): void => {
        if (event === 'message') {
          messageHandler = handler;
        }
      };

      sdk = new ExtensibilitySdk();
      runtime.application = {
        api: {
          client: { id: '' },
          redirectUris: [],
          scopes: [],
        },
      } as any;
      runtime.origin = 'test.outreach.io';
      sdk.init();
    });

    afterEach(() => {
      window.addEventListener = originalEventListener;
      oauthService.openPopup = originalOpenPopup;
    });

    it('will register message event listener', () => {
      expect(messageHandler).not.toBeUndefined();
    });

    describe('OAUTH_DIALOG_COMPLETED', () => {
      let authPromise: Promise<string | null>;
      beforeEach(() => {
        authPromise = sdk.authenticate();
      });

      it('will resolve auth promise when success', () => {
        var message = new OAuthDialogCompletedMessage();
        message.result = '200';
        handleMessage(message);

        expect(authPromise).resolves.toBe('200');
      });

      it('will reject auth promise when success', () => {
        var message = new OAuthDialogCompletedMessage();
        message.result = '401';
        handleMessage(message);

        expect(authPromise).rejects.toBe({ message: undefined, result: '401' });
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
