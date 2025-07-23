import * as fs from 'fs';
import * as path from 'path';
const Ajv2020 = require('ajv/dist/2020').default;
const addFormats = require('ajv-formats');

const schemaPath = path.join(__dirname, '../docs/schema/2.0/opdpManifest.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

describe('opdpManifest schema', () => {
  it('baseURL property should be required', () => {
    expect(schema.required).toContain('baseURL');

    const ajv = new Ajv2020({ strict: false, allErrors: true, $data: true });
    addFormats(ajv);

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

  it('opdp manifest should not define internalURL property', () => {
    expect(schema.properties).not.toHaveProperty('internalURL');
  });
});