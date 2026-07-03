import * as fs from 'fs';
import * as path from 'path';

const schemaDir = path.join(__dirname, '../docs/schema/2.0');

const jsonFiles = fs.readdirSync(schemaDir).filter((file) => file.endsWith('.json'));

describe('docs/schema/2.0 json files', () => {
  it('should find json files to validate', () => {
    expect(jsonFiles.length).toBeGreaterThan(0);
  });

  test.each(jsonFiles)('%s should be valid json', (file) => {
    const filePath = path.join(schemaDir, file);
    const contents = fs.readFileSync(filePath, 'utf-8');

    expect(() => JSON.parse(contents)).not.toThrow();
  });
});
