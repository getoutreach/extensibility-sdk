import { ProspectContext } from '../src/context/host/ProspectContext';
import { initProspectContext, toProspectParams } from '../src/context/host/ProspectContextUtils';
import { ContextParam } from '../src/context/host/ContextParam';
import { ExternalInfoProvider } from '../src/context/host/ExternalInfoProvider';
import { ProspectContextKeys } from '../src/context/keys/ProspectContextKeys';

describe('ProspectContextUtils', () => {
  it('will pack the external info', () => {
    var ctx = new ProspectContext();
    ctx.externalInfo = [
      { id: '1', enabled: true, provider: ExternalInfoProvider.SALESFORCE, type: 'type-1', name: 'name-1' },
      { id: '2', enabled: true, provider: ExternalInfoProvider.DYNAMICS, type: 'type-2', name: 'name-2' },
    ];

    var params = toProspectParams(ctx);

    expect(params.length).toBe(1);
    expect(params[0].key).toBe(ProspectContextKeys.EXTERNAL);
    expect(params[0].value).toBe(
      '[{"e":true,"i":"1","n":"name-1","p":1,"t":"type-1"},{"e":true,"i":"2","n":"name-2","p":2,"t":"type-2"}]'
    );
  });

  it('will unpack external info', () => {
    var ctx = new ProspectContext();
    var params: ContextParam = {
      key: ProspectContextKeys.EXTERNAL,
      value: '[{"e":true,"i":"1","n":"name-1","p":1,"t":"type-1"},{"e":true,"i":"2","n":"name-2","p":2,"t":"type-2"}]',
    };

    const result = initProspectContext(ctx, params);
    expect(result).toBe(true);
    expect(ctx.externalInfo.length).toBe(2);

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
      provider: ExternalInfoProvider.DYNAMICS,
      type: 'type-2',
      name: 'name-2',
      lastInbound: null,
      lastOutbound: null,
    });
  });
});
