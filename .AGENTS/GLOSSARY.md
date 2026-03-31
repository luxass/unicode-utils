# Glossary

Terms and concepts used in the UCD.js codebase and documentation.

## UCD Concepts

### UCD

Unicode Character Database. The collection of plain-text `.txt` files published by the Unicode Consortium that define character properties, names, scripts, blocks, and more. This project parses those files.

### Heading

The comment block at the top of a UCD file, before any data. Contains the file name and Unicode version. `inferFileName()` and `inferVersion()` in `packages/parser/src/line-helpers.ts` extract these values from the first comment line and attach them to `RootNode.fileName` and `RootNode.version`.

### MissingAnnotation

A `# @missing:` line in a UCD file that declares the default property value for codepoints not otherwise listed in the file. Detected by `isMissingAnnotation()` in `line-helpers.ts`. Currently lands as an `UnknownNode` in the AST — will become its own node type in a future pass.

### EOF Marker

The literal line `# EOF` that appears at the end of some UCD files. Detected by `isEOFMarker()` in `line-helpers.ts`. Currently lands as an `UnknownNode` in the AST.

## API Classes

### RawDataFile

Class in `packages/parser/src/raw-data-file.ts`. Holds the raw content string and a parsed `RootNode`. Can be constructed from a content string or fetched from a URL via `RawDataFile.from()`. Use this when you need to work directly with the AST — inspect nodes, mutate the tree, or stringify back to text. Provides `toDataFile()` to convert to an immutable view.

### DataFile

Immutable frozen wrapper in `packages/parser/src/data-file.ts`. Created via `rawDataFile.toDataFile()`. Holds a frozen `RootNode`. Use this when you only need a safe, read-only view of the parsed AST to pass around without risk of mutation.
