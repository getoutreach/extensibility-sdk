const fs = require('fs');
const yaml = require('js-yaml');

// 'resource', 'action' -> 'RESOURCE_ACTION'
function constName(r, a) {
    const part1 = r.replace(/[A-Z]/g, c => `_${c}`).toUpperCase();
    const part2 = a.replace(/[A-Z]/g, c => `_${c}`).toUpperCase();
    return `${part1}_${part2}`;
}

// compareFn for sorting that pushes 'aggregate' action to the end
function aggregateInTheBack(a, b) {
    if (a == "aggregate") {
        return 1;
    } else if (b == "aggregate") {
        return -1;
    } else if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

// selector of not internal scopes
function isPublic(rv, av) {
    return (av && av.internal === false) || (rv.internal !== true && (!av || av.internal !== true));
}

// selector of public s2s scopes
function isS2S(rv, av) {
    return isPublic(rv, av) && 
           ((av && av.s2s === true) || (rv.s2s === true && (!av || av.s2s !== false)));
}

// traverses resource and actions collecting scopes and grouping them by resource name
function collectAndGroup(doc, testF) {
    const groups = {};
    for (const [r, rv] of Object.entries(doc)) {
        if ('actions' in rv) {
            const lines = [];
            for (const a of Object.keys(rv.actions).sort(aggregateInTheBack)) {
                if (testF(rv, rv.actions[a])) {
                    lines.push(`  ${constName(r, a)} = '${r}.${a}',`)
                }
            }
            if (lines.length > 0) {
                groups[lines[0]] = lines;
            }
        }
    }
    const output = [];
    for (const i of Object.keys(groups).sort()) {
        output.push(...groups[i]);
        output.push("");
    }
    return output;
}

function writeScopesTs(enumEntries) {
    let content =
`/* eslint-disable no-unused-vars */

/**
 * List of Outreach API scopes addon can request
 *
 * This file is generated by '/scripts/scopesgen.js'. DO NOT EDIT.
 * 
 * @export
 * @enum {string}
 */
export enum Scopes {
`;
    content += enumEntries.join('\n');
    content += `
  SCIM = 'scim',
}
`;
    fs.writeFileSync('./src/manifest/api/Scopes.ts', content);
}

function writeScopesS2STs(enumEntries) {
    let content =
`/* eslint-disable no-unused-vars */

/**
 * List of Outreach API S2S scopes app can request
 *
 * This file is generated by '/scripts/scopesgen.js'. DO NOT EDIT.
 * 
 * @export
 * @enum {string}
 */
export enum ScopesS2S {
`;
    content += enumEntries.join('\n');
    content += `}
`;
    fs.writeFileSync('./src/manifest/api/ScopesS2S.ts', content);
}

try {
    const doc = yaml.load(fs.readFileSync(0, 'utf-8')); // Load from STDIN
    writeScopesTs(collectAndGroup(doc, isPublic));
    writeScopesS2STs(collectAndGroup(doc, isS2S));
} catch (e) {
    console.log(e);
    console.log("Most likely the input is bad")
}