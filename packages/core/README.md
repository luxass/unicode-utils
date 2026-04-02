# @unicode-utils/core

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

High-level public API for working with Unicode Character Database (UCD) files. Re-exports from `@unicode-utils/parser` and `@unicode-utils/metadata` alongside utilities for codepoints, UCD paths, and version resolution.

## Installation

```bash
npm install @unicode-utils/core
```

## Exports

### From `@unicode-utils/metadata`

| Export                     | Description                             |
| -------------------------- | --------------------------------------- |
| `UNICODE_DRAFT_VERSION`    | Current draft version (e.g. `"18.0.0"`) |
| `UNICODE_STABLE_VERSION`   | Latest stable release (e.g. `"17.0.0"`) |
| `UNICODE_VERSION_METADATA` | Full list of Unicode version metadata   |

### `getCurrentDraftVersion`

Fetches the current draft version dynamically.

```ts
import { getCurrentDraftVersion } from "@unicode-utils/core";

const version = await getCurrentDraftVersion();
```

### `resolveUCDVersion` / `UNICODE_TO_UCD_VERSION_MAPPINGS`

Maps Unicode version strings to their corresponding UCD version.

```ts
import { resolveUCDVersion } from "@unicode-utils/core";

const ucdVersion = resolveUCDVersion("15.1.0");
```

### `buildUCDPath` / `hasUCDFolderPath`

Utilities for constructing UCD file paths.

```ts
import { buildUCDPath } from "@unicode-utils/core";

const path = buildUCDPath("16.0.0", "Scripts.txt");
```

### Codepoint utilities

| Export               | Description                                      |
| -------------------- | ------------------------------------------------ |
| `expandHexRange`     | Expand `"0000..007F"` into individual codepoints |
| `fromHexToCodepoint` | Convert a hex string to a numeric codepoint      |
| `stripHex`           | Strip leading zeros from a hex string            |

### From `@unicode-utils/parser`

`RawDataFile` and line-helper utilities are re-exported for convenience.

## License

Published under [MIT License](./LICENSE).

[npm-version-src]: https://img.shields.io/npm/v/@unicode-utils/core?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/@unicode-utils/core
[npm-downloads-src]: https://img.shields.io/npm/dm/@unicode-utils/core?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/@unicode-utils/core
