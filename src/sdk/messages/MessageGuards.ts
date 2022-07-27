import { DecorationUpdateMessage } from './DecorationMessage';
import { EnvironmentMessage } from './EnvironmentMessage';
import { MessageType } from './MessageType';
import { NavigationMessage } from './NavigationMessage';
import { NotificationMessage } from './NotificationMessage';
import { ReadyMessage } from './ReadyMessage';

export const isDecorationMessage = (messageInfo: any): messageInfo is DecorationUpdateMessage => {
  if (!Object.prototype.hasOwnProperty.call(messageInfo, 'type') || typeof messageInfo.type !== 'string') {
    return false;
  }

  if (messageInfo.type !== MessageType.REQUEST_DECORATION_UPDATE) {
    return false;
  }

  if (!Object.prototype.hasOwnProperty.call(messageInfo, 'value') || typeof messageInfo.value !== 'string') {
    return false;
  }

  return true;
};

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
