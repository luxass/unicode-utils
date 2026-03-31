# AST

The Abstract Syntax Tree produced by `parseDataFileIntoAst()`. With section grouping enabled (default), `SectionNode`s consume data lines and their surrounding structural nodes. Non-section nodes remain as direct children of root.

---

## Node types

All type string literals come from the `NodeTypes` const in `packages/parser/src/datafile/ast.ts`. Always use `NodeTypes.X` when constructing nodes; use type guard functions when narrowing.

### `RootNode`

The document root. Never appears as a child.

```ts
interface RootNode extends BaseNode {
  type: "root";
  children: ChildNode[]; // SectionNodes + non-consumed structural nodes
  fileName?: string;     // inferred from heading (e.g. "Scripts")
  version?:  string;     // inferred from heading (e.g. "16.0.0")
}
```

### `SectionNode`

A first-class AST node representing a named section of data records. Emitted by the section-grouping pass inside `parseDataFileIntoAst()`.

```ts
interface SectionNode extends BaseNode {
  type:               "section";
  name:               string;              // first comment line of the section header
  description:        string;              // remaining header comment lines joined with \n
  children:           SectionChildNode[];  // ALL consumed nodes in document order
  records:            DataNode[];          // convenience: DataNodes only (filtered view)
  missingAnnotations: MissingAnnotation[]; // @missing: annotations before section data
  fieldNames:         string[] | undefined; // set when a FileParser is applied
}
```

`children` holds every node between the section header and the next section: data lines, boundaries, empty lines, trailing comments. Nothing is hidden.

`records` is a convenience filter — only `DataNode`s from `children`.

`fieldNames` is `undefined` when generic parsing was used (`field_0`, `field_1`). Set to `["range", "name", ...]` when a `FileParser` is applied.

### `CommentNode`

A `#`-prefixed line with text content after the hash.

`value` contains the trimmed text (hash stripped). `raw` contains the original line.

### `EmptyCommentNode`

A bare `#` line with nothing after it (or only whitespace). Distinct from `CommentNode` because it carries no semantic content.

### `BoundaryNode`

A line composed entirely of repeated `#`, `=`, or `-` characters. Used as visual section dividers in UCD files.

```ts
interface BoundaryNode extends BaseNode {
  type:  "boundary";
  style: BoundaryStyle; // "hash" | "equals" | "dash"
}
```

### `DataNode`

A line containing actual Unicode data, with fields separated by `;` or `\t`.

```ts
interface DataNode extends BaseNode {
  type:          "data";
  parsedFields?: ParsedField[];
}
```

`parsedFields` is populated during the section-grouping pass. After generic parsing, `parsedFields[i].name` is `"field_0"`, `"field_1"`, etc. After a `FileParser` is applied, names match the definition (e.g. `"range"`, `"name"`, `"script"`).

### `EmptyNode`

A blank line (zero characters or only whitespace).

### `EOFNode`

The literal line `# EOF`. Marks the end of the file in some UCD files.

### `PropertyNode`

A `@<property>: value` line. Rare in practice.

```ts
interface PropertyNode extends BaseNode {
  type:          "property";
  propertyValue: string | undefined;
}
```

### `UnknownNode`

Fallback for any line that does not match any other classifier. Should not appear in well-formed UCD files.

---

## BaseNode

All nodes share these fields:

```ts
interface BaseNode {
  type:  NodeType;
  value: string;   // semantically meaningful content
  raw:   string;   // exact original line, never modified
  line:  number;   // 0-based line index in the source file
}
```

---

## SectionChildNode

Nodes that can appear inside a `SectionNode.children` array. Every `ChildNode` type except `SectionNode` itself:

```ts
type SectionChildNode
  = CommentNode
  | EmptyCommentNode
  | BoundaryNode
  | DataNode
  | EmptyNode
  | EOFNode
  | PropertyNode
  | UnknownNode;
```

---

## ChildNode union

```ts
type ChildNode
  = CommentNode
  | EmptyCommentNode
  | BoundaryNode
  | DataNode
  | EmptyNode
  | EOFNode
  | PropertyNode
  | SectionNode
  | UnknownNode;
```

`RootNode` is not part of `ChildNode` — it can only be the top-level container.

---

## Type guards

Every node type has a corresponding type guard in `packages/parser/src/datafile/typeguards.ts`:

```ts
isCommentNode(node)
isEmptyCommentNode(node)
isBoundaryNode(node)
isDataNode(node)
isEmptyNode(node)
isEOFNode(node)
isPropertyNode(node)
isUnknownNode(node)
isRootNode(node)
isSectionNode(node)
```

---

## NodeTypes const

```ts
const NodeTypes = {
  ROOT:          "root",
  COMMENT:       "comment",
  EMPTY_COMMENT: "empty-comment",
  BOUNDARY:      "boundary",
  DATA:          "data",
  EMPTY:         "empty",
  EOF:           "eof",
  PROPERTY:      "property",
  SECTION:       "section",
  UNKNOWN:       "unknown",
} as const;
```

`NodeType` is derived: `type NodeType = typeof NodeTypes[keyof typeof NodeTypes]`.
