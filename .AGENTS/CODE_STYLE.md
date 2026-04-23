# Code Style

---

## TypeScript

- **Strict mode** everywhere: `strict: true`, `noUncheckedIndexedAccess: true`
- **Target**: ES2024, `module: "Preserve"`, `type: "module"` in `package.json`
- **`erasableSyntaxOnly: true`** - no `enum`, no parameter properties; use `const` objects instead
- **`isolatedModules: true`** - always use `import type` for type-only imports

---

## Naming conventions

| Thing              | Convention                               | Example                                    |
| ------------------ | ---------------------------------------- | ------------------------------------------ |
| Types / interfaces | PascalCase                               | `SectionNode`, `DataNode`, `ParsedField`   |
| Functions          | camelCase, verb-first                    | `parseDataFileIntoAst`, `findSection`      |
| Constants          | ALL_CAPS                                 | `NodeTypes`, `HEX_RANGE_RE`                |
| Parameters         | Full descriptive names, no abbreviations | `startIndex` not `si`, `nodeType` not `nt` |
| Files              | kebab-case                               | `ast-utils.ts`, `line-helpers.ts`          |

---

## Const + derived type pattern

Use `as const` objects to define string-literal sets, then derive the union type from them:

```ts
export const NodeTypes = {
  ROOT: "root",
  COMMENT: "comment",
  SECTION: "section",
  // ...
} as const;

export type NodeType = (typeof NodeTypes)[keyof typeof NodeTypes];
```

---

## `satisfies` for shape validation

Use `satisfies` when you want TypeScript to validate an object's shape against a type without widening the inferred type:

```ts
const NODE_TYPE_CHECKERS = {
  comment: isCommentNode,
  "empty-comment": isEmptyCommentNode,
  section: isSectionNode,
  // ...
} satisfies Record<ChildNode["type"], (node: ChildNode) => boolean>;
```

---

## Discriminated unions

All AST node types use `type` as the discriminant. Narrow using the type guards from `typeguards.ts`, not `node.type === "..."` comparisons in application code:

```ts
// Good
if (isDataNode(node)) { ... }
if (isSectionNode(node)) { ... }

// Avoid in application code (fine in typeguards.ts itself)
if (node.type === "data") { ... }
```

---

## Interfaces vs types

- **Interfaces** for object shapes: `SectionNode`, `BaseNode`, `ParsedField`, options objects
- **Types** for unions and aliases: `ChildNode`, `SectionChildNode`, `BoundaryStyle`
- No dedicated `types.ts` file - types live alongside their implementation

---

## Exports

- Barrel `index.ts` files aggregate and re-export from sub-modules
- Namespace exports for grouped utilities: `export * as astUtils from "./datafile/ast-utils"`
- Selective exports where barrel would leak too much
- For internal script modules, do not export types unless they are part of a real module contract

---

## Error handling

- Callback-based error reporting where appropriate
- `throw new Error(...)` only for invariant violations
- Return `undefined` (not throw) for "not found" lookups

---

## Mutation

Mutation is done via standalone functions, not methods on data objects:

```ts
setFieldValue(record, fieldIndex, newValue);
```

`DataFile` is immutable (frozen). Mutation operates on the `RawDataFile.ast` or on `SectionNode`s directly.

---

## JSDoc

Required for all exported public APIs. Must include `@param`, `@returns`, and at least one `@example`.

---

## Linting and formatting

- **Linter**: `oxlint` - run `pnpm run lint` to check, `pnpm run lint:fix` to auto-fix
- **Formatter**: `oxfmt` - run `pnpm run fmt` to format, `pnpm run fmt:check` to verify without writing
- All commands run from the repo root

---

## Testing

- Framework: **vitest** (not Jest)
- Test files named `*.test.ts` (not `.spec.ts`)
- Use `it.each([...])` for parametrised tests
- Use `describe.each(VERSIONS)` for cross-version test suites
- Use `it.todo(...)` for pending tests - not `it.skip()`
- Snapshot tests: `expect(value).toMatchSnapshot()`
- No mocking of internal functions; use real fixtures
- `dedent` from `@luxass/utils` for multiline inline fixtures in test files
