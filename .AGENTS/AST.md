# AST

The Abstract Syntax Tree produced by `parseDataFileIntoAst()`. Every line in a UCD file maps to exactly one `ChildNode`. There is no section grouping or field parsing — the AST is a flat, structural representation.

---

## Node types

All type string literals come from the `NodeTypes` const in `packages/parser/src/ast/node.ts`. Always use `NodeTypes.X` when constructing nodes; use type guard functions when narrowing.

### `RootNode`

The document root. Never appears as a child.

```ts
interface RootNode extends BaseNode {
  type: "root";
  children: ChildNode[];
  fileName?: string; // inferred from heading comment (e.g. "Scripts")
  version?: string; // inferred from heading comment (e.g. "16.0.0")
}
```

### `CommentNode`

Any `#`-prefixed line. `value` is the trimmed text after the `#`. `raw` is the original line unchanged.

### `EmptyNode`

A blank line (zero characters or only whitespace). `value` is always `""`.

### `UnknownNode`

Every line that is not a comment and not empty. This covers all data lines, boundary lines, EOF markers, property lines, etc. `value` is the trimmed line. `raw` is the original line.

> **Note:** As the parser evolves, specific line patterns will be broken out of `UnknownNode` into their own types. For now, `UnknownNode` is the catch-all for all non-comment, non-empty content.

---

## BaseNode

All nodes share these fields:

```ts
interface BaseNode {
  type: NodeType;
  value: string; // semantically meaningful content (hash stripped for comments, trimmed for unknown)
  raw: string; // exact original line, never modified
  line: number; // 0-based line index in the source file
}
```

---

## ChildNode union

```ts
type ChildNode = CommentNode | EmptyNode | UnknownNode;
```

`RootNode` is not part of `ChildNode` — it is only the top-level container.

---

## Type guards

All guards are in `packages/parser/src/ast/typeguards.ts`:

```ts
isNode(node); // any Node (RootNode | ChildNode)
isRootNode(node);
isCommentNode(node);
isEmptyNode(node);
isUnknownNode(node);
isChildNode(node); // CommentNode | EmptyNode | UnknownNode
```

---

## NodeTypes const

```ts
const NodeTypes = {
  ROOT: "root",
  COMMENT: "comment",
  EMPTY: "empty",
  UNKNOWN: "unknown",
} as const;
```

`NodeType` is derived: `type NodeType = (typeof NodeTypes)[keyof typeof NodeTypes]`.
