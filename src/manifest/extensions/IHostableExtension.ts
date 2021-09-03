export interface IHostableExtension {
    host: {
        /**
         * Address where the extension hosting page is hosted.
         *
         * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#url
         * @type {string}
         * @memberof IHostableExtension
         */
        url: string;
    }
}