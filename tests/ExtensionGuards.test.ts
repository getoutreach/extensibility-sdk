import {
  EditorExtension,
  Extension,
  ExtensionType,
  MailingLinksDataExtension,
  ProspectEventsDataExtension,
} from '../src';
import {
  isAccountTabExtension,
  isAccountTileExtension,
  isActionShellExtension,
  isApplicationShellExtension,
  isCompanionShellExtension,
  isContentEditorExtension,
  isDataMailingExtension,
  isHomeEmailTileExtension,
  isHomeTasksTileExtension,
  isIconExtension,
  isKnowledgeShellExtension,
  isOpportunityTabExtension,
  isOpportunityTileExtension,
  isProspectActionExtension,
  isProspectTabExtension,
  isProspectTileExtension,
  isReportsTabExtension,
  isSidekickShellExtension,
  isToolShellExtension,
} from '../src/manifest/extensions/ExtensionGuards';
import { ActionShellExtension } from '../src/manifest/extensions/shell/types/ActionShellExtension';
import { ApplicationShellExtension } from '../src/manifest/extensions/shell/types/ApplicationShellExtension';
import { CompanionShellExtension } from '../src/manifest/extensions/shell/types/CompanionShellExtension';
import { KnowledgeShellExtension } from '../src/manifest/extensions/shell/types/KnowledgeShellExtension';
import { SidekickShellExtension } from '../src/manifest/extensions/shell/types/SidekickShellExtension';
import { ToolShellExtension } from '../src/manifest/extensions/shell/types/ToolShellExtension';
import { AccountTabExtension } from '../src/manifest/extensions/tabs/types/AccountTabExtension';
import { OpportunityTabExtension } from '../src/manifest/extensions/tabs/types/OpportunityTabExtension';
import { ProspectActionTabExtension } from '../src/manifest/extensions/tabs/types/ProspectActionTabExtension';
import { ProspectTabExtension } from '../src/manifest/extensions/tabs/types/ProspectTabExtension';
import { ReportsTabExtension } from '../src/manifest/extensions/tabs/types/ReportsTabExtension';
import { AccountTileExtension } from '../src/manifest/extensions/tiles/types/AccountTileExtension';
import { HomeEmailsTileExtension } from '../src/manifest/extensions/tiles/types/HomeEmailsTileExtension';
import { HomeTasksTileExtension } from '../src/manifest/extensions/tiles/types/HomeTasksTileExtension';
import { OpportunityTileExtension } from '../src/manifest/extensions/tiles/types/OpportunityTileExtension';
import { ProspectTileExtension } from '../src/manifest/extensions/tiles/types/ProspectTileExtension';

describe('ExtensionGuards', () => {
  describe.each([
    [new AccountTileExtension(), isAccountTileExtension, true],
    [new SidekickShellExtension(), isAccountTileExtension, false],
    [new ActionShellExtension(), isActionShellExtension, true],
    [new SidekickShellExtension(), isActionShellExtension, false],
    [new ApplicationShellExtension(), isApplicationShellExtension, true],
    [new SidekickShellExtension(), isApplicationShellExtension, false],
    [new CompanionShellExtension(), isCompanionShellExtension, true],
    [new SidekickShellExtension(), isCompanionShellExtension, false],
    [new KnowledgeShellExtension(), isKnowledgeShellExtension, true],
    [new SidekickShellExtension(), isKnowledgeShellExtension, false],
    [new ToolShellExtension(), isToolShellExtension, true],
    [new SidekickShellExtension(), isToolShellExtension, false],
    [new AccountTabExtension(), isAccountTabExtension, true],
    [new SidekickShellExtension(), isAccountTabExtension, false],
    [new OpportunityTabExtension(), isOpportunityTabExtension, true],
    [new SidekickShellExtension(), isOpportunityTabExtension, false],
    [new ProspectActionTabExtension(), isProspectActionExtension, true],
    [new SidekickShellExtension(), isProspectActionExtension, false],
    [new ProspectTabExtension(), isProspectTabExtension, true],
    [new SidekickShellExtension(), isProspectTabExtension, false],
    [new ReportsTabExtension(), isReportsTabExtension, true],
    [new SidekickShellExtension(), isReportsTabExtension, false],
    [new HomeEmailsTileExtension(), isHomeEmailTileExtension, true],
    [new SidekickShellExtension(), isHomeEmailTileExtension, false],
    [new HomeTasksTileExtension(), isHomeTasksTileExtension, true],
    [new SidekickShellExtension(), isHomeTasksTileExtension, false],
    [new OpportunityTileExtension(), isOpportunityTileExtension, true],
    [new SidekickShellExtension(), isOpportunityTileExtension, false],
    [new ProspectTileExtension(), isProspectTileExtension, true],
    [new SidekickShellExtension(), isProspectTileExtension, false],
    [new EditorExtension(), isContentEditorExtension, true],
    [new SidekickShellExtension(), isContentEditorExtension, false],
    [new MailingLinksDataExtension(), isDataMailingExtension, true],
    [new SidekickShellExtension(), isDataMailingExtension, false],

    [new ApplicationShellExtension(), isIconExtension, true],
    [new AccountTileExtension(), isIconExtension, true],
    [new HomeEmailsTileExtension(), isIconExtension, true],
    [new HomeTasksTileExtension(), isIconExtension, true],
    [new ProspectTileExtension(), isIconExtension, true],
    [new OpportunityTileExtension(), isIconExtension, true],
    [new EditorExtension(), isIconExtension, true],
    [new ProspectEventsDataExtension(), isIconExtension, true],
    [new SidekickShellExtension(), isIconExtension, false],

    [new SidekickShellExtension(), isSidekickShellExtension, true],
    [new MailingLinksDataExtension(), isSidekickShellExtension, false],
  ])('extension %1', (extension: Extension, check: (ext: { type: ExtensionType }) => any, result: boolean) => {
    it('will resolve casting', () => {
      expect(check(extension)).toBe(result);
    });
  });
});
