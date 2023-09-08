import { OpportunityContext } from '../src/context/host/OpportunityContext';
import { initOpportunityContext, toOpportunityParams } from '../src/context/host/OpportunityContextUtils';
import { ContextParam } from '../src/context/host/ContextParam';
import { ExternalInfoProvider } from '../src/context/host/ExternalInfoProvider';
import { OpportunityContextKeys } from '../src/context/keys/OpportunityContextKeys';

describe('OpportunityContextUtils', () => {
  let ctx: OpportunityContext;
  beforeEach(() => {
    ctx = new OpportunityContext();
  });

  it('will pack the external info', () => {
    ctx.externalInfo = [
      { id: '1', enabled: true, provider: ExternalInfoProvider.SALESFORCE, type: 'type-1', name: 'name-1' },
      { id: '2', enabled: true, provider: ExternalInfoProvider.SALESFORCE_SANDBOX, type: 'type-2', name: 'name-2' },
      { id: '3', enabled: true, provider: ExternalInfoProvider.DYNAMICS, type: 'type-3', name: 'name-3' },
    ];

    var params = toOpportunityParams(ctx);

    expect(params.length).toBe(1);
    expect(params[0].key).toBe(OpportunityContextKeys.EXTERNAL);
    expect(params[0].value).toBe(
      '[{"e":true,"i":"1","n":"name-1","p":1,"t":"type-1"},{"e":true,"i":"2","n":"name-2","p":2,"t":"type-2"},{"e":true,"i":"3","n":"name-3","p":3,"t":"type-3"}]'
    );
  });

  it('will unpack external info', () => {
    var params: ContextParam = {
      key: OpportunityContextKeys.EXTERNAL,
      value:
        '[{"e":true,"i":"1","n":"name-1","p":1,"t":"type-1"},{"e":true,"i":"2","n":"name-2","p":2,"t":"type-2"},{"e":true,"i":"3","n":"name-3","p":3,"t":"type-3"}]',
    };

    const result = initOpportunityContext(ctx, params);
    expect(result).toBe(true);
    expect(ctx.externalInfo.length).toBe(3);

    expect(ctx.externalInfo[0]).toEqual({
      id: '1',
      enabled: true,
      provider: ExternalInfoProvider.SALESFORCE,
      type: 'type-1',
      name: 'name-1',
      lastInbound: null,
      lastOutbound: null,
    });

    expect(ctx.externalInfo[1]).toEqual({
      id: '2',
      enabled: true,
      provider: ExternalInfoProvider.SALESFORCE_SANDBOX,
      type: 'type-2',
      name: 'name-2',
      lastInbound: null,
      lastOutbound: null,
    });

    expect(ctx.externalInfo[2]).toEqual({
      id: '3',
      enabled: true,
      provider: ExternalInfoProvider.DYNAMICS,
      type: 'type-3',
      name: 'name-3',
      lastInbound: null,
      lastOutbound: null,
    });
  });

  describe('account properties', () => {
    describe('initOpportunityContext', () => {
      it('account custom id will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.ACCOUNT_CUSTOM_ID,
          value: 'some-value',
        });
        expect(ctx.accountCustomId).toBe('some-value');
      });

      it('account domain context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.ACCOUNT_DOMAIN,
          value: 'some-value',
        });
        expect(ctx.accountDomain).toBe('some-value');
      });
      it('account external id context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.ACCOUNT_EXTERNAL_ID,
          value: 'some-value',
        });
        expect(ctx.accountExternalId).toBe('some-value');
      });
      it('account domain external provider will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.ACCOUNT_EXTERNAL_PROVIDER,
          value: 'some-value',
        });
        expect(ctx.accountExternalProvider).toBe('some-value');
      });
      it('account id context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.ACCOUNT_ID,
          value: 'some-value',
        });
        expect(ctx.accountId).toBe('some-value');
      });
      it('account name context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.ACCOUNT_NAME,
          value: 'some-value',
        });
        expect(ctx.accountName).toBe('some-value');
      });
    });

    describe('toOpportunityParams', () => {
      it('will pack account custom id', () => {
        ctx.accountCustomId = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.ACCOUNT_CUSTOM_ID);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack account domain', () => {
        ctx.accountDomain = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.ACCOUNT_DOMAIN);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack account external id', () => {
        ctx.accountExternalId = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.ACCOUNT_EXTERNAL_ID);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack account external provider', () => {
        ctx.accountExternalProvider = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.ACCOUNT_EXTERNAL_PROVIDER);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack account id', () => {
        ctx.accountId = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.ACCOUNT_ID);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack account name', () => {
        ctx.accountName = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.ACCOUNT_NAME);
        expect(params[0].value).toBe('some-value');
      });
    });
  });

  describe('owner properties', () => {
    describe('initOpportunityContext', () => {
      it('owner email context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.OWNER_EMAIL,
          value: 'some-value',
        });
        expect(ctx.ownerEmail).toBe('some-value');
      });
      it('owner id context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.OWNER_ID,
          value: 'some-value',
        });
        expect(ctx.ownerGlobalId).toBe('some-value');
      });
      it('owner name will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.OWNER_NAME,
          value: 'some-value',
        });
        expect(ctx.ownerName).toBe('some-value');
      });
      it('owner user name context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.OWNER_USER,
          value: 'some-value',
        });
        expect(ctx.ownerUsername).toBe('some-value');
      });
    });

    describe('toOpportunityParams', () => {
      it('will pack owner email', () => {
        ctx.ownerEmail = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.OWNER_EMAIL);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack owner id', () => {
        ctx.ownerGlobalId = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.OWNER_ID);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack owner name', () => {
        ctx.ownerName = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.OWNER_NAME);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack owner user', () => {
        ctx.ownerUsername = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.OWNER_USER);
        expect(params[0].value).toBe('some-value');
      });
    });
  });

  describe('external provider properties', () => {
    describe('initOpportunityContext', () => {
      it('external created at context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.EXTERNAL_CREATED_AT,
          value: '2100-01-01',
        });
        expect(ctx.externalCreatedAt).toStrictEqual(new Date('2100-01-01'));
      });
      it('external provider id context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.EXTERNAL_ID,
          value: 'some-value',
        });
        expect(ctx.externalProviderId).toBe('some-value');
      });
      it('external provider name context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.EXTERNAL_PROVIDER,
          value: 'some-value',
        });
        expect(ctx.externalProviderName).toBe('some-value');
      });
    });

    describe('toOpportunityParams', () => {
      it('will pack external created at', () => {
        const date = new Date('2021-01-01T00:00:00.000Z');

        ctx.externalCreatedAt = date;
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.EXTERNAL_CREATED_AT);
        expect(params[0].value).toBe(date.toString());
      });
      it('will pack external provider id', () => {
        ctx.externalProviderId = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.EXTERNAL_ID);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack external provider name', () => {
        ctx.externalProviderName = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.EXTERNAL_PROVIDER);
        expect(params[0].value).toBe('some-value');
      });
    });
  });

  describe('opportunity properties', () => {
    describe('initOpportunityContext', () => {
      it('description context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.DESCRIPTION,
          value: 'some-value',
        });
        expect(ctx.description).toBe('some-value');
      });
      it('id context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.ID,
          value: 'some-value',
        });
        expect(ctx.id).toBe('some-value');
      });
      it('name context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.NAME,
          value: 'some-value',
        });
        expect(ctx.name).toBe('some-value');
      });
      it('next step context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.NEXT_STEP,
          value: 'some-value',
        });
        expect(ctx.nextStep).toBe('some-value');
      });
      it('opportunity type context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.TYPE,
          value: 'some-value',
        });
        expect(ctx.opportunityType).toBe('some-value');
      });
      it('probability context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.PROBABILITY,
          value: 'some-value',
        });
        expect(ctx.probability).toBe('some-value');
      });
      it('stage context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.STAGE,
          value: 'some-value',
        });
        expect(ctx.stage).toBe('some-value');
      });
      it('tags context will be set', () => {
        initOpportunityContext(ctx, {
          key: OpportunityContextKeys.TAGS,
          value: 'some-value',
        });
        expect(ctx.tags).toBe('some-value');
      });
    });

    describe('toOpportunityParams', () => {
      it('will pack description', () => {
        ctx.description = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.DESCRIPTION);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack id', () => {
        ctx.id = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.ID);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack name', () => {
        ctx.name = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.NAME);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack next step', () => {
        ctx.nextStep = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.NEXT_STEP);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack opportunity type', () => {
        ctx.opportunityType = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.TYPE);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack probability', () => {
        ctx.probability = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.PROBABILITY);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack stage', () => {
        ctx.stage = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.STAGE);
        expect(params[0].value).toBe('some-value');
      });
      it('will pack tags', () => {
        ctx.tags = 'some-value';
        const params = toOpportunityParams(ctx);
        expect(params.length).toBe(2);
        expect(params[0].key).toBe(OpportunityContextKeys.TAGS);
        expect(params[0].value).toBe('some-value');
      });
    });
  });
});
