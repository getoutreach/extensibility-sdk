import {
  isDecorationMessage,
  isEnvironmentMessage,
  isNavigationMessage,
  isNotificationMessage,
} from '../src/sdk/messages/MessageGuards';
import { MessageType } from '../src/sdk/messages/MessageType';

describe('Message Guard Tests', () => {
  describe('Decoration message', () => {
    test('Valid message will be accepted', () => {
      const msg = {
        type: MessageType.REQUEST_DECORATION_UPDATE,
        value: '1',
      };

      expect(isDecorationMessage(msg)).toBe(true);
    });

    test('Invalid type  message will be rejected', () => {
      const msg = {
        type: 'NOT VALID',
        value: '1',
      };

      expect(isDecorationMessage(msg)).toBe(false);
    });

    test('Missing value prop will be rejected', () => {
      const msg = {
        type: MessageType.REQUEST_DECORATION_UPDATE,
      };

      expect(isDecorationMessage(msg)).toBe(false);
    });
  });

  describe('Environment message', () => {
    test('Valid decoration message will be accepted', () => {
      const msg = {
        type: MessageType.REQUEST_ENVIRONMENT_UPDATE,
        environment: {
          fullWidth: true,
        },
      };

      expect(isEnvironmentMessage(msg)).toBe(true);
    });

    test('Invalid type decoration message will be rejected', () => {
      const msg = {
        type: 'NOT VALID',
        environment: {
          fullWidth: true,
        },
      };

      expect(isEnvironmentMessage(msg)).toBe(false);
    });

    test('Missing environment prop will be rejected', () => {
      const msg = {
        type: MessageType.REQUEST_ENVIRONMENT_UPDATE,
      };

      expect(isEnvironmentMessage(msg)).toBe(false);
    });
  });

  describe('Navigation message', () => {
    test('Valid message will be accepted', () => {
      const msg = {
        type: MessageType.REQUEST_NAVIGATE,
        destination: 'prospect',
      };

      expect(isNavigationMessage(msg)).toBe(true);
    });

    test('Invalid type message will be rejected', () => {
      const msg = {
        type: 'NOT VALID',
        destination: 'prospect',
      };

      expect(isNavigationMessage(msg)).toBe(false);
    });

    test('Missing destination prop will be rejected', () => {
      const msg = {
        type: MessageType.REQUEST_NAVIGATE,
      };

      expect(isNavigationMessage(msg)).toBe(false);
    });
  });

  describe('Notification message', () => {
    test('Valid message will be accepted', () => {
      const msg = {
        type: MessageType.REQUEST_NOTIFY,
        notificationText: '123',
        notificationType: 'success',
      };

      expect(isNotificationMessage(msg)).toBe(true);
    });

    test('Invalid type message will be rejected', () => {
      const msg = {
        type: 'NOT VALID',
        notificationText: '123',
        notificationType: 'success',
      };

      expect(isNotificationMessage(msg)).toBe(false);
    });

    test('Missing notificationText prop will be rejected', () => {
      const msg = {
        type: MessageType.REQUEST_NOTIFY,
        notificationType: 'success',
      };

      expect(isNotificationMessage(msg)).toBe(false);
    });

    test('Missing notificationType prop will be rejected', () => {
      const msg = {
        type: MessageType.REQUEST_NOTIFY,
        notificationText: '123',
      };

      expect(isNotificationMessage(msg)).toBe(false);
    });
  });
});
