# @unicode-utils-tooling/tsconfig

This package provides a set of tsconfig's which all other tsconfig's can inherit from

## Usage

To use this package, setup your tsconfig by extending one of the base configurations provided in this package.

### Base

```jsonc
// tsconfig.json
{
  "extends": "@unicode-utils-tooling/tsconfig/base",
  "include": ["src", "test"],
  "exclude": ["dist"]
}
```

### Build

```jsonc
// tsconfig.build.json
{
  "extends": "@unicode-utils-tooling/tsconfig/base.build",
  "include": ["src"],
  "exclude": ["dist"]
}
```

## 📄 License

Published under [MIT License](./LICENSE).
