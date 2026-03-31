# Common Patterns

Recurring patterns, gotchas, and non-obvious behaviours.

---

## 1. Parsing a UCD file

```ts
import { parseDataFileIntoAst } from "@unicode-utils/parser";

const root = parseDataFileIntoAst(content);
// root.children — flat array of CommentNode | EmptyNode | UnknownNode
// root.fileName, root.version — inferred from the heading
```

---

## 2. Using RawDataFile and DataFile

```ts
import { RawDataFile } from "@unicode-utils/parser";
import { parseDataFileIntoAst } from "@unicode-utils/parser";

// Parse then wrap
const ast = parseDataFileIntoAst(content);
const raw = new RawDataFile(ast, content);

// Fetch from URL
const raw = await RawDataFile.from("https://unicode.org/Public/16.0.0/ucd/Scripts.txt");

// Immutable query view
const file = raw.toDataFile();
```

---

## 3. Classifying nodes

```ts
import { isCommentNode, isEmptyNode, isUnknownNode } from "@unicode-utils/parser";

for (const child of root.children) {
  if (isCommentNode(child)) {
    console.log("comment:", child.value);
  } else if (isEmptyNode(child)) {
    // blank line
  } else if (isUnknownNode(child)) {
    // data line or any other content
    console.log("raw:", child.raw);
  }
}
```

---

## 4. Loading test fixtures

```ts
import { ucdFiles } from "../__utils";

const content = ucdFiles("v16.0.0", "Scripts.txt");
```
