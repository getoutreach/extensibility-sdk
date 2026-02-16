import { utils } from '../../../utils';
import { Extension } from '../Extension';
import { McpExtensionHost } from './McpExtensionHost';

import { EventOrigin } from '../../../sdk/logging/EventOrigin';
import { EventType } from '../../../sdk/logging/EventType';
import { LogLevel } from '../../../sdk/logging/LogLevel';
import { OutreachContext } from '../../../context/OutreachContext';
import logger from '../../../sdk/logging/Logger';
import { UserContextKeys } from '../../../context/keys/UserContextKeys';
import { ClientContextKeys } from '../../../context/keys/ClientContextKeys';
import { McpExtensionType } from './McpExtensionType';
import { ExtensionType } from '../ExtensionType';
import { OrganizationContextKeys } from '../../../context/keys/OrganizationContextKeys';

export class McpExtension extends Extension {
  /**
   * In this section, the addon author defines a list of predefined context information that addon needs from Outreach
   * to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @type {(UserContextKeys | ClientContextKeys | OrganizationContextKeys)[]}
   * @memberof McpExtension
   */
  public context: (UserContextKeys | ClientContextKeys | OrganizationContextKeys)[];

  /**
   * Definition of addon host
   *
   * @type {McpExtensionHost}
   * @memberof McpExtension
   */
  public host: McpExtensionHost;

  /**
   * Type property defines the type of MCP extension
   * @type {ExtensionType}
   * @memberof McpExtension
   */
  public type!: ExtensionType;

  /**
   * Initialize Outreach context with MCP extension contextual information.
   *
   * @param {OutreachContext} context
   * @return {*}  {boolean}
   * @memberof McpExtension
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

      // 2. complete the tokenize url with contextual data of host url
      this.host.url = utils.tokenizeUrl(this.host.url!, context.toParams()).url;
    } catch (e) {
      logger.current.log({
        origin: EventOrigin.ADDON,
        type: EventType.INTERNAL,
        message: '[CXT][McpExtension]::init- invalid manifest url',
        level: LogLevel.Error,
        context: [`url: ${this.host.url}`, `e: ${e}`],
      });
    }

    return modified;
  }

  /**
   * Validates the MCP extension configuration
   *
   * @param {Application} application
   * @return {*}  {string[]}
   * @memberof McpExtension
   */
  validate(): string[] {
    const issues: string[] = [];

    // Validate context first
    if (!this.context) {
      issues.push('Context section is missing');
    } else if (!Array.isArray(this.context)) {
      issues.push('Context section is not an array. Value: ' + this.context);
    } else {
      this.context.forEach((context) => {
        if (
          !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
          !Object.values(ClientContextKeys).includes(context as ClientContextKeys) &&
          !Object.values(OrganizationContextKeys).includes(context as OrganizationContextKeys)
        ) {
          issues.push('Context key is not one of the valid values for the MCP extension. Key: ' + context);
        }
      });
    }

    // Validate host (can now safely use this.context if it's an array)
    if (!this.host) {
      issues.push('Host section is missing.');
    } else {
      if (!this.host.url) {
        issues.push('Host url definition is missing.');
      } else {
        if (Array.isArray(this.context) && !utils.hostUrlValidation(this.host.url, this.context)) {
          issues.push('Host url is invalid. Value: ' + this.host.url);
        }
      }

      if (!utils.urlValidation(this.host.icon)) {
        issues.push('Host icon definition is invalid url. Value: ' + this.host.icon);
      }

      if (!this.type || !Object.values(McpExtensionType).includes(this.type as McpExtensionType)) {
        issues.push('Host type  is invalid. Value: ' + this.type);
      }
    }

    return issues;
  }
}
