# UCD CLI

Use the `@ucdjs/cli` to fetch and inspect real UCD files directly from unicode.org. Always do this before writing a parser definition or test - do not guess file structure from memory.

```sh
npx @ucdjs/cli@beta files --help
```

---

## Commands

### `files get <path>`

Fetch a file from `https://unicode.org/Public/<path>` and print its content to stdout.

```sh
# ArabicShaping.txt for Unicode 17.0.0
npx @ucdjs/cli@beta files get 17.0.0/ucd/ArabicShaping.txt

# Scripts.txt for Unicode 16.0.0
npx @ucdjs/cli@beta files get 16.0.0/ucd/Scripts.txt

# An older version
npx @ucdjs/cli@beta files get 4.1.0/ucd/UnicodeData.txt
```

### `files list <path>`

List the contents of a directory under `https://unicode.org/Public/<path>`.

```sh
# What's in the 17.0.0 UCD directory?
npx @ucdjs/cli@beta files list 17.0.0/ucd/

# What Unicode versions are available?
npx @ucdjs/cli@beta files list .
```

---

## When to use this

**Before writing a new parser definition** - fetch the actual file and read the first 30–50 lines. Confirm:

- The exact separator (`;` vs `\t`)
- Whether fields are trimmed or not
- Whether the file has `# @missing:` annotations
- Whether section headers follow the standard boundary+comment pattern or are flat (no sections)
- The exact field count and whether optional fields appear on some lines but not others

**Before writing tests** - fetch the file for the specific version under test. Do not assume a file's format is identical across all Unicode versions. Older versions (v4.x, v5.x) sometimes have fewer fields or different separators.

**When a parse fails on a specific version** - fetch that exact version of the file and compare it to the version that works.

---

## Example workflow

You are adding a parser for `NameAliases.txt` for Unicode 17.0.0:

```sh
# 1. Look at the actual file
npx @ucdjs/cli@beta files get 17.0.0/ucd/NameAliases.txt | head -40

# 2. Check an older version to spot format differences
npx @ucdjs/cli@beta files get 6.1.0/ucd/NameAliases.txt | head -40

# 3. List the directory if you are unsure of the exact filename
npx @ucdjs/cli@beta files list 17.0.0/ucd/ | grep -i alias
```

Then write your parser logic and tests based on what you actually see.
