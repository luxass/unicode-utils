# Common Patterns

Recurring patterns, gotchas, and non-obvious behaviours.

---

## 1. Parsing a UCD file

```ts
import { parseDataFileIntoAst } from "@unicode-utils/parser/datafile";

const root = parseDataFileIntoAst(content);
// root.children contains SectionNodes + non-section structural nodes
// root.fileName, root.version are inferred from the heading
```

Pass `{ groupSections: false }` to get a flat line-per-node AST without section grouping:

```ts
const root = parseDataFileIntoAst(content, { groupSections: false });
```

---

## 2. Working with SectionNodes

```ts
import { isSectionNode } from "@unicode-utils/parser/datafile";

for (const child of root.children) {
  if (isSectionNode(child)) {
    console.log(child.name, child.records.length);
    for (const record of child.records) {
      console.log(record.parsedFields);
    }
  }
}
```

Query helpers in `ast-utils.ts`:

```ts
import { getSections, findSection, getFieldValue } from "@unicode-utils/parser/datafile";

const sections = getSections(root);
const latin = findSection(root, "Basic Latin");
const value = getFieldValue(record, "range");
```

---

## 3. RawDataFile and DataFile

```ts
import { RawDataFile } from "@unicode-utils/parser/datafile";

// From a string
const raw = new RawDataFile(content);

// From a URL
const raw = await RawDataFile.from("https://unicode.org/Public/16.0.0/ucd/Scripts.txt");

// Immutable query view
const file = raw.toDataFile();
const section = file.findSection("Basic Latin");
console.log(file.recordCount);

// Round-trip stringify
const output = raw.stringify();
```

---

## 4. Generic field names

`parseDataFileIntoAst()` uses generic names for all fields during section grouping:

- `parsedField.name` is `"field_0"`, `"field_1"`, etc.
- `parsedField.value` is auto-coerced (hex ranges become `{ start, end }` objects; numbers become integers)

---

## 5. Stringify with stringifyAst

```ts
import { stringifyAst } from "@unicode-utils/parser/datafile";

const output = stringifyAst(root);
```

`stringifyAst` walks `root.children`:

- `SectionNode`: emits header comment + `@missing` annotations + data records (using `fieldToString` for each field, falling back to `rawValue`)
- Other nodes: emits `node.raw` unchanged

For data nodes with `parsedFields`, the fallback chain in `fieldToString` is:

1. `{ start, end }` object -> `"0000..007F"`
2. Array -> elements joined with `" "`
3. String or number -> emit directly
4. Otherwise -> fall back to `rawValue`

Nodes without `parsedFields` emit `node.raw` unchanged, ensuring lossless round-tripping.

---

## 6. Section fallback name

If data lines appear before any comment block (common in flat UCD files like `Blocks.txt`), the section is named after `root.fileName ?? "default"`. This is by design for files that have a heading but no interior section headers.

---

## 7. MissingAnnotations

`# @missing:` lines are collected into `section.missingAnnotations[]` during the grouping pass. They are not part of `section.description`.

`# @missing:` lines are collected into `section.missingAnnotations[]` but are not automatically expanded into synthetic `DataNode`s.

---

## 8. SectionNode.children holds everything

All nodes consumed into a section are in `section.children` in document order: data lines, boundaries, empty lines, trailing comments. Use `section.records` when you only need data nodes.

---

## 9. Visitor pattern

Use `visit` to walk every top-level node in the AST:

```ts
import { visit } from "@unicode-utils/parser/datafile";

visit(root, ({ currentNode, nextNode, prevNode }) => {
  if (isSectionNode(currentNode)) {
    // process section
  }
});
```

---

## 10. Mutation

```ts
import { setFieldValue } from "@unicode-utils/parser/datafile";

// Update a field value (does NOT update rawValue)
setFieldValue(record, 0, "0042");
```

`setFieldValue` only changes `value`, not `rawValue`. Stringify uses `value` first, so the updated value is emitted.

---

## 11. Loading test fixtures

```ts
import { ucdFiles } from "../__utils";

const content = ucdFiles("v16.0.0", "Scripts.txt");
```
