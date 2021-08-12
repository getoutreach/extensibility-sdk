import { utils } from '../../../utils';
import { Extension } from '../Extension';
import { ManifestHost } from './ManifestHost';
import { ManifestHostEnvironment } from './ManifestHostEnvironment';
import { TabExtensionType } from './TabExtensionType';

import addonSdk from '../../../index';
import { EventOrigin } from '../../../sdk/logging/EventOrigin';
import { EventType } from '../../../sdk/logging/EventType';
import { LogLevel } from '../../../sdk/logging/LogLevel';
import { OutreachContext } from '../../../context/OutreachContext';
import { ContextParam } from '../../../context/host/ContextParam';
import { AllContextKeys } from '../../../context/keys/AllContextKeys';

export abstract class TabExtension extends Extension {
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
  public abstract context: AllContextKeys[];

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
  public abstract type: TabExtensionType;

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

      if (!this.hostUrlValidation()) {
        issues.push('Host url is invalid. Value: ' + this.host.url);
      }

      if (
        !this.type ||
        !Object.values(TabExtensionType).includes(this.type as TabExtensionType)
      ) {
        issues.push('Host type  is invalid. Value: ' + this.type);
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

  private hostUrlValidation = (): boolean => {
    const hostUrl = this.host.url;
    if (!hostUrl) {
      return false;
    }

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
