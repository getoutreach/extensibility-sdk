import { ConnectorMcpExtension } from '../src/manifest/extensions/mcp/types/ConnectorMcpExtension';
import { OrganizationContext } from '../src/context/host/OrganizationContext';
import { UserContext } from '../src/context/host/UserContext';
import { UserContextKeys } from '../src/context/keys/UserContextKeys';
import { OutreachContext } from '../src/context/OutreachContext';
import { McpExtension } from '../src/manifest/extensions/mcp/McpExtension';
import { ProspectContextKeys } from '../src/context/keys/ProspectContextKeys';

describe('McpExtension init tests', () => {
  test('init will tokenize host url', () => {
    const mcpExt = getValidMcpConnectorExtension();
    mcpExt.host.url = 'https://app-host.com/{org.id}?usr={usr.id}';
    mcpExt.init(getOutreachContext());

    expect(mcpExt.host.url).toBe('https://app-host.com/org-id-123?usr=usr-id-123');
  });
});

describe('McpExtension validate tests', () => {
  test('title is optional', () => {
    const mcpExt = getValidMcpConnectorExtension();
    delete mcpExt.title;
    var issues = mcpExt.validate();
    expect(issues.length).toBe(0);
  });

  describe('host', () => {
    test('host has to be defined', () => {
      const mcpExt = getValidMcpConnectorExtension();
      delete (mcpExt as any).host;
      var issues = mcpExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host section is missing.');
    });

    test('host.url - only url should be acceptable', () => {
      const mcpExt = getValidMcpConnectorExtension();
      mcpExt.host.url = 'BANANAS';
      var issues = mcpExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host url is invalid. Value: BANANAS');
    });

    test('host.url - tokenized url should be acceptable', () => {
      const mcpExt = getValidMcpConnectorExtension();
      mcpExt.host.url = 'https://tokenizedurl.com/?uid={usr.id}';
      var issues = mcpExt.validate();
      expect(issues.length).toBe(0);
    });

    test('host.icon - only url should be acceptable', () => {
      const mcpExt = getValidMcpConnectorExtension();
      mcpExt.host.icon = 'bananas';
      var issues = mcpExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host icon definition is invalid url. Value: bananas');
    });

    test('only valid type should be acceptable', () => {
      const mcpExt = getValidMcpConnectorExtension() as McpExtension;
      mcpExt.type = 'BANANAS' as any;
      var issues = mcpExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host type  is invalid. Value: BANANAS');
    });
  });

  describe('context', () => {
    test('context has to be defined', () => {
      const mcpExt = getValidMcpConnectorExtension();
      delete (mcpExt as any).context;
      var issues = mcpExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Context section is missing');
    });

    test('context has to be an array', () => {
      const mcpExt = getValidMcpConnectorExtension();
      mcpExt.context = 'bananas' as any;
      var issues = mcpExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Context section is not an array. Value: bananas');
    });

    test('only valid MCP contexts should be acceptable', () => {
      const mcpExt = getValidMcpConnectorExtension();
      mcpExt.context = ['bananas', UserContextKeys.ID, ProspectContextKeys.ID, 'apples'] as any;

      var issues = mcpExt.validate();

      expect(issues.length).toBe(3);
      expect(issues[0]).toBe('Context key is not one of the valid values for the MCP extension. Key: bananas');
      expect(issues[1]).toBe('Context key is not one of the valid values for the MCP extension. Key: pro.id');
      expect(issues[2]).toBe('Context key is not one of the valid values for the MCP extension. Key: apples');
    });
  });
});

const getOutreachContext = () => {
  const context = new OutreachContext();
  context.organization = new OrganizationContext();
  context.organization.id = 'org-id-123';

  context.user = new UserContext();
  context.user.id = 'usr-id-123';

  return context;
};

const getValidMcpConnectorExtension = (): ConnectorMcpExtension => {
  var mcpExtension = new ConnectorMcpExtension();
  mcpExtension.identifier = 'mcp-connector-addon';
  mcpExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };
  mcpExtension.context = [UserContextKeys.ID];

  return mcpExtension;
};
