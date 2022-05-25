# Reading and writing Outreach data

For every extension that your Outreach app contains you configure (in the Outreach Developer Portal) a list of data
points that your extension can read. To write back data back to Outreach use
[Outreach REST API](../docs/outreach-api.md).

## The `OutreachContext` object

`extensibilitySdk.init()` call returns a promise that resolves with the `OutreachContext` object. This object carries
all of the Outreach data available for your extension:

- `locale` - (e.g. `en`) locale currently used in the host application.
- `theme` - design theme of the host application. Possible values are `Light` or `Dark`.
- `account` - [account data](#account) configured for your extension.
- `user` - currently logged-in [user data](#user) configured for your extension.
- `organization` - [organisation data](#organization) configured for your extension.
- `opportunity` - [opportunity data](#opportunity) configured for your extension.
- `prospect` - [prospect data](#prospect) configured for your extension.
- `config` - user-specific extension [configuration](developer-portal.md#allowing-app-specific-configuration-values) (if
  any).
- `host` - info about the host application.

`user`, `organization`, `account`, `opportunity` and `prospect` object contain a subset of the corresponding data
retrievable by [Outreach API](https://api.outreach.io/api/v2/docs#account).

### User

Carries information about the currently logged-in user.

- `usr.email` - The email address of the user
- `usr.fname` - The first name of the user
- `usr.id` - User ID.
- `usr.lname` - The last name of the user.
- `usr.role`
- `usr.tit` - The user's job title (e.g., "Staff Accountant").
- `usr.uname` - A reader-friendly unique identifier of the user.
- `usr.csfX` - (where `X` is in an integer number) the value of the corresponding (1-5) user's custom fields.

### Organization

Carries information about the organisation of the currently logged-in user.

- `org.cur` - Default organization currency.
- `org.id` - Organization ID.
- `org.logo` - Organization logo url.
- `org.name` - Organization full name.
- `org.short` Organization short name.

### Account

For extensions that show up as a tab on the account detail page following account data can be made available:

- `acc.id` - ID of the account.
- `acc.cstmId` - a custom ID for the account, often referencing an ID in an external system.
- `acc.desc` - description of the account.
- `acc.dmn` - account company domain.
- `acc.extid`
- `acc.extprvd`
- `acc.loc` - the company’s primary geographic region (e.g. "Eastern USA").
- `acc.name` - the name of the company (e.g. "Acme Corporation").
- `acc.tags` - a list of tag values associated with the account (e.g. \["Enterprise", "Tier 1"\]).
- `acc.ext` - external account information.
- `acc.csfX` (where `X` is in an integer number) the value of the corresponding (1-150) account's custom field.

### Opportunity

For extensions that show up as a tab on the opportunity detail page following account data can be made available:

- `opp.amnt` - the amount the opportunity is worth.
- `opp.desc` - a description of the opportunity.
- `opp.ecrat` - the date the opportunity was created in the external system.
- `opp.extid` - retrieving external id of the Outreach prospect id in the external system.
- `opp.extprvd` - retrieving prospect provider name (Salesforce, Dynamics, etc.)
- `opp.id` - opportunity ID.
- `opp.name` - the name of the opportunity.
- `opp.ntsp` - the next step to take for the opportunity.
- `opp.prob` - the chances of the opportunity succeeding are represented as a percentage.
- `opp.tags` - tags associated with the opportunity.
- `opp.type` - the type of opportunity.
- `opp.ext` - external information associated with the opportunity.
- `opp.csfX` (where `X` is an integer number) the value of the corresponding opportunity's custom field.

### Prospect

For extensions that show up as a tab on the prospect detail page following account data can be made available:

- `pro.accnme`
- `pro.accdmn`
- `pro.adrcity` - city of the prospect.
- `pro.adrcntry` - country of the prospect.
- `pro.adrstate` - state of the prospect.
- `pro.adrstreet` - street address of the prospect.
- `pro.adrstreet2` - street address (2nd line) of the prospect.
- `pro.adrzip` - postal code of the prospect.
- `pro.avail` - the date and time the prospect is available to contact again.
- `pro.comp` - the name of the prospect company. If associated with an account, this is the name of the account. (e.g.
  Acme International).
- `pro.emails` - a list of email addresses associated with the prospect.
- `pro.loc` - the locality of the prospect's company.
- `pro.extid`
- `pro.extprvd`
- `pro.id` - the prospect id.
- `pro.tags` - list of tag values associated with the account (e.g. ["Interested", "2017 Expo"]).
- `pro.tzone` - the prospect's current timezone, preferably in the IANA format (e.g., "America/LosAngeles").
- `pro.title` - the title of the prospect.
- `pro.ext` - external information associated with the prospect.
- `pro.csf1X` (where `X` is an integer number) the value of the (1-150) prospect's custom field.
