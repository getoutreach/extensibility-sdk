import { AllContextKeys } from '../../../context/keys/AllContextKeys';
import { OutreachContext } from '../../../context/OutreachContext';
import { utils } from '../../../utils';
import { Extension } from '../Extension';
import { TileExtensionHost } from './TileExtensionHost';
import { TileExtensionType } from './TileExtensionType';
import { TileSettings } from './TileSettings';

import logger from '../../../sdk/logging/Logger';
import { EventOrigin } from '../../../sdk/logging/EventOrigin';
import { EventType } from '../../../sdk/logging/EventType';
import { LogLevel } from '../../../sdk/logging/LogLevel';
import { LocalizedString } from '../../..';

export class TileExtension extends Extension {
  /**
   * Type property defines what the type of intelligent tile and where it should be loaded.
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {TileExtensionType}
   * @memberof TileExtension
   */
  public type: TileExtensionType;

  /**
   * In this section, the extension author defines a list of predefined context information that tile extension needs
   * from Outreach host to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {AllContextKeys}
   * @memberof TileExtension
   */
  public context: AllContextKeys[];

  /**
   * Optional title value of the tile shown in the tile tilebar.
   * If omitted, app.headline manifest value will be used.
   *
   * @type {LocalizedString}
   * @memberof TileExtension
   */
  public title?: LocalizedString;

  /**
   * Definition of tile extension hosting.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#host
   * @type {TileExtensionHost}
   * @memberof TileExtension
   */
  public host: TileExtensionHost;

  /**
   * Optional definition of the tile experience settings
   *
   * @type {TileSettings}
   * @memberof TileExtension
   */
  public settings?: TileSettings;

  /**
   * Validates the tile extension configuration.
   *
   * @return {*}  {string[]}
   * @memberof TileExtension
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

      if (!this.host.url) {
        if (!this.host.template && !this.host.component) {
          issues.push(
            'Host definition is missing url/template/component value.'
          );
        }
      } else {
        if (!utils.hostUrlValidation(this.host.url, this.context)) {
          issues.push('Host url is invalid. Value: ' + this.host.url);
        }
      }

      if (
        !this.type ||
        !Object.values(TileExtensionType).includes(
          this.type as TileExtensionType
        )
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

  init(context: OutreachContext): boolean {
    if (!this.host.url) {
      return false;
    }

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
        message: '[CXT][TileExtension]::init- invalid manifest url',
        level: LogLevel.Error,
        context: [`url: ${this.host.url}`, `e: ${e}`],
      });
    }

    return modified;
  }
}
