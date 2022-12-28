<!-- omit in toc -->

# Outreach API scopes

If an application needs access to Outreach API it needs to define one or more of
[API scopes](https://api.outreach.io/api/v2/docs#authorization) it needs. The Outreach user will then need to consent
with the granting impersonalized API access with requested scopes.

From [Outreach API](https://api.outreach.io/api/v2/docs#authorization) documentation

> Authorization scopes let you specify exactly what type and level of access your application requires. Your OAuth
> application’s scopes describe the possible set of values that may be requested, but the specific scopes requested
> during the authentication process are what will be applied to the resulting access token and used to restrict and
> permit application access.
>
> Scopes are strings containing two parts: the first part is a pluralized resource name (e.g. prospects); the second
> part is a token — read, write, delete or all — that describes the level of access permitted. For example, the scopes
> prospects.read and prospects.all would both grant access to read prospects, while only the latter would permit write
> and delete access. Scopes are not additive; the prospects.write scope does not grant read access.

All of the [SDK scopes](../src/manifest/api/Scopes.ts) are resource grouped in:

- **accounts** (accounts all|delete|read|write)
- **audits** (audits read)
- **calls** (calls all|delete|read|write)
- **call dispositions** (call dispositions all|delete|read|write)
- **call purposes** (call purposes all|delete|read|write)
- **compliance requests** (compliance requests all|read|write)
- **content categories** (content categories all|delete|read|write)
- **content category_memberships** (content category_memberships all|delete|read|write)
- **content category_ownerships** (content category_ownerships all|delete|read|write)
- **custom duties** (custom duties write)
- **duties** (duties read)
- **email addresses** (email addresses all|delete|read|write)
- **events** (events all|read|write)
- **favorites** (favorites all|delete|read|write)
- **job roles** (job roles all|read|write)
- **mail aliases** (mail aliases read)
- **mailboxes** (mailboxes all|delete|read|write)
- **mailings** (mailings all|read|write)
- **messenger conversations** (messenger conversations all|read|write)
- **messenger messages** (messenger messages all|read|write)
- **opportunities** (opportunities all|delete|read|write)
- **opportunity prospect_roles** (opportunity prospect_roles all|delete|read|write)
- **opportunity stages** (opportunity stages all|delete|read|write)
- **personas** (personas all|delete|read|write)
- **phone numbers** (phone numbers all|delete|read|write)
- **profiles** (profiles all|delete|read|write)
- **prospects** (prospects all|delete|read|write)
- **recipients** (recipients all|delete|read|write)
- **record actor_assignments** (record actor_assignments all|delete|read|write)
- **roles** (roles all|delete|read|write)
- **rulesets** (rulesets all|delete|read|write)
- **sequences** (sequences all|delete|read|write)
- **sequence states** (sequence states all|delete|read|write)
- **sequence steps** (sequence steps all|delete|read|write)
- **sequence templates** (sequence templates all|delete|read|write)
- **snippets** (snippets all|delete|read|write)
- **stages** (stages all|delete|read|write)
- **tasks** (tasks all|delete|read|write)
- **task priorities** (task priorities read)
- **teams** (teams all|delete|read|write)
- **templates** (templates all|delete|read|write)
- **users** (users all|read|write|aggregate)
- **webhooks** (webhooks all|delete|read|write)
- **scim** (scim)
