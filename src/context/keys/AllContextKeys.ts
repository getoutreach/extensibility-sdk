/* eslint-disable no-unused-vars */
import { UserContextKeys } from './UserContextKeys';
import { AccountContextKeys } from './AccountContextKeys';
import { OpportunityContextKeys } from './OpportunityContextKeys';
import { ClientContextKeys } from './ClientContextKeys';
import { ProspectContextKeys } from './ProspectContextKeys';
import { OrganizationContextKeys } from './OrganizationContextKeys';

export type AllContextKeys =
  | UserContextKeys
  | OrganizationContextKeys
  | AccountContextKeys
  | OpportunityContextKeys
  | ClientContextKeys
  | ProspectContextKeys;
