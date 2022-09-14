import { ManifestApi } from '../../manifest/ManifestApi';
import runtime from '../RuntimeContext';

class OAuthService {
  public openPopup = (redirectUri?: string, state?: { [key: string]: string }) => {
    if (!runtime.application.api) {
      throw new Error('Configure API access for this app before calling authenticate().');
    }

    const authorizeUrl = this.getOAuthAuthorizeUrl(runtime.application.api, redirectUri, state);
    this.showPopup(authorizeUrl, 800, 600);
  };

  private getOAuthAuthorizeUrl = (api: ManifestApi, redirectUri?: string, state?: { [key: string]: string }) => {
    const scopes = encodeURIComponent(api.scopes.join(' '));
    const selectedRedirectUri = encodeURIComponent(this.selectRedirectUri(api, redirectUri));
    const clientId = encodeURIComponent(api.client.id || '');
    let url = `${runtime.authorizationHost}/oauth/authorize?client_id=${clientId}&redirect_uri=${selectedRedirectUri}&response_type=code&scope=${scopes}`;
    if (!state) {
      state = {};
    }

    state.uid = runtime.userIdentifier;
    url += `&state=${encodeURIComponent(JSON.stringify(state))}`;
    return url;
  };

  private selectRedirectUri = (api: ManifestApi, redirectUri?: string): string => {
    if (redirectUri) {
      if (api.redirectUris?.includes(redirectUri)) {
        return redirectUri;
      } else {
        throw new Error('redirectUri provided is not amongst the api configuration redirectUris');
      }
    }
    return api.redirectUris[0];
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
