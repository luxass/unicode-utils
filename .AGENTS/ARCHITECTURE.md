# Architecture

---

## Package dependency graph

```
@unicode-utils/metadata
  └─ @luxass/utils

@unicode-utils/parser
  └─ @luxass/utils

@unicode-utils/core
  └─ @unicode-utils/parser
  └─ @unicode-utils/metadata
  └─ @luxass/utils
```

---

## Parser internals — data flow

```
raw UCD text
    │
    ▼
line-helpers.ts          ← classify individual lines (regex-based)
    │
    ▼
parser.ts / createNode() ← dispatch each line to the correct ChildNode type
    │
    ▼
parseDataFileIntoAst()   ← assemble RootNode with all ChildNodes
    │                       (groupSections: true by default)
    ▼
groupSectionsIntoAst()   ← group nodes into SectionNode children
    │                       split fields, populate ParsedField[]
    │                       detect separator, collect MissingAnnotation[]
    ▼
resolve() + applyFileParser()  ← match fileName to a FileParser definition
                                  re-type fields with named FieldDefs
```

All of this happens inside a single `parseDataFileIntoAst()` call. There is no separate semantic pass or `SectionsResult`.

Key files:

| File                            | Responsibility                                                                                  |
| ------------------------------- | ----------------------------------------------------------------------------------------------- |
| `src/line-helpers.ts`           | Low-level line classification and regex utilities                                               |
| `src/datafile/ast.ts`           | Node type definitions (`NodeTypes` const, interfaces, `SectionNode`)                            |
| `src/datafile/parser.ts`        | `parseDataFileIntoAst`, `groupSectionsIntoAst`, `stringifyNode`                                 |
| `src/datafile/stringify.ts`     | `stringifyAst`, `fieldToString`                                                                 |
| `src/datafile/ast-utils.ts`     | Traversal, query, and mutation helpers (`visit`, `getFieldValue`, `getSections`, `findSection`) |
| `src/datafile/typeguards.ts`    | Type guards for all node types (`isDataNode`, `isSectionNode`, ...)                             |
| `src/datafile/model.ts`         | `RawDataFile` class — high-level wrapper                                                        |
| `src/datafile/data-file.ts`     | `DataFile` class — immutable frozen query view                                                  |
| `src/file-parsers/types.ts`     | `FileParser`, `FieldDef`, `FieldType` interfaces                                                |
| `src/file-parsers/route.ts`     | `resolve()` — map fileName to a FileParser definition                                           |
| `src/file-parsers/coerce.ts`    | `applyFileParser()`, `coerceField()`, `expandMissingAnnotations()`                              |
| `src/file-parsers/definitions/` | 20 per-file parser definitions (blocks, scripts, etc.)                                          |

---

## Single-pass parsing with section grouping

`parseDataFileIntoAst(content, options?)` does everything in one call:

1. Splits content by line, maps each line to a typed `ChildNode` via `createNode()`
2. Produces a `RootNode` with a flat array of children
3. Infers `fileName` and `version` from header comments
4. When `groupSections` is true (default), runs `groupSectionsIntoAst()`:
   - Walks `root.children`, groups nodes into `SectionNode`s based on comment-block headers
   - Detects field separator on first data line
   - Splits each data line into `ParsedField[]` with auto-coercion
   - Collects `MissingAnnotation[]` per section
   - Consumed nodes are moved from `root.children` into `SectionNode.children`
5. Resolves a `FileParser` via `resolve(fileName, version)` and applies typed field names/values via `applyFileParser()`

After parsing, `root.children` contains a mix of:

- `SectionNode`s (each holding their consumed children and records)
- Non-section nodes (heading comments, empty lines, EOF marker, etc.)

---

## File-parser routing

`src/file-parsers/route.ts` maps normalised file names to `FileParser` definitions. Currently 20 definitions in `src/file-parsers/definitions/`. Each definition declares:

- `fileName` — the UCD file name
- `separator` — field separator (`;` or `\t`)
- `fields` — array of `FieldDef` with `name`, `type`, and optional flags
- `postProcess` — optional hook for special handling (e.g. `expandMissingAnnotations`)

When `resolve()` returns a parser, `applyFileParser()` re-processes every `DataNode.parsedFields` with typed coercion and named fields. When no parser matches, generic `field_0`/`field_1` names and auto-coercion are used.

---

## Build system

| Tool                | Role                                                              |
| ------------------- | ----------------------------------------------------------------- |
| **turbo**           | Task orchestration (build, test, typecheck, lint); caches outputs |
| **tsdown**          | Per-package bundler (powered by Rolldown); replaces tsup          |
| **pnpm workspaces** | Dependency management; `catalog:*` entries centralise versions    |

Each package has:

- `tsdown.config.ts` using `createTsdownConfig()` from `tooling/tsdown-config`
- `tsconfig.json` extending `@unicode-utils-tooling/tsconfig/base`
- `tsconfig.build.json` extending the base, excluding `test/` and `dist/`
- Multiple entry points: e.g. `index.ts`, `datafile.ts`, `line-helpers.ts` for granular imports

---

## Test infrastructure

Root `vitest.config.ts` dynamically reads `packages/` to create one test project per package. Each project gets a `resolve.alias` map so workspace packages resolve to local `src/` without a build step.

| Test type    | Location                                | What it tests                                |
| ------------ | --------------------------------------- | -------------------------------------------- |
| Unit         | `packages/parser/test/*.test.ts`        | Individual functions with in-memory fixtures |
| File parsers | `packages/parser/test/file-parsers/`    | FileParser routing, coercion, named fields   |
| Datafiles    | `packages/parser/test/datafiles/`       | AST structure, sections, stringify, model    |
| Integration  | `packages/parser/test/integration/v16/` | Full pipeline with real UCD v16 files        |

Fixture helper in `packages/parser/test/__utils.ts`:

- `ucdFiles(version, file)` — reads from `ucd-files/<version>/<file>`

---

## Playground

`playground/` at the repo root (not inside `packages/`). Scripts for inspecting ASTs, listing sections, checking fields, and testing round-trip serialisation.
