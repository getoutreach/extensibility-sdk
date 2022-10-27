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

  AUDITS_ALL = 'audits.all',
  AUDITS_DELETE = 'audits.delete',
  AUDITS_READ = 'audits.read',
  AUDITS_WRITE = 'audits.write',

  BATCHES_ALL = 'batches.all',
  BATCHES_DELETE = 'batches.delete',
  BATCHES_READ = 'batches.read',
  BATCHES_WRITE = 'batches.write',

  BATCH_ITEMS_ALL = 'batchItems.all',
  BATCH_ITEMS_DELETE = 'batchItems.delete',
  BATCH_ITEMS_READ = 'batchItems.read',
  BATCH_ITEMS_WRITE = 'batchItems.write',

  CALENDAR_EVENT_ATTENDEES_ALL = 'calendarEventAttendees.all',
  CALENDAR_EVENT_ATTENDEES_DELETE = 'calendarEventAttendees.delete',
  CALENDAR_EVENT_ATTENDEES_READ = 'calendarEventAttendees.read',
  CALENDAR_EVENT_ATTENDEES_WRITE = 'calendarEventAttendees.write',

  CALENDAR_EVENTS_ALL = 'calendarEvents.all',
  CALENDAR_EVENTS_DELETE = 'calendarEvents.delete',
  CALENDAR_EVENTS_READ = 'calendarEvents.read',
  CALENDAR_EVENTS_WRITE = 'calendarEvents.write',

  CALENDARS_ALL = 'calendars.all',
  CALENDARS_DELETE = 'calendars.delete',
  CALENDARS_READ = 'calendars.read',
  CALENDARS_WRITE = 'calendars.write',

  CALENDAR_URLS_ALL = 'calendarUrls.all',
  CALENDAR_URLS_DELETE = 'calendarUrls.delete',
  CALENDAR_URLS_READ = 'calendarUrls.read',
  CALENDAR_URLS_WRITE = 'calendarUrls.write',

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
  COMPLIANCE_REQUESTS_DELETE = 'complianceRequests.delete',
  COMPLIANCE_REQUESTS_READ = 'complianceRequests.read',
  COMPLIANCE_REQUESTS_WRITE = 'complianceRequests.write',

  CONTENT_CATEGORY_OWNERSHIPS_ALL = 'contentCategoryOwnerships.all',
  CONTENT_CATEGORY_OWNERSHIPS_DELETE = 'contentCategoryOwnerships.delete',
  CONTENT_CATEGORY_OWNERSHIPS_READ = 'contentCategoryOwnerships.read',
  CONTENT_CATEGORY_OWNERSHIPS_WRITE = 'contentCategoryOwnerships.write',

  CONTENT_CATEGORIES_ALL = 'contentCategories.all',
  CONTENT_CATEGORIES_DELETE = 'contentCategories.delete',
  CONTENT_CATEGORIES_READ = 'contentCategories.read',
  CONTENT_CATEGORIES_WRITE = 'contentCategories.write',

  CONTENT_CATEGORY_MEMBERSHIPS_ALL = 'contentCategoryMemberships.all',
  CONTENT_CATEGORY_MEMBERSHIPS_DELETE = 'contentCategoryMemberships.delete',
  CONTENT_CATEGORY_MEMBERSHIPS_READ = 'contentCategoryMemberships.read',
  CONTENT_CATEGORY_MEMBERSHIPS_WRITE = 'contentCategoryMemberships.write',

  CREATE_ACCOUNTS = 'create_accounts',
  CREATE_CALLS = 'create_calls',
  CREATE_PROSPECTS = 'create_prospects',

  CUSTOM_VALIDATIONS_ALL = 'customValidations.all',
  CUSTOM_VALIDATIONS_DELETE = 'customValidations.delete',
  CUSTOM_VALIDATIONS_READ = 'customValidations.read',
  CUSTOM_VALIDATIONS_WRITE = 'customValidations.write',

  CUSTOM_DUTIES_ALL = 'customDuties.all',
  CUSTOM_DUTIES_DELETE = 'customDuties.delete',
  CUSTOM_DUTIES_READ = 'customDuties.read',
  CUSTOM_DUTIES_WRITE = 'customDuties.write',

  DEAL_RISK_FACTORS_ALL = 'dealRiskFactors.all',
  DEAL_RISK_FACTORS_DELETE = 'dealRiskFactors.delete',
  DEAL_RISK_FACTORS_READ = 'dealRiskFactors.read',
  DEAL_RISK_FACTORS_WRITE = 'dealRiskFactors.write',

  DUTIES_ALL = 'duties.all',
  DUTIES_DELETE = 'duties.delete',
  DUTIES_READ = 'duties.read',
  DUTIES_WRITE = 'duties.write',

  EMAIL_ADDRESSES_ALL = 'emailAddresses.all',
  EMAIL_ADDRESSES_DELETE = 'emailAddresses.delete',
  EMAIL_ADDRESSES_READ = 'emailAddresses.read',
  EMAIL_ADDRESSES_WRITE = 'emailAddresses.write',

  EMAIL = 'email',

  EVENTS_ALL = 'events.all',
  EVENTS_DELETE = 'events.delete',
  EVENTS_READ = 'events.read',
  EVENTS_WRITE = 'events.write',

  EXPERIMENTS_ALL = 'experiments.all',
  EXPERIMENTS_DELETE = 'experiments.delete',
  EXPERIMENTS_READ = 'experiments.read',
  EXPERIMENTS_WRITE = 'experiments.write',

  FAMILY_NAME = 'family_name',

  FAVORITES_ALL = 'favorites.all',
  FAVORITES_DELETE = 'favorites.delete',
  FAVORITES_READ = 'favorites.read',
  FAVORITES_WRITE = 'favorites.write',

  FEATURE_FLAG_PARTICIPATIONS_ALL = 'featureFlagParticipations.all',
  FEATURE_FLAG_PARTICIPATIONS_DELETE = 'featureFlagParticipations.delete',
  FEATURE_FLAG_PARTICIPATIONS_READ = 'featureFlagParticipations.read',
  FEATURE_FLAG_PARTICIPATIONS_WRITE = 'featureFlagParticipations.write',

  FEATURE_FLAGS_ALL = 'featureFlags.all',
  FEATURE_FLAGS_DELETE = 'featureFlags.delete',
  FEATURE_FLAGS_READ = 'featureFlags.read',
  FEATURE_FLAGS_WRITE = 'featureFlags.write',

  FUNCTIONAL_ROLES_ALL = 'functionalRoles.all',
  FUNCTIONAL_ROLES_DELETE = 'functionalRoles.delete',
  FUNCTIONAL_ROLES_READ = 'functionalRoles.read',
  FUNCTIONAL_ROLES_WRITE = 'functionalRoles.write',

  GIVEN_NAME = 'given_name',

  GMAIL_MESSAGE_METADATA_ALL = 'gmailMessageMetadata.all',
  GMAIL_MESSAGE_METADATA_DELETE = 'gmailMessageMetadata.delete',
  GMAIL_MESSAGE_METADATA_READ = 'gmailMessageMetadata.read',
  GMAIL_MESSAGE_METADATA_WRITE = 'gmailMessageMetadata.write',

  IMPORTS_ALL = 'imports.all',
  IMPORTS_DELETE = 'imports.delete',
  IMPORTS_READ = 'imports.read',
  IMPORTS_WRITE = 'imports.write',

  JOB_ROLES_ALL = 'jobRoles.all',
  JOB_ROLES_DELETE = 'jobRoles.delete',
  JOB_ROLES_READ = 'jobRoles.read',
  JOB_ROLES_WRITE = 'jobRoles.write',

  LICENSES_ALL = 'licenses.all',
  LICENSES_DELETE = 'licenses.delete',
  LICENSES_READ = 'licenses.read',
  LICENSES_WRITE = 'licenses.write',

  MAIL_ALIASES_DELETE = 'mailAliases.delete',
  MAIL_ALIASES_WRITE = 'mailAliases.write',

  MAILBOX_CONTACTS_ALL = 'mailboxContacts.all',
  MAILBOX_CONTACTS_DELETE = 'mailboxContacts.delete',
  MAILBOX_CONTACTS_READ = 'mailboxContacts.read',
  MAILBOX_CONTACTS_WRITE = 'mailboxContacts.write',

  MAILBOXES_ALL = 'mailboxes.all',
  MAILBOXES_DELETE = 'mailboxes.delete',
  MAILBOXES_READ = 'mailboxes.read',
  MAILBOXES_WRITE = 'mailboxes.write',

  MAILINGS_ALL = 'mailings.all',
  MAILINGS_DELETE = 'mailings.delete',
  MAILINGS_READ = 'mailings.read',
  MAILINGS_WRITE = 'mailings.write',

  MAIL_ALIASES_ALL = 'mailAliases.all',
  MAIL_ALIASES_READ = 'mailAliases.read',

  MEETING_FIELDS_ALL = 'meetingFields.all',
  MEETING_FIELDS_DELETE = 'meetingFields.delete',
  MEETING_FIELDS_READ = 'meetingFields.read',
  MEETING_FIELDS_WRITE = 'meetingFields.write',

  MEETING_TYPES_ALL = 'meetingTypes.all',
  MEETING_TYPES_DELETE = 'meetingTypes.delete',
  MEETING_TYPES_READ = 'meetingTypes.read',
  MEETING_TYPES_WRITE = 'meetingTypes.write',

  OPENID = 'openid',

  OPPORTUNITIES_ALL = 'opportunities.all',
  OPPORTUNITIES_DELETE = 'opportunities.delete',
  OPPORTUNITIES_READ = 'opportunities.read',
  OPPORTUNITIES_WRITE = 'opportunities.write',

  OPPORTUNITY_HEALTH_FACTORS_ALL = 'opportunityHealthFactors.all',
  OPPORTUNITY_HEALTH_FACTORS_DELETE = 'opportunityHealthFactors.delete',
  OPPORTUNITY_HEALTH_FACTORS_READ = 'opportunityHealthFactors.read',
  OPPORTUNITY_HEALTH_FACTORS_WRITE = 'opportunityHealthFactors.write',

  OPPORTUNITY_PROSPECT_ROLES_ALL = 'opportunityProspectRoles.all',
  OPPORTUNITY_PROSPECT_ROLES_DELETE = 'opportunityProspectRoles.delete',
  OPPORTUNITY_PROSPECT_ROLES_READ = 'opportunityProspectRoles.read',
  OPPORTUNITY_PROSPECT_ROLES_WRITE = 'opportunityProspectRoles.write',

  OPPORTUNITY_STAGES_ALL = 'opportunityStages.all',
  OPPORTUNITY_STAGES_DELETE = 'opportunityStages.delete',
  OPPORTUNITY_STAGES_READ = 'opportunityStages.read',
  OPPORTUNITY_STAGES_WRITE = 'opportunityStages.write',

  ORGS = 'orgs',

  ORG_SETTINGS_ALL = 'orgSettings.all',
  ORG_SETTINGS_DELETE = 'orgSettings.delete',
  ORG_SETTINGS_READ = 'orgSettings.read',
  ORG_SETTINGS_WRITE = 'orgSettings.write',

  PERMISSION_GRANTS_ALL = 'permissionGrants.all',
  PERMISSION_GRANTS_DELETE = 'permissionGrants.delete',
  PERMISSION_GRANTS_READ = 'permissionGrants.read',
  PERMISSION_GRANTS_WRITE = 'permissionGrants.write',

  PERSONAS_ALL = 'personas.all',
  PERSONAS_DELETE = 'personas.delete',
  PERSONAS_READ = 'personas.read',
  PERSONAS_WRITE = 'personas.write',

  PHONE_NUMBER_PREDICTIONS_ALL = 'phoneNumberPredictions.all',
  PHONE_NUMBER_PREDICTIONS_DELETE = 'phoneNumberPredictions.delete',
  PHONE_NUMBER_PREDICTIONS_READ = 'phoneNumberPredictions.read',
  PHONE_NUMBER_PREDICTIONS_WRITE = 'phoneNumberPredictions.write',

  PHONES_ALL = 'phones.all',
  PHONES_DELETE = 'phones.delete',
  PHONES_READ = 'phones.read',
  PHONES_WRITE = 'phones.write',

  PHONE_NUMBERS_ALL = 'phoneNumbers.all',
  PHONE_NUMBERS_DELETE = 'phoneNumbers.delete',
  PHONE_NUMBERS_READ = 'phoneNumbers.read',
  PHONE_NUMBERS_WRITE = 'phoneNumbers.write',

  PLACEHOLDERS_ALL = 'placeholders.all',
  PLACEHOLDERS_DELETE = 'placeholders.delete',
  PLACEHOLDERS_READ = 'placeholders.read',
  PLACEHOLDERS_WRITE = 'placeholders.write',

  PLUGINS_ALL = 'plugins.all',
  PLUGINS_DELETE = 'plugins.delete',
  PLUGINS_READ = 'plugins.read',
  PLUGINS_WRITE = 'plugins.write',

  PROFILES_ALL = 'profiles.all',
  PROFILES_DELETE = 'profiles.delete',
  PROFILES_READ = 'profiles.read',
  PROFILES_WRITE = 'profiles.write',

  PROFILE = 'profile',

  PROSPECT_OPT_OUTS_ALL = 'prospectOptOuts.all',
  PROSPECT_OPT_OUTS_DELETE = 'prospectOptOuts.delete',
  PROSPECT_OPT_OUTS_READ = 'prospectOptOuts.read',
  PROSPECT_OPT_OUTS_WRITE = 'prospectOptOuts.write',

  PROSPECTS_ALL = 'prospects.all',
  PROSPECTS_DELETE = 'prospects.delete',
  PROSPECTS_READ = 'prospects.read',
  PROSPECTS_WRITE = 'prospects.write',

  READ_ACCOUNTS = 'read_accounts',
  READ_ACTIVITIES = 'read_activities',
  READ_CALLS = 'read_calls',
  READ_CALL_DISPOSITIONS = 'read_call_dispositions',
  READ_CALL_PURPOSES = 'read_call_purposes',
  READ_MAILINGS = 'read_mailings',
  READ_MAPPINGS = 'read_mappings',
  READ_PLUGINS = 'read_plugins',
  READ_PROSPECTS = 'read_prospects',
  READ_SEQUENCES = 'read_sequences',
  READ_TAGS = 'read_tags',
  READ_USERS = 'read_users',

  RECIPIENTS_ALL = 'recipients.all',
  RECIPIENTS_DELETE = 'recipients.delete',
  RECIPIENTS_READ = 'recipients.read',
  RECIPIENTS_WRITE = 'recipients.write',

  RECORD_ACTOR_ASSIGNMENTS_ALL = 'recordActorAssignments.all',
  RECORD_ACTOR_ASSIGNMENTS_DELETE = 'recordActorAssignments.delete',
  RECORD_ACTOR_ASSIGNMENTS_READ = 'recordActorAssignments.read',
  RECORD_ACTOR_ASSIGNMENTS_WRITE = 'recordActorAssignments.write',

  REFERRAL_PREDICTIONS_ALL = 'referralPredictions.all',
  REFERRAL_PREDICTIONS_DELETE = 'referralPredictions.delete',
  REFERRAL_PREDICTIONS_READ = 'referralPredictions.read',
  REFERRAL_PREDICTIONS_WRITE = 'referralPredictions.write',

  RETURN_DATE_PREDICTIONS_ALL = 'returnDatePredictions.all',
  RETURN_DATE_PREDICTIONS_DELETE = 'returnDatePredictions.delete',
  RETURN_DATE_PREDICTIONS_READ = 'returnDatePredictions.read',
  RETURN_DATE_PREDICTIONS_WRITE = 'returnDatePredictions.write',

  ROLES_ALL = 'roles.all',
  ROLES_DELETE = 'roles.delete',
  ROLES_READ = 'roles.read',
  ROLES_WRITE = 'roles.write',

  RULE_SETS_ALL = 'rulesets.all',
  RULE_SETS_DELETE = 'rulesets.delete',
  RULE_SETS_READ = 'rulesets.read',
  RULE_SETS_WRITE = 'rulesets.write',

  SCHEDULES_ALL = 'schedules.all',
  SCHEDULES_DELETE = 'schedules.delete',
  SCHEDULES_READ = 'schedules.read',
  SCHEDULES_WRITE = 'schedules.write',

  SCIM = 'scim',

  SEQUENCE_STATE_RECIPIENTS_ALL = 'sequenceStateRecipients.all',
  SEQUENCE_STATE_RECIPIENTS_DELETE = 'sequenceStateRecipients.delete',
  SEQUENCE_STATE_RECIPIENTS_READ = 'sequenceStateRecipients.read',
  SEQUENCE_STATE_RECIPIENTS_WRITE = 'sequenceStateRecipients.write',

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

  SMART_VIEW_NOTIFICATIONS_ALL = 'smartViewNotifications.all',
  SMART_VIEW_NOTIFICATIONS_DELETE = 'smartViewNotifications.delete',
  SMART_VIEW_NOTIFICATIONS_READ = 'smartViewNotifications.read',
  SMART_VIEW_NOTIFICATIONS_WRITE = 'smartViewNotifications.write',

  SMART_VIEWS_ALL = 'smartViews.all',
  SMART_VIEWS_DELETE = 'smartViews.delete',
  SMART_VIEWS_READ = 'smartViews.read',
  SMART_VIEWS_WRITE = 'smartViews.write',

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

  TASK_THEMES_ALL = 'taskThemes.all',
  TASK_THEMES_DELETE = 'taskThemes.delete',
  TASK_THEMES_READ = 'taskThemes.read',
  TASK_THEMES_WRITE = 'taskThemes.write',

  TASK_PRIORITIES_ALL = 'taskPriorities.all',
  TASK_PRIORITIES_DELETE = 'taskPriorities.delete',
  TASK_PRIORITIES_READ = 'taskPriorities.read',
  TASK_PRIORITIES_WRITE = 'taskPriorities.write',

  TEAM_MEMBERSHIPS_ALL = 'teamMemberships.all',
  TEAM_MEMBERSHIPS_DELETE = 'teamMemberships.delete',
  TEAM_MEMBERSHIPS_READ = 'teamMemberships.read',
  TEAM_MEMBERSHIPS_WRITE = 'teamMemberships.write',

  TEAMS_ALL = 'teams.all',
  TEAMS_DELETE = 'teams.delete',
  TEAMS_READ = 'teams.read',
  TEAMS_WRITE = 'teams.write',

  TEMPLATES_ALL = 'templates.all',
  TEMPLATES_DELETE = 'templates.delete',
  TEMPLATES_READ = 'templates.read',
  TEMPLATES_WRITE = 'templates.write',

  TRIGGERS_ALL = 'triggers.all',
  TRIGGERS_DELETE = 'triggers.delete',
  TRIGGERS_READ = 'triggers.read',
  TRIGGERS_WRITE = 'triggers.write',

  UPDATE_PROSPECTS = 'update_prospects',
  UPDATE_SEQUENCES = 'update_sequences',

  USER_LICENSES_ALL = 'userLicenses.all',
  USER_LICENSES_DELETE = 'userLicenses.delete',
  USER_LICENSES_READ = 'userLicenses.read',
  USER_LICENSES_WRITE = 'userLicenses.write',

  USER_RESOURCE_PERMISSIONS_ALL = 'userResourcePermissions.all',
  USER_RESOURCE_PERMISSIONS_DELETE = 'userResourcePermissions.delete',
  USER_RESOURCE_PERMISSIONS_READ = 'userResourcePermissions.read',
  USER_RESOURCE_PERMISSIONS_WRITE = 'userResourcePermissions.write',

  USERS_ALL = 'users.all',
  USERS_DELETE = 'users.delete',
  USERS_READ = 'users.read',
  USERS_WRITE = 'users.write',

  WEBHOOKS_ALL = 'webhooks.all',
  WEBHOOKS_DELETE = 'webhooks.delete',
  WEBHOOKS_READ = 'webhooks.read',
  WEBHOOKS_WRITE = 'webhooks.write',
}
