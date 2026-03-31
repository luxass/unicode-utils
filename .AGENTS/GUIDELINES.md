# Guidelines

General rules for any AI working on this codebase.

---

## What can be changed

**Everything is fair game.** File names, directory structure, interfaces, function signatures, class shapes, exports, package layouts — none of it is sacred. If a better design requires renaming, moving, splitting, or deleting existing code, do it.

This includes:

- `packages/parser/src/datafile/` — all files (`ast.ts`, `parser.ts`, `model.ts`, `data-file.ts`, `stringify.ts`, `ast-utils.ts`, `typeguards.ts`)
- `packages/parser/src/inference/` — all files
- `packages/core/` — re-exports, API surface, dependencies
- Test files — rewrite, delete, restructure as needed

---

## What must be kept

Two modules are considered stable utilities. Keep them as-is unless there is a compelling reason to change them, and always discuss before touching:

### `packages/parser/src/datafile/typeguards.ts`

Type guard functions (`isDataNode`, `isBoundaryNode`, `isSectionNode`, etc.) are a clean, stable pattern. Add new guards as new node types are introduced. Do not remove or rename existing ones without updating every call site.

### `packages/parser/src/line-helpers.ts`

Low-level line classification utilities (`isCommentLine`, `isBoundaryLine`, `isEOFMarker`, `inferFileName`, `inferVersion`, etc.). These work correctly, are well-tested, and are unlikely to need changes. Leave them alone unless a line classification bug is found.

---

## Fetching real UCD files

Before writing any parser definition or test fixture, fetch the actual file using the `@ucdjs/cli`. Never guess at field counts, separators, or version differences from memory. See `UCD-CLI.md` for usage.

---

## Tone

Do not preserve existing code out of caution. If a design choice looks wrong, change it. The codebase is in active development and nothing is locked down except the two stable modules listed above.
