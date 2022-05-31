export interface IOrganizationContext {
  currency?: string | null;

  /**
   * Unique organization identifier
   *
   * @type {string}
   */
  id?: string;

  /**
   * Organization logo url
   *
   * @type {(string | null)}
   */
  logo?: string | null;

  /**
   * Organization name
   *
   * @type {(string | null)}
   */
  name?: string | null;

  /**
   * Organization short name
   *
   * @type {(string | null)}
   */
  shortname?: string | null;
}
