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
line-helpers.ts          ← classify individual lines (boundary, comment, data, missing, etc.)
    │
    ▼
parser.ts                ← two-phase parsing:
                             1. Header context (before first boundary): CommentNode | EmptyNode | UnknownNode
                             2. Section context (after boundary): DataNode | MissingAnnotationNode | CommentNode | ...
    │
    ▼
parseDataFileIntoAst()   ← assemble RootNode with ChildNode[] (boundaries, sections, header comments)
                             infer fileName and version from heading
```

All of this happens inside a single `parseDataFileIntoAst()` call.

Key files:

| File                          | Responsibility                                                               |
| ----------------------------- | ---------------------------------------------------------------------------- |
| `src/line-helpers.ts`         | Low-level line classification and regex utilities                            |
| `src/ast/node.ts`             | Node type definitions (`NodeTypes` const, interfaces, unions)                |
| `src/ast/typeguards.ts`       | Type guards for all node types                                               |
| `src/ast/visitor.ts`          | `visit()` function and `Visitor` interface for depth-first traversal         |
| `src/ast/index.ts`            | Re-exports from `node.ts`, `typeguards.ts`, and `visitor.ts`                 |
| `src/parser.ts`               | `parseDataFileIntoAst`, `stringifyNode`, `stringifyNodes`                    |
| `src/header.ts`               | `inferHeaderFromAst` — extracts heading metadata from the AST                |
| `src/models/raw-data-file.ts` | `RawDataFile` class — parses content, derives header/fileName/version/hasEOF |
| `src/models/data-file.ts`     | `DataFile` class — immutable frozen wrapper with query methods               |

---

## Header inference

`inferHeaderFromAst(root)` walks the AST using the visitor pattern and returns an `InferredHeader`:

```ts
interface InferredHeader {
  fileName?: string; // from RootNode
  version?: string; // from RootNode
  date?: string; // extracted from "# Date: ..." comment
  copyright?: string; // extracted from "# © ..." comment
  startLine: number; // first line of the heading region
  endLine: number; // last line of the heading region
  text: string; // exact raw text of the heading
}
```

The heading region is defined as everything before the first `SectionNode` that contains a `DataNode`. Comment-only sections (e.g. format descriptions, property annotations) are included in the heading.

---

## Scripts

| Script                             | Purpose                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------- |
| `scripts/fetch-ucd-files.ts`       | Fetch missing UCD `.txt` files from `api.ucdjs.dev` for all versions    |
| `scripts/generate-header-tests.ts` | Generate `.comments.txt` expected files and test files for header tests |
| `scripts/generate-pr-title.ts`     | Generate PR titles via GitHub Models API (used in CI)                   |

Workflow for adding a new Unicode version:

```bash
mkdir ucd-files/v19.0.0
pnpm tsx scripts/fetch-ucd-files.ts          # fetch all files
pnpm tsx scripts/generate-header-tests.ts    # generate .comments.txt + test files
# review .comments.txt files, then fill in test assertions
```

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

---

## Test infrastructure

Root `vitest.config.ts` dynamically reads `packages/` to create one test project per package. Each project gets a `resolve.alias` map so workspace packages resolve to local `src/` without a build step.

| Test type   | Location                                  | What it tests                             |
| ----------- | ----------------------------------------- | ----------------------------------------- |
| Unit        | `packages/parser/test/*.test.ts`          | Individual line-helper functions          |
| Datafiles   | `packages/parser/test/datafiles/`         | AST node types, typeguards, parser        |
| AST         | `packages/parser/test/ast/`               | Boundary, context, data, section, visitor |
| Headers     | `packages/parser/test/headers/`           | Header inference with real UCD files      |
| Integration | `packages/parser/test/headers/generated/` | Auto-generated per-version header tests   |

Fixture helper in `packages/parser/test/__utils.ts`:

- `ucdFiles(version, file)` — reads from `ucd-files/<version>/<file>`

Header test helper in `packages/parser/test/headers/__utils.ts`:

- `createUcdTest(version)` — returns a curried `ucdTest(file)(({ content, ast, header, expectedText }) => {})` factory

---

## CI workflows

| Workflow                  | Trigger         | Purpose                                        |
| ------------------------- | --------------- | ---------------------------------------------- |
| `ci.yml`                  | push/PR         | Build, lint, typecheck, test                   |
| `detect-new-releases.yml` | daily + manual  | Update metadata when new Unicode versions ship |
| `update-ucd-files.yml`    | weekly + manual | Fetch UCD files and regenerate header tests    |
| `release.yml`             | manual          | Publish packages                               |

---

## Playground

`playground/` at the repo root (not inside `packages/`). Scripts for inspecting ASTs and testing the parser locally.
