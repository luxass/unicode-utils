# AST

The Abstract Syntax Tree produced by `parseDataFileIntoAst()`. Lines are grouped into sections delimited by boundary markers. The AST provides structural, typed access to all UCD file elements.

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
  version?: string; // inferred from heading comment (e.g. "17.0.0")
}
```

### `CommentNode`

Any `#`-prefixed line that is not a boundary or (inside a section) a `@missing` annotation. `value` is the trimmed text after the `#`. `raw` is the original line unchanged.

### `EmptyNode`

A blank line (zero characters or only whitespace). `value` is always `""`.

### `UnknownNode`

Catch-all for lines that don't match any other node type in their context. Before the first boundary, non-comment non-empty lines become `UnknownNode`. Inside a section, such lines become `DataNode` instead.

### `BoundaryNode`

A comment line consisting of repeated characters like `# ===...`, `# ---...`, or `# ###...`. Boundaries appear as direct children of `RootNode` and act as delimiters between `SectionNode`s.

```ts
interface BoundaryNode extends BaseNode {
  type: "boundary";
  style: BoundaryStyle; // "=" | "-" | "#"
}
```

### `DataNode`

A semicolon-delimited data line carrying property assignments for code points. Only appears inside a `SectionNode` (after a boundary). Before the first boundary, such lines become `UnknownNode`.

```ts
interface DataNode extends BaseNode {
  type: "data";
  codepointRaw: string; // e.g. "0041" or "0000..001F"
  codepoint: [string, string]; // [start, end] - identical for single code points
  fields: string[]; // all semicolon-separated fields (including code point)
  comment?: string; // inline text after #, if present
}
```

### `MissingAnnotationNode`

A `# @missing:` annotation that defines default property values for code points not explicitly listed. Only created inside a `SectionNode` - before the first boundary, `@missing` lines are parsed as plain `CommentNode`.

```ts
interface MissingAnnotationNode extends BaseNode {
  type: "missing";
  annotation: MissingAnnotation | null;
}
```

### `SectionNode`

A container that groups lines between consecutive boundary markers. Sections cannot nest - a `SectionNode` never contains another `SectionNode` or a `BoundaryNode`.

```ts
interface SectionNode extends BaseNode {
  type: "section";
  children: SectionChildNode[];
}
```

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

## Union types

```ts
type ChildNode = CommentNode | EmptyNode | UnknownNode | BoundaryNode | SectionNode;
type SectionChildNode = CommentNode | EmptyNode | UnknownNode | DataNode | MissingAnnotationNode;
type Node = RootNode | ChildNode | SectionChildNode;
```

`RootNode` is not part of `ChildNode` - it is only the top-level container.

---

## Type guards

All guards are in `packages/parser/src/ast/typeguards.ts`:

```ts
isNode(node); // any Node
isRootNode(node);
isCommentNode(node);
isEmptyNode(node);
isUnknownNode(node);
isBoundaryNode(node);
isDataNode(node);
isMissingAnnotationNode(node);
isSectionNode(node);
isChildNode(node); // root-level child union
isSectionChildNode(node); // section-level child union
```

---

## Visitor pattern

`packages/parser/src/ast/visitor.ts` provides depth-first AST traversal.

```ts
import { visit } from "@unicode-utils/parser";

visit(ast, {
  data(node) {
    console.log(node.codepointRaw, node.fields);
  },
  comment(node) {
    console.log(node.value);
  },
});
```

The `Visitor` interface has optional callbacks for each node type: `root`, `comment`, `empty`, `unknown`, `boundary`, `data`, `missing`, `section`. Container nodes (`RootNode`, `SectionNode`) fire their callback before visiting children.

---

## NodeTypes const

```ts
const NodeTypes = {
  ROOT: "root",
  COMMENT: "comment",
  EMPTY: "empty",
  UNKNOWN: "unknown",
  SECTION: "section",
  BOUNDARY: "boundary",
  DATA: "data",
  MISSING: "missing",
} as const;
```

`NodeType` is derived: `type NodeType = (typeof NodeTypes)[keyof typeof NodeTypes]`.
