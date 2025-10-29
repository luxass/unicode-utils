# @luxass/unicode-utils

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Utilities for working with Unicode.

> [!IMPORTANT]
> This package is still in a very early stage of development and many things are still missing. If you have any suggestions or ideas, please open an issue or a pull request.

## Installation

```bash
npm install @luxass/unicode-utils
```

## Usage

```ts
import { getDataFileComments, UNICODE_VERSIONS, UNICODE_VERSIONS_WITH_UCD } from "@luxass/unicode-utils";

console.log(UNICODE_VERSIONS); // List of Unicode Versions
console.log(UNICODE_VERSIONS_WITH_UCD); // List of Unicode Versions with UCD

const dataFileComments = getDataFileComments("UnicodeData.txt");
console.log(dataFileComments); // Comments from UnicodeData.txt
```

## 📄 License

Published under [MIT License](./LICENSE).

> [!NOTE]
> The files inside `test/fixtures/data-files` & `ucd-files` is not part of the MIT license, and instead licensed under the [Unicode License](https://unicode.org/copyright.html#License). The files are used for testing purposes only and are not part of the package.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@luxass/unicode-utils?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/@luxass/unicode-utils
[npm-downloads-src]: https://img.shields.io/npm/dm/@luxass/unicode-utils?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/@luxass/unicode-utils
