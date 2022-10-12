import { UnknownContextKeys } from '../../../context/keys/UnknownContextKeys';
import { utils } from '../../../utils';
import { DataExtension } from './DataExtension';
import { DataExtensionType } from './DataExtensionType';

export class MailingLinksDataExtension extends DataExtension {
  /**
   * Type of mailing link data extension
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {DataExtensionType}
   * @memberof MailingLinksDataExtension
   */
  public type: DataExtensionType.MAILING_LINKS = DataExtensionType.MAILING_LINKS;

  /**
   * Definition of hosting section
   *
   * @type {{ url: string }}
   * @memberof MailingLinksDataExtension
   */
  public host: { url: string };

  /**
   * Validates the data extension configuration
   *
   * @param {Application} application
   * @return {*}  {string[]}
   * @memberof MailingLinksDataExtension
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

      if (!this.type || !Object.values(DataExtensionType).includes(this.type as DataExtensionType)) {
        issues.push('Host type  is invalid. Value: ' + this.type);
      }
    }

    if (!this.context) {
      issues.push('Context section is missing');
    } else {
      if (!Array.isArray(this.context)) {
        issues.push('Context section is not an array. Value: ' + this.context);
      }

      this.context.forEach((context) => {
        if (!Object.values(UnknownContextKeys).includes(context as UnknownContextKeys)) {
          issues.push('Context key is not one of the valid values for the data extension. Key: ' + context);
        }
      });
    }

    return issues;
  }
}
