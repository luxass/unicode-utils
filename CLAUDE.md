# unicode-utils

## Project overview

unicode-utils is a monorepo that provides tools for parsing and working with Unicode Character Database (UCD) files.

## Project architecture

- **Monorepo** with packages (`packages/`) and shared tooling (`tooling/`)
  > The monorepo is managed with pnpm workspaces and Turborepo for efficient builds and dependency management.
  >
  > ```
  > packages/ - core libraries published to npm
  > tooling/ - internal development tools (tsconfig, tsdown-config)
  > playground/ - scripts for inspecting and testing the parser locally
  > ```

## Setup

- **Node.js**: >= 24
- **pnpm**: Version in `package.json`
- Run `pnpm install` to install

## Building

- `pnpm run build` - Build all packages (turbo)
- `turbo run build --filter "@unicode-utils/<package>"` - Build a specific package

> [!IMPORTANT]
> Do not run builds per-package directly. Always run from the repo root and use turbo filters if needed.

## Testing

- `pnpm run test` - Run all tests (vitest)
- `vitest run --project=<project>` - Run tests for a specific project (from repo root)

> [!NOTE]
> The project name matches the folder name in `packages/`.

## Code quality

- **Type checking**: `pnpm run typecheck` — always from the repo root, never `tsc --noEmit` per-package
- **Linting**: `pnpm run lint` / `pnpm run lint:fix` (oxlint)
- **Formatting**: `pnpm run fmt` / `pnpm run fmt:check` (oxfmt)

## Common tasks

### Adding a new feature

1. Implement in the appropriate package.
2. Add tests for new functionality.
3. Update `.AGENTS/` docs when public APIs or architecture change.
4. Run `pnpm run typecheck` and `pnpm run test` before committing.

### Adding tests

- Integration tests use real UCD fixture files from `packages/parser/test/ucd-files/`.
- Use `ucdFiles(version, file)` from `packages/parser/test/__utils.ts` to load fixtures.
- Fetch real UCD files with `@ucdjs/cli` before writing parser tests — see `.AGENTS/UCD-CLI.md`.

## Dependency management

- **Package manager**: pnpm workspaces
- **Catalogs**: dependency versions are centralised in `pnpm-workspace.yaml`
- **Workspace deps**: use `workspace:*` for internal packages

## Pull request guidelines

- **Title prefix**: `fix:`, `feat:`, `refactor:`, `chore:`, `docs:`, `test:`
- **Semver alignment**:
  - `fix:` → PATCH bump
  - `feat:` → MINOR bump
  - Breaking change → MAJOR bump (`type(scope)!:` or `BREAKING CHANGE:` in body)
- **CI**: All checks must pass

## Finding code

- **Parser**: `packages/parser/src/`
- **Core API**: `packages/core/src/`
- **Metadata**: `packages/metadata/src/`
- **Tests**: `packages/*/test/`
- **Playground**: `playground/`

## AI-friendly documentation

All AI-friendly documentation is in the `.AGENTS/` directory:

- **[Architecture](.AGENTS/ARCHITECTURE.md)** — Package graph, parser internals, build system, test infrastructure
- **[AST](.AGENTS/AST.md)** — All AST node types including SectionNode, ChildNode/SectionChildNode unions
- **[Code Style](.AGENTS/CODE_STYLE.md)** — TypeScript conventions, naming, exports, error handling, linting
- **[Common Patterns](.AGENTS/COMMON_PATTERNS.md)** — Recurring patterns, gotchas, and non-obvious behaviours
- **[Glossary](.AGENTS/GLOSSARY.md)** — Domain terms: UCD, SectionNode, FileParser, FieldDef, ParsedField, etc.
- **[Guidelines](.AGENTS/GUIDELINES.md)** — Rules for AI agents: what can be changed, what must be kept
- **[UCD CLI](.AGENTS/UCD-CLI.md)** — How to fetch real UCD files with `@ucdjs/cli`
