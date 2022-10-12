import { EditorExtension, MailingLinksDataExtension } from '../src';
import {
  isAccountTabExtension,
  isAccountTileExtension,
  isActionShellExtension,
  isApplicationShellExtension,
  isCompanionShellExtension,
  isEditorShellExtension,
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
  it('will cast the proper account tile extension', () => {
    const extension = new AccountTileExtension();
    expect(isAccountTileExtension(extension)).toBe(true);
  });

  it('will guard account from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isAccountTileExtension(extension)).toBe(false);
  });

  it('will cast the proper prospect tile extension', () => {
    const extension = new ProspectTileExtension();
    expect(isProspectTileExtension(extension)).toBe(true);
  });

  it('will guard prospect from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isProspectTileExtension(extension)).toBe(false);
  });

  it('will cast the proper opportunity tile extension', () => {
    const extension = new OpportunityTileExtension();
    expect(isOpportunityTileExtension(extension)).toBe(true);
  });

  it('will guard opportunity from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isOpportunityTileExtension(extension)).toBe(false);
  });

  it('will cast the proper home email tile extension', () => {
    const extension = new HomeEmailsTileExtension();
    expect(isHomeEmailTileExtension(extension)).toBe(true);
  });

  it('will guard home email from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isHomeEmailTileExtension(extension)).toBe(false);
  });

  it('will cast the proper home tasks tile extension', () => {
    const extension = new HomeTasksTileExtension();
    expect(isHomeTasksTileExtension(extension)).toBe(true);
  });

  it('will guard home tasks from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isHomeTasksTileExtension(extension)).toBe(false);
  });

  it('will cast the proper account tab extension', () => {
    const extension = new AccountTabExtension();
    expect(isAccountTabExtension(extension)).toBe(true);
  });

  it('will guard account tab from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isAccountTabExtension(extension)).toBe(false);
  });

  it('will cast the proper action shell extension', () => {
    const extension = new ActionShellExtension();
    expect(isActionShellExtension(extension)).toBe(true);
  });

  it('will guard action shell from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isActionShellExtension(extension)).toBe(false);
  });

  it('will cast the proper application shell extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isApplicationShellExtension(extension)).toBe(true);
  });

  it('will guard application shell from wrong extension', () => {
    const extension = new ActionShellExtension();
    expect(isApplicationShellExtension(extension)).toBe(false);
  });

  it('will cast the proper companion shell extension', () => {
    const extension = new CompanionShellExtension();
    expect(isCompanionShellExtension(extension)).toBe(true);
  });

  it('will guard companion shell from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isCompanionShellExtension(extension)).toBe(false);
  });

  it('will cast the proper knowledge shell extension', () => {
    const extension = new KnowledgeShellExtension();
    expect(isKnowledgeShellExtension(extension)).toBe(true);
  });

  it('will guard knowledge shell from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isKnowledgeShellExtension(extension)).toBe(false);
  });

  it('will cast the proper opportunity tab extension', () => {
    const extension = new OpportunityTabExtension();
    expect(isOpportunityTabExtension(extension)).toBe(true);
  });

  it('will guard opportunity tab from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isOpportunityTabExtension(extension)).toBe(false);
  });

  it('will cast the proper prospect action extension', () => {
    const extension = new ProspectActionTabExtension();
    expect(isProspectActionExtension(extension)).toBe(true);
  });

  it('will guard prospect action from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isProspectActionExtension(extension)).toBe(false);
  });

  it('will cast the proper prospect tab extension', () => {
    const extension = new ProspectTabExtension();
    expect(isProspectTabExtension(extension)).toBe(true);
  });

  it('will guard prospect tab from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isProspectTabExtension(extension)).toBe(false);
  });

  it('will cast the proper reports tab extension', () => {
    const extension = new ReportsTabExtension();
    expect(isReportsTabExtension(extension)).toBe(true);
  });

  it('will guard reports tab from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isReportsTabExtension(extension)).toBe(false);
  });

  it('will cast the proper sidekick shell extension', () => {
    const extension = new SidekickShellExtension();
    expect(isSidekickShellExtension(extension)).toBe(true);
  });

  it('will guard sidekick shell from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isSidekickShellExtension(extension)).toBe(false);
  });

  it('will cast the proper tool shell extension', () => {
    const extension = new ToolShellExtension();
    expect(isToolShellExtension(extension)).toBe(true);
  });

  it('will guard tool shell tab from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isToolShellExtension(extension)).toBe(false);
  });

  it('will cast the proper tool shell extension', () => {
    const extension = new EditorExtension();
    expect(isEditorShellExtension(extension)).toBe(true);
  });

  it('will guard tool shell tab from wrong extension', () => {
    const extension = new ApplicationShellExtension();
    expect(isEditorShellExtension(extension)).toBe(false);
  });

  describe('isIconExtension', () => {
    it('will accept app shell extension', () => {
      const extension = new ApplicationShellExtension();
      expect(isIconExtension(extension)).toBe(true);
    });
    it('will accept content editor extension', () => {
      const extension = new EditorExtension();
      expect(isIconExtension(extension)).toBe(true);
    });
    it('will accept account tile extension', () => {
      const extension = new AccountTileExtension();
      expect(isIconExtension(extension)).toBe(true);
    });
    it('will accept prospect tile extension', () => {
      const extension = new ProspectTileExtension();
      expect(isIconExtension(extension)).toBe(true);
    });
    it('will accept opportunity tile extension', () => {
      const extension = new OpportunityTileExtension();
      expect(isIconExtension(extension)).toBe(true);
    });

    it('will accept home email tile extension', () => {
      const extension = new HomeEmailsTileExtension();
      expect(isIconExtension(extension)).toBe(true);
    });
    it('will accept home tasks tile extension', () => {
      const extension = new HomeTasksTileExtension();
      expect(isIconExtension(extension)).toBe(true);
    });

    it('will NOT accept account tab extension', () => {
      const extension = new AccountTabExtension();
      expect(isIconExtension(extension)).toBe(false);
    });

    it('will NOT accept mailing links data tab extension', () => {
      const extension = new MailingLinksDataExtension();
      expect(isIconExtension(extension)).toBe(false);
    });
  });
});
