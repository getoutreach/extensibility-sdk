import { utils } from '../../../utils';
import { DataExtension } from './DataExtension';
import { DataExtensionType } from './DataExtensionType';
import { ProspectEventsHost } from './ProspectEventsHost';
import { LocalizedString } from '../../store/LocalizedString';

export class ProspectEventsDataExtension extends DataExtension {
  /**
   * Type of mailing link data extension
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {DataExtensionType}
   * @memberof ProspectEventsDataExtension
   */
  public type: DataExtensionType.PROSPECT_EVENTS = DataExtensionType.PROSPECT_EVENTS;

  /**
   * Definition of hosting section
   *
   * @type {{ url: string }}
   * @memberof ProspectEventsDataExtension
   */
  public host: ProspectEventsHost;

  /**
   * Tokenized template representation of the event.
   * e.g.  "A message was sent to {{prospect}} on Drift"
   *
   * @type {LocalizedString}
   * @memberof ProspectEventsDataExtension
   */
  template!: LocalizedString;

  /**
   * Validates the data extension configuration
   *
   * @param {Application} application
   * @return {*}  {string[]}
   * @memberof ProspectEventsDataExtension
   */
  validate(): string[] {
    const issues: string[] = [];

    if (!this.host) {
      issues.push('Host section is missing.');
    } else {
      if (this.host.url) {
        if (!utils.hostUrlValidation(this.host.url, this.context)) {
          issues.push('Host url is invalid. Value: ' + this.host.url);
        }
      }

      if (!this.type || !Object.values(DataExtensionType).includes(this.type as DataExtensionType)) {
        issues.push('Host type is invalid. Value: ' + this.type);
      }

      if (!this.host.icon) {
        issues.push('Host icon definition is missing');
      } else {
        if (!utils.urlValidation(this.host.icon)) {
          issues.push('Host icon definition is invalid. Value: ' + this.host.icon);
        }
      }
    }

    if (!this.template) {
      issues.push('Template definition is missing');
    } else {
      const match = /{{.*}}/.exec(this.template.en);
      if (match) {
        if (match[0] !== '{{prospect}}' && match[0] !== '{{user}}') {
          issues.push('Unsupported token: ' + match[0]);
        }
      }
    }

    if (!this.context) {
      issues.push('Context section is missing');
    } else {
      if (!Array.isArray(this.context)) {
        issues.push('Context section is not an array. Value: ' + this.context);
      } else {
        if (this.context.length > 0) {
          issues.push('Prospect events data extension context properties are not supported');
        }
      }
    }

    return issues;
  }
}
