import * as fs from 'fs';
import * as path from 'path';
import * as Ajv from 'ajv';

const schemaPath = path.join(__dirname, '../docs/schema/2.0/opdpManifest.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

describe('opdpManifest schema', () => {
  it('should require baseURL property', () => {
    expect(schema.required).toContain('baseURL');

    const ajv = new (Ajv as any)();
    const validate = ajv.compile(schema);
    const data = {
      name: 'Test',
      securityScheme: { type: 'apiKey', name: 'key', in: 'header' },
      endpoints: {}
      // baseURL is missing
    };
    const valid = validate(data);
    expect(valid).toBe(false);
    expect(
      validate.errors?.some(
        (e: { instancePath: string; message?: string }) =>
          e.instancePath === '' && e.message?.includes('baseURL')
      )
    ).toBe(true);
  });

  it('should not define internalURL property', () => {
    expect(schema.properties).not.toHaveProperty('internalURL');
  });
});