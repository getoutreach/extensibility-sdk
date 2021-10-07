import { utils } from '../../../utils';
import { Extension } from '../Extension';
import { ShellExtensionHost } from './ShellExtensionHost';

import { EventOrigin } from '../../../sdk/logging/EventOrigin';
import { EventType } from '../../../sdk/logging/EventType';
import { LogLevel } from '../../../sdk/logging/LogLevel';
import { OutreachContext } from '../../../context/OutreachContext';
import logger from '../../../sdk/logging/Logger';
import { IHostableExtension } from '../IHostableExtension';
import { LocalizedString } from '../../store/LocalizedString';
import { UserContextKeys } from '../../../context/keys/UserContextKeys';
import { ClientContextKeys } from '../../../context/keys/ClientContextKeys';
import { ShellExtensionType } from './ShellExtensionType';
import { ExtensionType } from '../ExtensionType';

export class ShellExtension extends Extension implements IHostableExtension {
  /**
   * In this section, the addon author defines a list of predefined context information that addon needs from Outreach
   * to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {TabExtensionType}
   * @memberof TabExtension
   */
  public context: (UserContextKeys | ClientContextKeys)[];

  /**
   * Definition of addon host
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
   * @type {ManifestHost}
   * @memberof TabExtension
   */
  public host: ShellExtensionHost;

  /**
   * Type property defines the type of tab extension
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {TabExtensionType}
   * @memberof TabExtension
   */
  public type!: ExtensionType;

  /**
   * Optional property defining the text, which will be shown as the tab title.
   * If omitted, app.headline manifest value will be used.
   *
   * @type {LocalizedString}
   * @memberof TabExtension
   */
  public title?: LocalizedString;

  /**
   * Initialize Outreach context with tab extension contextual information.
   *
   * @param {OutreachContext} context
   * @return {*}  {boolean}
   * @memberof TabExtension
   */
  init(context: OutreachContext): boolean {
    let modified = false;

    try {
      // 1. copy url search parameters to context urlParams
      const url = new URL(this.host.url);
      const searchParams = new URLSearchParams(url.search);
      searchParams.forEach((value, key) => {
        modified = true;
        context.host.urlParams.push({
          key: key,
          value: value,
        });
      });

      // 2. complete the tokenize url with contextual data of host url and notifications url
      this.host.url = utils.tokenizeUrl(this.host.url, context.toParams()).url;
      if (this.host.notificationsUrl) {
        this.host.notificationsUrl = utils.tokenizeUrl(
          this.host.notificationsUrl,
          context.toParams()
        ).url;
      }
    } catch (e) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        message: '[CXT][TabExtension]::init- invalid manifest url',
        level: LogLevel.Error,
        context: [`url: ${this.host.url}`, `e: ${e}`],
      });
    }

    return modified;
  }

  /**
   * Validates the tab extension configuration
   *
   * @param {Application} application
   * @return {*}  {string[]}
   * @memberof TabExtension
   */
  validate(): string[] {
    const issues: string[] = [];

    if (!this.host) {
      issues.push('Host section is missing.');
    } else {
      if (!utils.urlValidation(this.host.icon)) {
        issues.push(
          'Host icon definition is invalid url. Value: ' + this.host.icon
        );
      }

      if (!utils.hostUrlValidation(this.host.url, this.context)) {
        issues.push('Host url is invalid. Value: ' + this.host.url);
      }

      if (
        !this.type ||
        !Object.values(ShellExtensionType).includes(
          this.type as ShellExtensionType
        )
      ) {
        issues.push('Host type  is invalid. Value: ' + this.type);
      }

      if (this.host.notificationsUrl) {
        if (
          !utils.hostUrlValidation(this.host.notificationsUrl, this.context)
        ) {
          issues.push(
            'Notifications url definition is invalid url. Value: ' +
              this.host.notificationsUrl
          );
        }
      }
    }

    if (!this.context) {
      issues.push('Context section is missing');
    } else {
      if (!Array.isArray(this.context)) {
        issues.push('Context section is not an array. Value: ' + this.context);
      }

      this.context.forEach((context) => {
        if (
          !Object.values(UserContextKeys).includes(
            context as UserContextKeys
          ) &&
          !Object.values(ClientContextKeys).includes(
            context as ClientContextKeys
          )
        ) {
          issues.push(
            'Context key is not one of the valid values for the application tab extension. Key: ' +
              context
          );
        }
      });
    }

    return issues;
  }
}
