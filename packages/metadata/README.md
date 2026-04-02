# @unicode-utils/metadata

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Unicode version constants and metadata for the Unicode Character Database (UCD).

## Installation

```bash
npm install @unicode-utils/metadata
```

## Exports

### Version constants

| Export                   | Description                             |
| ------------------------ | --------------------------------------- |
| `UNICODE_DRAFT_VERSION`  | Current draft version (e.g. `"18.0.0"`) |
| `UNICODE_STABLE_VERSION` | Latest stable release (e.g. `"17.0.0"`) |

### `UNICODE_VERSION_METADATA`

Complete list of Unicode versions with their metadata.

```ts
import { UNICODE_VERSION_METADATA } from "@unicode-utils/metadata";

for (const entry of UNICODE_VERSION_METADATA) {
  console.log(entry.version); // "16.0.0"
  console.log(entry.ucdUrl); // URL to the UCD for this version
  console.log(entry.documentationUrl); // URL to the Unicode standard docs
  console.log(entry.date); // Release year
}
```

### `UnicodeVersionMetadata`

TypeScript type for a single version entry.

```ts
import type { UnicodeVersionMetadata } from "@unicode-utils/metadata";
```

## License

Published under [MIT License](./LICENSE).

[npm-version-src]: https://img.shields.io/npm/v/@unicode-utils/metadata?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/@unicode-utils/metadata
[npm-downloads-src]: https://img.shields.io/npm/dm/@unicode-utils/metadata?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/@unicode-utils/metadata
