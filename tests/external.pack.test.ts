import { ExternalInfoContext } from '../src/context/host/ExternalInfoContext';
import { ExternalInfoProvider } from '../src/context/host/ExternalInfoProvider';
import { ExternalInfoUtils } from '../src/context/host/ExternalInfoUtils';

describe('ExternalInfoProviders tests', () => {
  test('pack/unpack works fine', () => {
    const now = new Date();
    const externalContexts: ExternalInfoContext[] = [
      {
        enabled: true,
        id: '123',
        name: null,
        provider: ExternalInfoProvider.SALESFORCE,
        type: 'Lead',
        lastInbound: now,
        lastOutbound: null,
      },
      {
        enabled: false,
        id: '456',
        name: 'name',
        provider: ExternalInfoProvider.SALESFORCE_SANDBOX,
        type: 'Test',
        lastInbound: null,
        lastOutbound: now,
      },
    ];

    const packedContext = ExternalInfoUtils.pack(externalContexts);
    const unpackedContext = ExternalInfoUtils.unpack(packedContext);

    expect(externalContexts).toStrictEqual(unpackedContext);
  });
});
