import {
  isAccountTileExtension,
  isHomeEmailTileExtension,
  isHomeTasksTileExtension,
  isOpportunityTileExtension,
  isProspectTileExtension,
} from '../src/manifest/extensions/ExtensionGuards';
import { ApplicationShellExtension } from '../src/manifest/extensions/shell/types/ApplicationShellExtension';
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
});
