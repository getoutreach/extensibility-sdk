import { utils } from '../../../utils';
import { Extension } from '../Extension';

import { EventOrigin } from '../../../sdk/logging/EventOrigin';
import { EventType } from '../../../sdk/logging/EventType';
import { LogLevel } from '../../../sdk/logging/LogLevel';
import { OutreachContext } from '../../../context/OutreachContext';
import logger from '../../../sdk/logging/Logger';
import { UserContextKeys } from '../../../context/keys/UserContextKeys';
import { ClientContextKeys } from '../../../context/keys/ClientContextKeys';
import { OrganizationContextKeys } from '../../../context/keys/OrganizationContextKeys';
import { EditorSettings } from './EditorSettings';
import { ContentExtensionType } from './ContentExtensionType';
import { EditorExtensionHost } from './EditorExtensionHost';

export class EditorExtension extends Extension {
  /**
   * In this section, the addon author defines a list of predefined context information that addon needs from Outreach
   * to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   *  @type {(UserContextKeys | ClientContextKeys | OrganizationContextKeys)[]}
   * @memberof EditorExtension
   */
  public context: (UserContextKeys | ClientContextKeys | OrganizationContextKeys)[];

  /**
   * Type property defines the type of tab extension
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {ContentExtensionType.EDITOR}
   * @memberof EditorExtension
   */
  public type: ContentExtensionType = ContentExtensionType.EDITOR;

  /**
   * Editor extension host section definition
   *
   * @type {EditorExtensionHost}
   * @memberof EditorExtension
   */
  public host!: EditorExtensionHost;

  /**
   * Optional settings of the editor extension
   *
   * @type {EditorSettings}
   * @memberof EditorExtension
   */
  public settings?: EditorSettings;

  /**
   * Initialize Outreach context with tab extension contextual information.
   *
   * @param {OutreachContext} context
   * @return {*}  {boolean}
   * @memberof EditorExtension
   */
  init(context: OutreachContext): boolean {
    let modified = false;

    try {
      // 1. copy url search parameters to context urlParams
      const url = new URL(this.host.url!);
      const searchParams = new URLSearchParams(url.search);
      searchParams.forEach((value, key) => {
        modified = true;
        context.host.urlParams.push({
          key: key,
          value: value,
        });
      });

      // 2. complete the tokenize url with contextual data of host url and notifications url
      this.host.url = utils.tokenizeUrl(this.host.url!, context.toParams()).url;
    } catch (e) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        message: '[CXT][EditorExtension]::init- invalid manifest url',
        level: LogLevel.Error,
        context: [`url: ${this.host.url}`, `e: ${e}`],
      });
    }

    return modified;
  }

  /**
   * Validates the editor extension configuration
   *
   * @param {Application} application
   * @return {*}  {string[]}
   * @memberof EditorExtension
   */
  validate(): string[] {
    const issues: string[] = [];

    if (!this.host) {
      issues.push('Host section is missing.');
    } else {
      if (!this.host.url) {
        issues.push('Host url definition is missing.');
      } else {
        if (!utils.hostUrlValidation(this.host.url, this.context)) {
          issues.push('Host url is invalid. Value: ' + this.host.url);
        }
      }

      if (!utils.urlValidation(this.host.icon)) {
        issues.push('Host icon definition is invalid url. Value: ' + this.host.icon);
      }

      if (this.settings) {
        if (this.settings.recommended) {
          if (this.settings.recommended.height) {
            if (typeof this.settings.recommended.height !== 'number') {
              issues.push('Host height is not a number. Value: ' + this.settings.recommended.height);
            }

            if (!this.settings.recommended.width) {
              issues.push('Both width and height has to be defined - width is missing');
            } else {
              if (typeof this.settings.recommended.width !== 'number') {
                issues.push('Host width is not a number. Value: ' + this.settings.recommended.width);
              }
            }
          } else {
            if (this.settings.recommended.width) {
              issues.push('Both width and height has to be defined - height is missing');
            }
          }
        }
      }
    }
    if (!this.type || this.type !== ContentExtensionType.EDITOR) {
      issues.push('Host type  is invalid. Value: ' + this.type);
    }

    if (!this.context) {
      issues.push('Context section is missing');
    } else {
      if (!Array.isArray(this.context)) {
        issues.push('Context section is not an array. Value: ' + this.context);
      }

      this.context.forEach((context) => {
        if (
          !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
          !Object.values(ClientContextKeys).includes(context as ClientContextKeys)
        ) {
          issues.push(
            'Context key is not one of the valid values for the application editor extension. Key: ' + context
          );
        }
      });
    }

    return issues;
  }
}
