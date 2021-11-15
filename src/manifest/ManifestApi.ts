// eslint-disable-next-line no-unused-vars
import { Scopes } from './api/Scopes';

/**
 * Optional section defining parameters needed for accessing Outreach API.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#api-optional
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/outreach-api.md
 * @export
 * @class ManifestApi
 */
export class ManifestApi {
    /**
     * Outreach OAuth application id
     *
     * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#applicationid
     * @type {string}
     * @memberof ManifestApi
     */
    applicationId: string;

    /**
     * Outreach OAuth App redirect url on which the Authorization endpoint is implemented.
     *
     * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#redirecturl
     * @type {string}
     * @memberof ManifestApi
     */
    redirectUrl: string;

    /**
     * The list of scopes will be used for Outreach API authentication
     * where current Outreach user will be asked to consent for granting
     * permissions for defined scopes to addon creator.
     *
     * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#scopes
     * @type {Scopes[]}
     * @memberof Api
     */
    scopes: Scopes[];

    /**
     * URL of the endpoint, which will return support refresh token flow.
     *
     * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#token
     * @type {string}
     * @memberof Api
     */
    tokenUrl: string;

    /**
     *
     * URL of the connect endpoint, which will contain a page
     * posting authentication token info back to addon page which
     * had opened the popup.
     *
     * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#token
     * @type {string}
     * @memberof Api
     */
    connectUrl: string;
}
