import { ConfigurationItem } from '../configuration/ConfigurationItem';
import { LocalizedString } from '../manifest/store/LocalizedString';
import { ManifestMedia } from '../manifest/store/Media';
import { ManifestHostEnvironment } from './ManifestHostEnvironment';
import { ManifestV1Api } from './ManifestV1Api';

export interface ManifestV1 {
  version: string;
  identifier: string;
  store: 'personal' | 'private' | 'public';
  title: LocalizedString;
  description: LocalizedString;
  host: {
    type:
      | 'tab-opportunity'
      | 'tab-prospect'
      | 'tab-account'
      | 'tab-reports'
      | 'tab-sidebar'
      | 'tab-prospect-action'
      | 'left-side-menu'
      | 'shell-companion'
      | 'shell-tool'
      | 'shell-action';
    url: string;
    icon: string;
    environment: ManifestHostEnvironment;
    notificationsUrl?: string;
  };
  author: {
    company?: string;
    websiteUrl: string;
    privacyUrl: string;
    termsOfUseUrl: string;
  };
  categories?: string[];

  context: string[];

  api?: ManifestV1Api;

  configuration: ConfigurationItem[];

  medias?: ManifestMedia[];

  /**
   *
   * @deprecated Use disableTimeoutMonitoring
   * @type {boolean}
   * @memberof ManifestV1
   */
  notUsingSdk?: boolean;

  disableTimeoutMonitoring?: boolean;
}
