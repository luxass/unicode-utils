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
parser.ts / createNode() ← map each line to CommentNode | EmptyNode | UnknownNode
    │
    ▼
parseDataFileIntoAst()   ← assemble RootNode with flat ChildNode[]
                             infer fileName and version from heading
```

All of this happens inside a single `parseDataFileIntoAst()` call.

Key files:

| File                    | Responsibility                                                |
| ----------------------- | ------------------------------------------------------------- |
| `src/line-helpers.ts`   | Low-level line classification and regex utilities             |
| `src/ast/node.ts`       | Node type definitions (`NodeTypes` const, interfaces, unions) |
| `src/ast/typeguards.ts` | Type guards for all node types                                |
| `src/ast/index.ts`      | Re-exports from `node.ts` and `typeguards.ts`                 |
| `src/parser.ts`         | `parseDataFileIntoAst`, `stringifyNode`, `stringifyNodes`     |
| `src/raw-data-file.ts`  | `RawDataFile` class — wraps AST + raw content                 |
| `src/data-file.ts`      | `DataFile` class — immutable frozen wrapper                   |

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

| Test type   | Location                          | What it tests                         |
| ----------- | --------------------------------- | ------------------------------------- |
| Unit        | `packages/parser/test/*.test.ts`  | Individual line-helper functions      |
| Datafiles   | `packages/parser/test/datafiles/` | AST node types, typeguards, parser    |
| Integration | `packages/parser/test/ast/`       | Full pipeline with real UCD v16 files |

Fixture helper in `packages/parser/test/__utils.ts`:

- `ucdFiles(version, file)` — reads from `ucd-files/<version>/<file>`

---

## Playground

`playground/` at the repo root (not inside `packages/`). Scripts for inspecting ASTs and testing the parser locally.
