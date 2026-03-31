# @unicode-utils/parser

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Core parser for Unicode Character Database (UCD) files. Produces a structured AST with section grouping, field splitting, and optional file-specific typed field definitions.

## Installation

```bash
npm install @unicode-utils/parser
```

## Entry Points

| Import                               | Purpose                                     |
| ------------------------------------ | ------------------------------------------- |
| `@unicode-utils/parser`              | Full public API                             |
| `@unicode-utils/parser/datafile`     | AST types, parser, stringify, query helpers |
| `@unicode-utils/parser/line-helpers` | Low-level line classification utilities     |

## Exports

### `RawDataFile`

High-level class that parses a UCD file and holds the raw text and AST. Use this when you need to parse, mutate, or stringify.

```ts
import { RawDataFile } from "@unicode-utils/parser/datafile";

// From a string
const raw = new RawDataFile(content);

// From a URL
const raw = await RawDataFile.from("https://unicode.org/Public/16.0.0/ucd/Scripts.txt");

console.log(raw.fileName); // "Scripts"
console.log(raw.version); // "16.0.0"
console.log(raw.hasEOF); // true/false

// Round-trip stringify
const output = raw.stringify();
```

### `DataFile`

Immutable, frozen query view of a parsed UCD file. Created via `rawDataFile.toDataFile()`. Use this when you only need to read sections and records.

```ts
const file = raw.toDataFile();

const section = file.findSection("Basic Latin");
const sections = file.findSectionsByName("Latin");
console.log(file.recordCount);
```

### `parseDataFileIntoAst`

Low-level function that parses UCD text directly into a `RootNode` AST. Handles line classification, section grouping, field splitting, and file-parser routing in a single pass.

```ts
import { parseDataFileIntoAst } from "@unicode-utils/parser/datafile";

const root = parseDataFileIntoAst(content);
// root.children contains SectionNodes + structural nodes
// root.fileName and root.version are inferred from the heading

// Flat mode — no section grouping
const flat = parseDataFileIntoAst(content, { groupSections: false });
```

### Query helpers

```ts
import { getSections, findSection, getFieldValue } from "@unicode-utils/parser/datafile";

const sections = getSections(root);
const section = findSection(root, "Basic Latin");
const value = getFieldValue(record, "range");
```

### File-parser routing

For known UCD files, named and typed fields are applied automatically. For unknown files, generic `field_0`, `field_1`, ... names are used.

```ts
import { resolveFileParser } from "@unicode-utils/parser/datafile";

const parser = resolveFileParser("Scripts", "16.0.0");
// parser.fields → [{ name: "range", type: "codepoint-range" }, { name: "script", type: "string" }]
```

## License

Published under [MIT License](./LICENSE).

[npm-version-src]: https://img.shields.io/npm/v/@unicode-utils/parser?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/@unicode-utils/parser
[npm-downloads-src]: https://img.shields.io/npm/dm/@unicode-utils/parser?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/@unicode-utils/parser
