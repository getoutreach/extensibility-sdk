/* eslint-disable no-unused-vars */
/**
 *
 * List of supported addon stores.
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#store
 * @export
 * @enum {number}
 */
export enum Store {
  /**
   * This is a private store where only invited OR users have access.
   * Main purpose is to enable developers working on an application
   */
  PRIVATE = 'private',
  /**
   * This is a internal store accessible by anyone in a organization
   * owning this store.
   */
  INTERNAL = 'internal',
  /**
   * This is public store accessible by any Outreach user.
   */
  PUBLIC = 'public',
}
