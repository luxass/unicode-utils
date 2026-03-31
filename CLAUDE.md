# unicode-utils

Utilities for parsing and working with Unicode Character Database (UCD) files. Early beta — monorepo with `pnpm` workspaces and `turbo` for task orchestration.

See `.AGENTS/` for detailed docs on architecture, code style, patterns, and guidelines.

---

## Packages

| Package | Purpose |
|---|---|
| `@unicode-utils/parser` | Core UCD file parsing — AST with SectionNode grouping, file-parser routing |
| `@unicode-utils/core` | High-level public API, re-exports, version constants |
| `@unicode-utils/metadata` | Unicode version constants and UCD URL mappings |

Shared tooling in `tooling/` (TypeScript config, tsdown config factory).

---

## Essential commands

All commands run from the **repo root**.

```sh
pnpm run build                     # Build all packages (turbo)
pnpm run test                      # Run all tests (vitest)
pnpm run typecheck                 # Type-check all packages (turbo)
pnpm run lint                      # Lint all packages (ESLint)
pnpm run generate:infer-test-files # Regenerate inference test fixtures
```

Do **not** run `tsc --noEmit` per-package directly — always use `pnpm run typecheck` from the root.

---

## Critical facts

1. **Single-pass parsing**: `parseDataFileIntoAst(content)` builds the full AST in one call — line classification, section grouping into `SectionNode`s, field splitting, and file-parser routing all happen together. See `.AGENTS/ARCHITECTURE.md`.

2. **SectionNode is a first-class AST node**: `SectionNode` appears in `root.children` with `children[]` (all consumed nodes), `records` (DataNodes only), `missingAnnotations`, and `fieldNames`. See `.AGENTS/AST.md`.

3. **File-parser routing**: `parseDataFileIntoAst()` automatically resolves a `FileParser` from `src/file-parsers/` for known UCD files. This replaces generic `field_0`/`field_1` names with typed, named fields like `"range"`, `"script"`. See `.AGENTS/COMMON_PATTERNS.md`.

4. **rawValue vs value**: `ParsedField.rawValue` is the untouched split string. `ParsedField.value` is auto-coerced or FileParser-typed. Stringify prefers `value`, falls back to `rawValue`. Nodes without `parsedFields` emit `node.raw` unchanged. See `.AGENTS/GLOSSARY.md`.

5. **RawDataFile and DataFile**: `RawDataFile` wraps the AST and raw content. `toDataFile()` produces an immutable frozen query view (`DataFile`). `stringifyAst(root)` serialises back to UCD text.

---

## .AGENTS/ docs

| File | What it covers |
|---|---|
| `GLOSSARY.md` | Domain terms: UCD, Heading, SectionNode, FileParser, FieldDef, ParsedField, etc. |
| `ARCHITECTURE.md` | Package graph, parser internals, file-parser routing, build system, test infrastructure |
| `AST.md` | All AST node types including SectionNode, ChildNode/SectionChildNode unions |
| `CODE_STYLE.md` | TypeScript conventions, naming, exports, error handling, linting |
| `COMMON_PATTERNS.md` | Recurring patterns, gotchas, and non-obvious behaviors |
| `GUIDELINES.md` | Rules for AI agents: what can be changed, what must be kept |
| `UCD-CLI.md` | How to fetch real UCD files with `@ucdjs/cli` |
