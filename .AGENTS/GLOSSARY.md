# Glossary

Domain terms used throughout `unicode-utils`.

---

## UCD

**Unicode Character Database.** The collection of plain-text `.txt` files published by the Unicode Consortium that define character properties, names, scripts, blocks, and more. This project parses those files.

---

## Heading

The comment block at the **top** of a UCD file, before any data. Contains the file name and Unicode version. `inferFileName()` and `inferVersion()` in `packages/parser/src/line-helpers.ts` extract these values from the first comment line and attach them to `RootNode.fileName` and `RootNode.version`.

Example:

```
# Scripts-16.0.0.txt
# Date: 2024-01-01, 00:00:00 GMT [KW]
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
  start: string;
  end: string;
  propertyName?: string;
  defaultPropertyValue: string;
}
```

Detected by `isMissingAnnotation()` in `line-helpers.ts`. Currently lands as an `UnknownNode` in the AST — will become its own node type in a future pass.

---

## RawDataFile

Class in `packages/parser/src/raw-data-file.ts`. Holds the raw content string and a parsed `RootNode`. Can be constructed from a content string or fetched from a URL via `RawDataFile.from()`. Provides `toDataFile()` to get an immutable query view.

**When to use:** When you need to work directly with the AST — inspect nodes, mutate the tree, or stringify back to text.

---

## DataFile

Immutable frozen wrapper in `packages/parser/src/data-file.ts`. Created via `rawDataFile.toDataFile()`. Holds a frozen `RootNode`.

**When to use:** When you only need a safe, read-only view of the parsed AST to pass around without risk of mutation.

**Choosing between the two:** Use `RawDataFile` when you need to work with or mutate the AST. Convert to `DataFile` when you want a frozen snapshot to hand to consumers.

---

## EOF marker

The literal line `# EOF` that appears at the end of some UCD files. Detected by `isEOFMarker()` in `line-helpers.ts`. Currently lands as an `UnknownNode` in the AST.
