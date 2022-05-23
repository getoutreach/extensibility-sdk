import { ManifestApi } from '../../manifest/ManifestApi';
import runtime from '../RuntimeContext';

class OAuthService {
  public openPopup = (redirectUri?: string) => {
    if (!runtime.application.api) {
      throw new Error("Can't open auth window for addon which has no api configuration in its manifest");
    }

    const authorizeUrl = this.getOAuthAuthorizeUrl(runtime.application.api, redirectUri);
    this.showPopup(authorizeUrl, 800, 600);
  };

  private getOAuthHost = () => {
    const originUrl = new URL(runtime.origin);

    const regex = /https:\/\/([-\w]+?)\./.exec(originUrl.origin);
    if (!regex) {
      throw new Error('Invalid runtime origin url:' + originUrl.origin);
    }

    return originUrl.origin.replace(regex[1], 'accounts');
  };

  private getOAuthAuthorizeUrl = (api: ManifestApi, redirectUri?: string) => {
    const host = this.getOAuthHost();
    const scopes = encodeURIComponent(api.scopes.join(' '));
    const selectedRedirectUri = encodeURIComponent(this.selectRedirectUri(api, redirectUri));
    const clientId = encodeURIComponent(api.client.id || api.applicationId || '');
    return `${host}/oauth/authorize?client_id=${clientId}&redirect_uri=${selectedRedirectUri}&response_type=code&scope=${scopes}`;
  };

  private selectRedirectUri = (api: ManifestApi, redirectUri?: string): string => {
    if (redirectUri === undefined) {
      if (api.redirectUris?.length) {
        return api.redirectUris[0];
      }

      return api.redirectUri ?? '';
    }

    if (api.redirectUris?.includes(redirectUri)) {
      return redirectUri;
    }

    throw new Error('redirectUri provided is not amongst the api configuration redirectUris');
  };

  private showPopup = (url: string, width: number, height: number) => {
    let dualScreenLeft = window.screenLeft;
    if (!dualScreenLeft) {
      dualScreenLeft = window.screenX;
    }

    let dualScreenTop = window.screenTop;
    if (!dualScreenTop) {
      dualScreenTop = window.screenY;
    }

    let calcWidth: number;
    if (window.innerWidth) {
      calcWidth = window.innerWidth;
    } else {
      calcWidth = document.documentElement.clientWidth;
    }

    if (!calcWidth) {
      calcWidth = screen.width;
    }

    let calcHeight: number;
    if (window.innerHeight) {
      calcHeight = window.innerHeight;
    } else {
      calcHeight = document.documentElement.clientHeight;
    }

    if (!calcHeight) {
      calcHeight = screen.height;
    }

    const systemZoom = calcWidth / window.screen.availWidth;
    const left = (calcWidth - width) / 2 / systemZoom + dualScreenLeft;
    const top = (calcHeight - height) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(
      url,
      '_blank',
      `scrollbars=yes,width=${width / systemZoom},height=${height / systemZoom},top=${top},left=${left}`
    );
    if (newWindow) {
      newWindow.focus();
    }
  };
}

export default new OAuthService();
