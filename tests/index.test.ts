import {
  Application,
  EmailContextKeys,
  ExtensibilitySdk,
  InitMessage,
  ManifestStore,
  Message,
  OAuthDialogCompletedMessage,
  UserContextKeys,
} from '../src/index';
import runtime, { RuntimeContext } from '../src/sdk/RuntimeContext';
import oauthService from '../src/sdk/services/oauthService';

describe('sdk tests', () => {
  let sdk: ExtensibilitySdk;

  describe('receiving messages', () => {
    var messageHandler: EventListenerOrEventListenerObject;
    let originalEventListener: (event: string, handler: EventListenerOrEventListenerObject) => void;
    let originalOpenPopup: (redirectUri?: string, state?: { [key: string]: string }) => void;
    let originalTimeout: any;
    let originalClearTimeout: any;
    let originalRuntime: RuntimeContext;

    beforeEach(async () => {
      originalTimeout = window.setTimeout;
      originalClearTimeout = window.clearTimeout;
      window.setTimeout = jest.fn().mockImplementation(() => 123) as any;
      window.clearTimeout = jest.fn().mockImplementation() as any;

      originalOpenPopup = oauthService.openPopup;
      oauthService.openPopup = jest.fn();

      originalEventListener = window.addEventListener;
      window.addEventListener = (event: string, handler: EventListenerOrEventListenerObject): void => {
        if (event === 'message') {
          messageHandler = handler;
        } else {
          throw new Error('Event:' + event + ' is not supported.');
        }
      };

      originalRuntime = runtime;
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
      runtime.application = originalRuntime.application;
      runtime.origin = originalRuntime.origin;

      window.clearTimeout = originalClearTimeout;
      window.setTimeout = originalTimeout;
      window.addEventListener = originalEventListener;
      oauthService.openPopup = originalOpenPopup;
      jest.restoreAllMocks();
    });

    describe('Outreachcontext initialized', () => {
      it('will resolve context promise when success', async () => {
        var message = new InitMessage();
        message.result = '200';
        message.application = new Application();
        message.application.store = new ManifestStore();
        message.context = [
          { key: UserContextKeys.ID, value: '1' },
          {
            key: EmailContextKeys.TO,
            value: '[{"email":"test@user.com","name":"Test User"}]',
          },
          { key: EmailContextKeys.SUBJECT, value: 'Test Subject' },
        ];

        handleMessage(message);

        const outreachContext = await sdk.init();

        expect(outreachContext?.user?.id).toBe('1');
        expect(outreachContext?.email?.to).toEqual([{ email: 'test@user.com', name: 'Test User' }]);
        expect(outreachContext?.email?.subject).toEqual('Test Subject');
      });
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

      if (typeof messageHandler !== 'function') {
        messageHandler.handleEvent(eventMessage);
      } else {
        messageHandler(eventMessage);
      }
    };
  });
});
