# Common Patterns

Recurring patterns, gotchas, and non-obvious behaviours.

---

## 1. Parsing a UCD file

```ts
import { parseDataFileIntoAst } from "@unicode-utils/parser";

const root = parseDataFileIntoAst(content);
// root.children - BoundaryNode, SectionNode, CommentNode, EmptyNode, UnknownNode
// root.fileName, root.version - inferred from the heading
```

---

## 2. Visiting AST nodes

```ts
import { visit } from "@unicode-utils/parser";

visit(root, {
  data(node) {
    console.log(node.codepointRaw, node.fields);
  },
  section(node) {
    console.log("section at line", node.line, "with", node.children.length, "children");
  },
  missing(node) {
    console.log("@missing:", node.annotation);
  },
});
```

Container nodes (`RootNode`, `SectionNode`) fire their callback before children are visited.

---

## 3. Inferring header metadata

```ts
import { parseDataFileIntoAst, inferHeaderFromAst } from "@unicode-utils/parser";

const root = parseDataFileIntoAst(content);
const header = inferHeaderFromAst(root);
// header.fileName, header.version - from RootNode
// header.date, header.copyright - extracted from heading comments
// header.text - exact raw text of the heading region
// header.startLine, header.endLine - line range
```

The heading is everything before the first section containing data.

---

## 4. Using RawDataFile and DataFile

```ts
import { RawDataFile } from "@unicode-utils/parser";

// Parse from content string
const raw = new RawDataFile(content);
console.log(raw.fileName); // "Scripts"
console.log(raw.version); // "16.0.0"
console.log(raw.hasEOF); // true
console.log(raw.heading); // header text
console.log(raw.content); // rawContent minus the header

// Fetch from URL
const raw = await RawDataFile.from("https://unicode.org/Public/17.0.0/ucd/Scripts.txt");

// Immutable query view
const file = raw.toDataFile();
file.sections(); // SectionNode[]
file.boundaries(); // BoundaryNode[]
file.dataNodes(); // DataNode[] (flattened from all sections)
file.missingAnnotations(); // MissingAnnotationNode[] (flattened from all sections)
```

---

## 5. Classifying nodes

```ts
import {
  isCommentNode,
  isEmptyNode,
  isUnknownNode,
  isBoundaryNode,
  isDataNode,
  isMissingAnnotationNode,
  isSectionNode,
} from "@unicode-utils/parser";

for (const child of root.children) {
  if (isBoundaryNode(child)) {
    console.log("boundary:", child.style);
  } else if (isSectionNode(child)) {
    for (const sc of child.children) {
      if (isDataNode(sc)) {
        console.log("data:", sc.codepointRaw, sc.fields);
      }
    }
  } else if (isCommentNode(child)) {
    console.log("comment:", child.value);
  }
}
```

---

## 6. Loading test fixtures

```ts
import { ucdFiles } from "../__utils";

const content = ucdFiles("v17.0.0", "Scripts.txt");
```

---

## 7. Header test factory

```ts
import { createUcdTest } from "./__utils";

const ucdTest = createUcdTest("v17.0.0");

ucdTest("Scripts.txt")(({ header, expectedText }) => {
  expect(header.fileName).toBe("Scripts");
  expect(header.text).toBe(expectedText);
});
```

The expected text is loaded from `ucd-files/<version>/<name>.header.txt`.
