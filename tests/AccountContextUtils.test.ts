import { AccountContext } from '../src/context/host/AccountContext';
import { initAccountContext, toAccountParams } from '../src/context/host/AccountContextUtils';
import { ContextParam } from '../src/context/host/ContextParam';
import { ExternalInfoProvider } from '../src/context/host/ExternalInfoProvider';
import { AccountContextKeys } from '../src/context/keys/AccountContextKeys';

describe('AccountContextUtils', () => {
  it('will pack the external info', () => {
    var ctx = new AccountContext();
    ctx.externalInfo = [
      { id: '1', enabled: true, provider: ExternalInfoProvider.SALESFORCE, type: 'type-1', name: 'name-1' },
      { id: '2', enabled: true, provider: ExternalInfoProvider.SALESFORCE_SANDBOX, type: 'type-2', name: 'name-2' },
      { id: '3', enabled: true, provider: ExternalInfoProvider.DYNAMICS, type: 'type-3', name: 'name-3' },
    ];

    var params = toAccountParams(ctx);

    expect(params.length).toBe(1);
    expect(params[0].key).toBe(AccountContextKeys.EXTERNAL);
    expect(params[0].value).toBe(
      '[{"e":true,"i":"1","n":"name-1","p":1,"t":"type-1"},{"e":true,"i":"2","n":"name-2","p":2,"t":"type-2"},{"e":true,"i":"3","n":"name-3","p":3,"t":"type-3"}]'
    );
  });

  it('will unpack external info', () => {
    var ctx = new AccountContext();
    var params: ContextParam = {
      key: AccountContextKeys.EXTERNAL,
      value: '[{"e":true,"i":"1","n":"name-1","p":1,"t":"type-1"},{"e":true,"i":"2","n":"name-2","p":2,"t":"type-2"},{"e":true,"i":"3","n":"name-3","p":3,"t":"type-3"}]',
    };

    const result = initAccountContext(ctx, params);
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
});
