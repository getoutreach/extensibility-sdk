/* eslint-disable no-unused-vars */

/**
 * List of Outreach API scopes addon can request
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/scopes.md
 * @export
 * @enum {number}
 */
export enum Scopes {
  ACCOUNTS_ALL = 'accounts.all',
  ACCOUNTS_DELETE = 'accounts.delete',
  ACCOUNTS_READ = 'accounts.read',
  ACCOUNTS_WRITE = 'accounts.write',

  AUDITS_READ = 'audits.read',

  CALLS_ALL = 'calls.all',
  CALLS_DELETE = 'calls.delete',
  CALLS_READ = 'calls.read',
  CALLS_WRITE = 'calls.write',

  CALL_DISPOSITIONS_ALL = 'callDispositions.all',
  CALL_DISPOSITIONS_DELETE = 'callDispositions.delete',
  CALL_DISPOSITIONS_READ = 'callDispositions.read',
  CALL_DISPOSITIONS_WRITE = 'callDispositions.write',

  CALL_PURPOSES_ALL = 'callPurposes.all',
  CALL_PURPOSES_DELETE = 'callPurposes.delete',
  CALL_PURPOSES_READ = 'callPurposes.read',
  CALL_PURPOSES_WRITE = 'callPurposes.write',

  COMPLIANCE_REQUESTS_ALL = 'complianceRequests.all',
  COMPLIANCE_REQUESTS_READ = 'complianceRequests.read',
  COMPLIANCE_REQUESTS_WRITE = 'complianceRequests.write',

  CONTENT_CATEGORIES_ALL = 'contentCategories.all',
  CONTENT_CATEGORIES_DELETE = 'contentCategories.delete',
  CONTENT_CATEGORIES_READ = 'contentCategories.read',
  CONTENT_CATEGORIES_WRITE = 'contentCategories.write',

  CONTENT_CATEGORY_MEMBERSHIPS_ALL = 'contentCategoryMemberships.all',
  CONTENT_CATEGORY_MEMBERSHIPS_DELETE = 'contentCategoryMemberships.delete',
  CONTENT_CATEGORY_MEMBERSHIPS_READ = 'contentCategoryMemberships.read',
  CONTENT_CATEGORY_MEMBERSHIPS_WRITE = 'contentCategoryMemberships.write',

  CONTENT_CATEGORY_OWNERSHIPS_ALL = 'contentCategoryOwnerships.all',
  CONTENT_CATEGORY_OWNERSHIPS_DELETE = 'contentCategoryOwnerships.delete',
  CONTENT_CATEGORY_OWNERSHIPS_READ = 'contentCategoryOwnerships.read',
  CONTENT_CATEGORY_OWNERSHIPS_WRITE = 'contentCategoryOwnerships.write',

  CUSTOM_DUTIES_WRITE = 'customDuties.write',

  DUTIES_READ = 'duties.read',

  EMAIL_ADDRESSES_ALL = 'emailAddresses.all',
  EMAIL_ADDRESSES_DELETE = 'emailAddresses.delete',
  EMAIL_ADDRESSES_READ = 'emailAddresses.read',
  EMAIL_ADDRESSES_WRITE = 'emailAddresses.write',

  EVENTS_ALL = 'events.all',
  EVENTS_READ = 'events.read',
  EVENTS_WRITE = 'events.write',

  FAVORITES_ALL = 'favorites.all',
  FAVORITES_DELETE = 'favorites.delete',
  FAVORITES_READ = 'favorites.read',
  FAVORITES_WRITE = 'favorites.write',

  JOB_ROLES_ALL = 'jobRoles.all',
  JOB_ROLES_READ = 'jobRoles.read',
  JOB_ROLES_WRITE = 'jobRoles.write',

  MAIL_ALIASES_READ = 'mailAliases.read',

  MAILBOXES_ALL = 'mailboxes.all',
  MAILBOXES_DELETE = 'mailboxes.delete',
  MAILBOXES_READ = 'mailboxes.read',
  MAILBOXES_WRITE = 'mailboxes.write',

  MAILINGS_ALL = 'mailings.all',
  MAILINGS_READ = 'mailings.read',
  MAILINGS_WRITE = 'mailings.write',

  OPPORTUNITIES_ALL = 'opportunities.all',
  OPPORTUNITIES_DELETE = 'opportunities.delete',
  OPPORTUNITIES_READ = 'opportunities.read',
  OPPORTUNITIES_WRITE = 'opportunities.write',

  OPPORTUNITY_PROSPECT_ROLES_ALL = 'opportunityProspectRoles.all',
  OPPORTUNITY_PROSPECT_ROLES_DELETE = 'opportunityProspectRoles.delete',
  OPPORTUNITY_PROSPECT_ROLES_READ = 'opportunityProspectRoles.read',
  OPPORTUNITY_PROSPECT_ROLES_WRITE = 'opportunityProspectRoles.write',

  OPPORTUNITY_STAGES_ALL = 'opportunityStages.all',
  OPPORTUNITY_STAGES_DELETE = 'opportunityStages.delete',
  OPPORTUNITY_STAGES_READ = 'opportunityStages.read',
  OPPORTUNITY_STAGES_WRITE = 'opportunityStages.write',

  PERSONAS_ALL = 'personas.all',
  PERSONAS_DELETE = 'personas.delete',
  PERSONAS_READ = 'personas.read',
  PERSONAS_WRITE = 'personas.write',

  PHONE_NUMBERS_ALL = 'phoneNumbers.all',
  PHONE_NUMBERS_DELETE = 'phoneNumbers.delete',
  PHONE_NUMBERS_READ = 'phoneNumbers.read',
  PHONE_NUMBERS_WRITE = 'phoneNumbers.write',

  PROFILES_ALL = 'profiles.all',
  PROFILES_DELETE = 'profiles.delete',
  PROFILES_READ = 'profiles.read',
  PROFILES_WRITE = 'profiles.write',

  PROSPECTS_ALL = 'prospects.all',
  PROSPECTS_DELETE = 'prospects.delete',
  PROSPECTS_READ = 'prospects.read',
  PROSPECTS_WRITE = 'prospects.write',

  RECIPIENTS_ALL = 'recipients.all',
  RECIPIENTS_DELETE = 'recipients.delete',
  RECIPIENTS_READ = 'recipients.read',
  RECIPIENTS_WRITE = 'recipients.write',

  RECORD_ACTOR_ASSIGNMENTS_ALL = 'recordActorAssignments.all',
  RECORD_ACTOR_ASSIGNMENTS_DELETE = 'recordActorAssignments.delete',
  RECORD_ACTOR_ASSIGNMENTS_READ = 'recordActorAssignments.read',
  RECORD_ACTOR_ASSIGNMENTS_WRITE = 'recordActorAssignments.write',

  ROLES_ALL = 'roles.all',
  ROLES_DELETE = 'roles.delete',
  ROLES_READ = 'roles.read',
  ROLES_WRITE = 'roles.write',

  RULESETS_ALL = 'rulesets.all',
  RULESETS_DELETE = 'rulesets.delete',
  RULESETS_READ = 'rulesets.read',
  RULESETS_WRITE = 'rulesets.write',

  SEQUENCES_ALL = 'sequences.all',
  SEQUENCES_DELETE = 'sequences.delete',
  SEQUENCES_READ = 'sequences.read',
  SEQUENCES_WRITE = 'sequences.write',

  SEQUENCE_STATES_ALL = 'sequenceStates.all',
  SEQUENCE_STATES_DELETE = 'sequenceStates.delete',
  SEQUENCE_STATES_READ = 'sequenceStates.read',
  SEQUENCE_STATES_WRITE = 'sequenceStates.write',

  SEQUENCE_STEPS_ALL = 'sequenceSteps.all',
  SEQUENCE_STEPS_DELETE = 'sequenceSteps.delete',
  SEQUENCE_STEPS_READ = 'sequenceSteps.read',
  SEQUENCE_STEPS_WRITE = 'sequenceSteps.write',

  SEQUENCE_TEMPLATES_ALL = 'sequenceTemplates.all',
  SEQUENCE_TEMPLATES_DELETE = 'sequenceTemplates.delete',
  SEQUENCE_TEMPLATES_READ = 'sequenceTemplates.read',
  SEQUENCE_TEMPLATES_WRITE = 'sequenceTemplates.write',

  SNIPPETS_ALL = 'snippets.all',
  SNIPPETS_DELETE = 'snippets.delete',
  SNIPPETS_READ = 'snippets.read',
  SNIPPETS_WRITE = 'snippets.write',

  STAGES_ALL = 'stages.all',
  STAGES_DELETE = 'stages.delete',
  STAGES_READ = 'stages.read',
  STAGES_WRITE = 'stages.write',

  TASKS_ALL = 'tasks.all',
  TASKS_DELETE = 'tasks.delete',
  TASKS_READ = 'tasks.read',
  TASKS_WRITE = 'tasks.write',

  TASK_PRIORITIES_READ = 'taskPriorities.read',

  TEAMS_ALL = 'teams.all',
  TEAMS_DELETE = 'teams.delete',
  TEAMS_READ = 'teams.read',
  TEAMS_WRITE = 'teams.write',
  TEAMS_AGGREGATE = 'teams.aggregate',

  TEMPLATES_ALL = 'templates.all',
  TEMPLATES_DELETE = 'templates.delete',
  TEMPLATES_READ = 'templates.read',
  TEMPLATES_WRITE = 'templates.write',

  USERS_ALL = 'users.all',
  USERS_READ = 'users.read',
  USERS_WRITE = 'users.write',
  USERS_AGGREGATE = 'users.aggregate',

  WEBHOOKS_ALL = 'webhooks.all',
  WEBHOOKS_DELETE = 'webhooks.delete',
  WEBHOOKS_READ = 'webhooks.read',
  WEBHOOKS_WRITE = 'webhooks.write',

  SCIM = 'scim',
}
