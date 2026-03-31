# Glossary

Domain terms used throughout `unicode-utils`.

---

## UCD

**Unicode Character Database.** The collection of plain-text `.txt` files published by the Unicode Consortium that define character properties, names, scripts, blocks, and more. This project parses those files.

---

## Heading

The comment block at the **top** of a UCD file, before any data. Contains the file name and Unicode version. Extracted by `inferHeadingFromAST()` in `packages/parser/src/inference/heading.ts`.

Example:
```
# Scripts-16.0.0.txt
# Date: 2024-01-01, 00:00:00 GMT [KW]
```

---

## BoundaryStyle

The visual style of a separator line in a UCD file. Detected by `getBoundaryLineStyle()` in `line-helpers.ts`.

| Value | Example line |
|---|---|
| `"hash"` | `################` |
| `"equals"` | `================` |
| `"dash"` | `----------------` |

Boundary lines delimit sections within a UCD file.

---

## SectionNode

A first-class AST node emitted by `parseDataFileIntoAst()` during section grouping. Holds all consumed nodes in its `children` array and provides a `records` convenience filter for `DataNode`s only. See `AST.md` for the full interface.

---

## SectionChildNode

The union of node types that can appear inside `SectionNode.children`. Every `ChildNode` type except `SectionNode` itself.

---

## ParsedField

One field on a `DataNode`, produced after field splitting and optional coercion.

```ts
interface ParsedField {
  name:     string | undefined; // "field_0" (generic) or "range" (FileParser-named)
  rawValue: string;             // untouched string from splitting the line by separator
  value:    unknown;            // auto-coerced or FileParser-typed value
}
```

`parsedFields` is `undefined` on a `DataNode` until section grouping runs.

---

## rawValue vs value

- **`rawValue`**: The exact string slice after splitting the raw data line by the detected separator. Never modified.
- **`value`**: The coerced/typed interpretation of `rawValue`. Set by `inferFieldValue()` (auto-coerce) or by `applyFileParser()` (typed coercion from a `FileParser`).

Stringify prefers `value`; falls back to `rawValue` if value cannot be serialized. Nodes without `parsedFields` emit `node.raw` unchanged (lossless round-trip).

---

## FileParser

A per-file definition that tells the parser how to type and name fields for a specific UCD file. Defined in `packages/parser/src/file-parsers/types.ts`.

```ts
interface FileParser {
  fileName:             string;
  separator:            string;
  trimFields?:          boolean;
  stripInlineComments?: boolean;
  fields:               FieldDef[];
  postProcess?:         (sections: SectionNode[]) => void;
}
```

Resolved automatically from `root.fileName` by `resolve()` in `src/file-parsers/route.ts`. Currently 20 definitions in `src/file-parsers/definitions/`.

---

## FieldDef

One field declaration inside a `FileParser.fields` array.

```ts
interface FieldDef {
  name:           string;
  type:           FieldType;
  enumValues?:    string[];
  nullable?:      boolean;
  optional?:      boolean;
  isMultiValue?:  boolean;
  delimiter?:     string;
}
```

---

## FieldType

The type a field can be declared as in a `FieldDef`. Drives typed coercion in `coerceField()`.

```
"codepoint"          → single hex codepoint string, e.g. "0041"
"codepoint-range"    → { start: "0000", end: "007F" }
"codepoint-or-range" → either of the above
"string"             → raw string (untrimmed)
"string-trimmed"     → trimmed string
"number"             → integer
"enum"               → one of a declared set of string values
"optional-string"    → string or undefined
"multi-codepoint"    → space-separated list of codepoints
```

---

## MissingAnnotation

A `# @missing:` line in a UCD file that declares the default property value for codepoints not otherwise listed in the file.

Example:
```
# @missing: 0000..10FFFF; Unknown
```

Parsed into:
```ts
interface MissingAnnotation {
  start:                string; // "0000"
  end:                  string; // "10FFFF"
  propertyName?:        string;
  defaultPropertyValue: string; // "Unknown"
}
```

Collected per `SectionNode` in `SectionNode.missingAnnotations`.

---

## Separator

The field delimiter used in a UCD data line. Detected automatically from the first data line. Default candidates: `[";", "\t"]`. Can be overridden via `ParseAstOptions.separators` or `FileParser.separator`.

---

## EOF marker

The literal line `# EOF` that appears at the end of some UCD files. Detected by `isEOFMarker()` in `line-helpers.ts`. Reflected in `RawDataFile.hasEOF`.

---

## RawDataFile

High-level wrapper class in `packages/parser/src/datafile/model.ts`. Holds the raw text and parsed AST. Provides `toDataFile()` for an immutable query view and `stringify()` for round-trip serialisation. Can be constructed from a string or fetched from a URL via `RawDataFile.from()`.

---

## DataFile

Immutable frozen query view in `packages/parser/src/datafile/data-file.ts`. Created via `rawDataFile.toDataFile()`. Sections and records are frozen. Provides `findSection()`, `findSectionsByName()`, and `recordCount`.
