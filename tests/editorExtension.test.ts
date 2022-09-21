import { EditorExtension } from '../src/manifest/extensions/editor/EditorExtension';

import { UserContext } from '../src/context/host/UserContext';
import { UserContextKeys } from '../src/context/keys/UserContextKeys';
import { OutreachContext } from '../src/context/OutreachContext';
import { EditorRegion } from '../src/manifest/extensions/editor/EditorRegion';
import { OrganizationContext } from '../src/context/host/OrganizationContext';
import { OpportunityContextKeys } from '../src';

describe('EditorExtension init tests', () => {
  test('init will tokenize host url', () => {
    const editorExt = getValidShellEditorExtension();
    editorExt.host.url = 'https://app-host.com/{org.id}?usr={usr.id}';
    editorExt.init(getOutreachContext());

    expect(editorExt.host.url).toBe('https://app-host.com/org-id-123?usr=usr-id-123');
  });
});

describe('EditorExtension validate tests', () => {
  test('title is optional', () => {
    const editorExt = getValidShellEditorExtension();
    delete editorExt.title;
    var issues = editorExt.validate();
    expect(issues.length).toBe(0);
  });

  describe('host', () => {
    test('host has to be defined', () => {
      const editorExt = getValidShellEditorExtension();
      delete (editorExt as any).host;
      var issues = editorExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host section is missing.');
    });

    test('host.url - only url should be acceptable', () => {
      const editorExt = getValidShellEditorExtension();
      editorExt.host.url = 'BANANAS';
      var issues = editorExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host url is invalid. Value: BANANAS');
    });

    test('host.url - tokenized url should be acceptable', () => {
      const editorExt = getValidShellEditorExtension();
      editorExt.host.url = 'https://tokenizedurl.com/?uid={usr.id}';
      var issues = editorExt.validate();
      expect(issues.length).toBe(0);
    });

    test('host.icon - only url should be acceptable', () => {
      const editorExt = getValidShellEditorExtension();
      editorExt.host.icon = 'bananas';
      var issues = editorExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host icon definition is invalid url. Value: bananas');
    });

    test('only valid type should be acceptable', () => {
      const editorExt = getValidShellEditorExtension() as EditorExtension;
      editorExt.type = 'BANANAS' as any;
      var issues = editorExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host type  is invalid. Value: BANANAS');
    });

    test('invalid height will be rejected', () => {
      const editorExt = getValidShellEditorExtension() as EditorExtension;
      editorExt.settings!.recommended!.height = 'BANANAS' as any;
      var issues = editorExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host height is not a number. Value: BANANAS');
    });

    test('invalid width will be rejected', () => {
      const editorExt = getValidShellEditorExtension() as EditorExtension;
      editorExt.settings!.recommended!.width = 'BANANAS' as any;
      var issues = editorExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Host width is not a number. Value: BANANAS');
    });

    test('missing width will be rejected', () => {
      const editorExt = getValidShellEditorExtension() as EditorExtension;
      delete (editorExt.settings?.recommended as any).width;
      var issues = editorExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Both width and height has to be defined - width is missing');
    });

    test('missing height will be rejected', () => {
      const editorExt = getValidShellEditorExtension() as EditorExtension;
      delete (editorExt.settings?.recommended as any).height;
      var issues = editorExt.validate();
      expect(issues.length).toBe(1);
      expect(issues[0]).toBe('Both width and height has to be defined - height is missing');
    });

    describe('regions', () => {
      test('is an array', () => {
        const editorExt = getValidShellEditorExtension();
        editorExt.regions = EditorRegion.SEQUENCE as any;
        var issues = editorExt.validate();

        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Regions is not an array. Value: sequenceEditor');
      });
      test('is rejecting invalid values', () => {
        const editorExt = getValidShellEditorExtension();
        editorExt.regions = ['bananas', EditorRegion.SEQUENCE] as any;
        var issues = editorExt.validate();

        expect(issues.length).toBe(1);
        expect(issues[0]).toBe('Editor region is having invalid value. Value: bananas');
      });
    });
  });

  describe('context', () => {
    test('only valid application contexts should be acceptable for editor extension', () => {
      const editorExt = getValidShellEditorExtension();
      editorExt.context = ['bananas', UserContextKeys.ID, OpportunityContextKeys.ID, 'apples'] as any;

      var issues = editorExt.validate();
      expect(issues.length).toBe(3);
      expect(issues[0]).toBe(
        'Context key is not one of the valid values for the application tab extension. Key: bananas'
      );
      expect(issues[1]).toBe(
        'Context key is not one of the valid values for the application tab extension. Key: opp.id'
      );
      expect(issues[2]).toBe(
        'Context key is not one of the valid values for the application tab extension. Key: apples'
      );
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

const getValidShellEditorExtension = (): EditorExtension => {
  var editorExtension = new EditorExtension();
  editorExtension.identifier = 'shell-editor-ext';
  editorExtension.host = {
    icon: 'http://someurl.com/favicon.png',
    url: 'http://someurl.com/host',
  };
  editorExtension.version = '0.99';
  editorExtension.context = [UserContextKeys.ID];

  editorExtension.regions = [EditorRegion.SEQUENCE, EditorRegion.TASK_FLOW];
  editorExtension.settings = {
    recommended: {
      height: 800,
      width: 600,
    },
  };

  return editorExtension;
};
