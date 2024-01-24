/* eslint-disable no-unused-vars */

/**
 * List of Outreach API S2S scopes app can request
 *
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/scopes.md
 * @export
 * @enum {number}
 */
export enum ScopesS2S {
  ACCOUNTS_ALL = 'accounts.all',
  ACCOUNTS_DELETE = 'accounts.delete',
  ACCOUNTS_READ = 'accounts.read',
  ACCOUNTS_WRITE = 'accounts.write',

  AUDIT_LOGS_READ = 'auditLogs.read',

  CALLS_ALL = 'calls.all',
  CALLS_DELETE = 'calls.delete',
  CALLS_READ = 'calls.read',
  CALLS_WRITE = 'calls.write',

  EVENTS_ALL = 'events.all',
  EVENTS_READ = 'events.read',
  EVENTS_WRITE = 'events.write',

  MAILINGS_READ = 'mailings.read',

  OPPORTUNITIES_ALL = 'opportunities.all',
  OPPORTUNITIES_DELETE = 'opportunities.delete',
  OPPORTUNITIES_READ = 'opportunities.read',
  OPPORTUNITIES_WRITE = 'opportunities.write',

  PROSPECTS_ALL = 'prospects.all',
  PROSPECTS_DELETE = 'prospects.delete',
  PROSPECTS_READ = 'prospects.read',
  PROSPECTS_WRITE = 'prospects.write',

  SEQUENCES_ALL = 'sequences.all',
  SEQUENCES_DELETE = 'sequences.delete',
  SEQUENCES_READ = 'sequences.read',
  SEQUENCES_WRITE = 'sequences.write',

  SEQUENCE_STATES_ALL = 'sequenceStates.all',
  SEQUENCE_STATES_DELETE = 'sequenceStates.delete',
  SEQUENCE_STATES_READ = 'sequenceStates.read',
  SEQUENCE_STATES_WRITE = 'sequenceStates.write',

  SNIPPETS_READ = 'snippets.read',

  TASKS_ALL = 'tasks.all',
  TASKS_DELETE = 'tasks.delete',
  TASKS_READ = 'tasks.read',
  TASKS_WRITE = 'tasks.write',

  TEMPLATES_READ = 'templates.read',

  USERS_READ = 'users.read',

  WEBHOOKS_ALL = 'webhooks.all',
  WEBHOOKS_DELETE = 'webhooks.delete',
  WEBHOOKS_READ = 'webhooks.read',
  WEBHOOKS_WRITE = 'webhooks.write',
}
