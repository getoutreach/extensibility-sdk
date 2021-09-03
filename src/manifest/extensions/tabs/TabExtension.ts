import { utils } from '../../../utils';
import { Extension } from '../Extension';
import { ManifestHost } from './ManifestHost';
import { ManifestHostEnvironment } from './ManifestHostEnvironment';
import { TabExtensionType } from './TabExtensionType';

import { EventOrigin } from '../../../sdk/logging/EventOrigin';
import { EventType } from '../../../sdk/logging/EventType';
import { LogLevel } from '../../../sdk/logging/LogLevel';
import { OutreachContext } from '../../../context/OutreachContext';
import { ContextParam } from '../../../context/host/ContextParam';
import { AllContextKeys } from '../../../context/keys/AllContextKeys';
import logger from '../../../sdk/logging/Logger';
import { IHostableExtension } from '../IHostableExtension';
import { LocalizedString } from '../../app/LocalizedString';

export class TabExtension extends Extension implements IHostableExtension {
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
  public context: AllContextKeys[];

  /**
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#environment
   *
   * @type {ManifestHostEnvironment}
   * @memberof TabExtension
   */
  public environment?: ManifestHostEnvironment;

  /**
   * Definition of addon host
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
   * @type {ManifestHost}
   * @memberof TabExtension
   */
  public host: ManifestHost;

  /**
   * Type property defines the type of tab extension
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {TabExtensionType}
   * @memberof TabExtension
   */
  public type: TabExtensionType;

  /**
   * Optional property defining the text, which will be shown as the tab title.
   * If omitted, app.headline manifest value will be used.
   *
   * @type {LocalizedString}
   * @memberof TabExtension
   */
  public title?: LocalizedString;

  /**
   * Optional property defining the text, which will be shown as the tab title tooltip.
   * If omitted, app.headline manifest value will be used.
   *
   * @type {LocalizedString}
   * @memberof TabExtension
   */
  public description?: LocalizedString;

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

      //2. complete the tokenize url with contextual data of host url and notifications url
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

      if (!this.hostUrlValidation(this.host.url)) {
        issues.push('Host url is invalid. Value: ' + this.host.url);
      }

      if (
        !this.type ||
        !Object.values(TabExtensionType).includes(this.type as TabExtensionType)
      ) {
        issues.push('Host type  is invalid. Value: ' + this.type);
      }

      if (this.host.notificationsUrl) {
        if (!this.hostUrlValidation(this.host.notificationsUrl)) {
          issues.push(
            'Notifications url definition is invalid url. Value: ' +
              this.host.notificationsUrl
          );
        }

        if (this.type !== TabExtensionType.APPLICATION) {
          issues.push(
            'Notifications url can be defined only for application tab extension. Type: ' +
              this.type
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
    }

    return issues;
  }

  private hostUrlValidation = (hostUrl: string): boolean => {
    const contextParams: ContextParam[] = [];
    this.context.forEach((key) => contextParams.push({ key, value: 'marker' }));

    try {
      const { url } = utils.tokenizeUrl(hostUrl, contextParams);
      const validatedUrl = new URL(url);
      return validatedUrl.toString() === url;
    } catch (e) {
      return false;
    }
  };
}
