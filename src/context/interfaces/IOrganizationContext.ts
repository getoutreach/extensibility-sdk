export interface IOrganizationContext {
  currency?: string | null;

  /**
   * Unique organization identifier
   *
   * @type {string}
   * @memberof UserContext
   */
  id?: string;

  /**
   * Organization logo url
   *
   * @type {(string | null)}
   * @memberof OrganizationContext
   */
  logo?: string | null;

  /**
   * Organization name
   *
   * @type {(string | null)}
   * @memberof OrganizationContext
   */
  name?: string | null;

  /**
   * Orgnaization short name
   *
   * @type {(string | null)}
   * @memberof OrganizationContext
   */
  shortname?: string | null;
}
