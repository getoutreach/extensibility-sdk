import { ContextParam } from '../../../context/host/ContextParam';
import { OutreachContext } from '../../../context/OutreachContext';
import { utils } from '../../../utils';
import { Application } from '../../Application';
import { Extension } from '../Extension';
import { ManifestHost } from './ManifestHost';
import { ManifestHostEnvironment } from './ManifestHostEnvironment';
import { TabExtensionType } from './TabExtensionType';

import addonSdk from '../../../index';
import { EventOrigin } from '../../../sdk/logging/EventOrigin';
import { EventType } from '../../../sdk/logging/EventType';
import { LogLevel } from '../../../sdk/logging/LogLevel';

export class TabExtension extends Extension {
  /**
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#environment
   *
   * @type {ManifestHostEnvironment}
   * @memberof ManifestHost
   */
  public environment?: ManifestHostEnvironment;

  /**
   * Definition of addon host
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
   * @type {ManifestHost}
   * @memberof Manifest
   */
  public host: ManifestHost;

  /**
   * Type property defines what the type of addon is and where it should be loaded.
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {TabExtensionType}
   * @memberof Host
   */
  public type: TabExtensionType;

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
      const url = new URL(this.host.url);
      const searchParams = new URLSearchParams(url.search);
      searchParams.forEach((value, key) => {
        modified = true;
        context.host.urlParams.push({
          key: key,
          value: value,
        });
      });
    } catch (e) {
      addonSdk?.logger.log({
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
  validate(application: Application): string[] {
    const issues: string[] = [];

    if (!this.host) {
      issues.push('Host section is missing.');
    } else {
      if (!utils.urlValidation(this.host.icon)) {
        issues.push(
          'Host icon definition is invalid url. Value: ' + this.host.icon
        );
      }

      if (!this.hostUrlValidation(application)) {
        issues.push('Host url is invalid. Value: ' + this.host.url);
      }

      if (
        !this.type ||
        !Object.values(TabExtensionType).includes(this.type as TabExtensionType)
      ) {
        issues.push('Host type  is invalid. Value: ' + this.type);
      }
    }

    return issues;
  }

  private hostUrlValidation = (application: Application): boolean => {
    const hostUrl = this.host.url;
    if (!hostUrl) {
      return false;
    }

    const contextParams: ContextParam[] = [];
    application.context.forEach((key) =>
      contextParams.push({ key, value: 'marker' })
    );

    try {
      const { url } = utils.tokenizeUrl(hostUrl, contextParams);
      const validatedUrl = new URL(url);
      return validatedUrl.toString() === url;
    } catch (e) {
      return false;
    }
  };
}
