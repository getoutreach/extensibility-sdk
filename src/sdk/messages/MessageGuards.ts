import { EnhanceTextEditorMessage } from './EnhanceTextEditorMessage';
import { EnvironmentMessage } from './EnvironmentMessage';
import { MessageType } from './MessageType';
import { NavigationMessage } from './NavigationMessage';
import { NotificationMessage } from './NotificationMessage';
import { ReadyMessage } from './ReadyMessage';

export const isEnvironmentMessage = (messageInfo: any): messageInfo is EnvironmentMessage => {
  if (!Object.prototype.hasOwnProperty.call(messageInfo, 'type') || typeof messageInfo.type !== 'string') {
    return false;
  }

  if (messageInfo.type !== MessageType.REQUEST_ENVIRONMENT_UPDATE) {
    return false;
  }

  if (
    !Object.prototype.hasOwnProperty.call(messageInfo, 'environment') ||
    typeof messageInfo.environment !== 'object'
  ) {
    return false;
  }

  return true;
};

export const isNavigationMessage = (messageInfo: any): messageInfo is NavigationMessage => {
  if (!Object.prototype.hasOwnProperty.call(messageInfo, 'type') || typeof messageInfo.type !== 'string') {
    return false;
  }

  if (messageInfo.type !== MessageType.REQUEST_NAVIGATE) {
    return false;
  }

  if (
    !Object.prototype.hasOwnProperty.call(messageInfo, 'destination') ||
    typeof messageInfo.destination !== 'string'
  ) {
    return false;
  }

  return true;
};

export const isNotificationMessage = (messageInfo: any): messageInfo is NotificationMessage => {
  if (!Object.prototype.hasOwnProperty.call(messageInfo, 'type') || typeof messageInfo.type !== 'string') {
    return false;
  }

  if (messageInfo.type !== MessageType.REQUEST_NOTIFY) {
    return false;
  }

  if (
    !Object.prototype.hasOwnProperty.call(messageInfo, 'notificationText') ||
    typeof messageInfo.notificationText !== 'string'
  ) {
    return false;
  }

  if (
    !Object.prototype.hasOwnProperty.call(messageInfo, 'notificationType') ||
    typeof messageInfo.notificationType !== 'string'
  ) {
    return false;
  }

  return true;
};

export const isReadyMessage = (messageInfo: any): messageInfo is ReadyMessage => {
  if (!Object.prototype.hasOwnProperty.call(messageInfo, 'type') || typeof messageInfo.type !== 'string') {
    return false;
  }

  if (messageInfo.type !== MessageType.READY) {
    return false;
  }

  return true;
};

export const isTextEditorEnhancementMessage = (messageInfo: any): messageInfo is EnhanceTextEditorMessage => {
  if (!Object.prototype.hasOwnProperty.call(messageInfo, 'type') || typeof messageInfo.type !== 'string') {
    return false;
  }

  if (messageInfo.type !== MessageType.ENHANCE_TEXT_EDITOR) {
    return false;
  }

  if (!Object.prototype.hasOwnProperty.call(messageInfo, 'html') || typeof messageInfo.html !== 'string') {
    return false;
  }

  return true;
};

export const isLegacyGalaxyAppPostMessage = (
  message: any
): message is {
  html?: string;
  subject?: string;
} => {
  return Object.prototype.hasOwnProperty.call(message, 'html') && (typeof message.html === 'string' || !message.html);
};
/**
 * Legacy Galaxy addons are sending empty event data when requesting a popup to be closed.
 *
 * @param {*} message
 * @return {*}  {message is {}}
 */
export const isLegacyGalaxyAppCloseMessage = (message: any): message is {} => {
  return !!message && Object.keys(message).length === 0;
};
