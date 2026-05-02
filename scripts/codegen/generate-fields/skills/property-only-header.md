---
name: property-only-header
description: Use this skill when the header has NO explicit field declarations and NO "# Format:" block, so the file's structure is only documented in an external Unicode Standard Annex / Technical Report.
---

# Property Only Header

## When to Use This Skill

Use this skill when the file structure is only documented in an external Unicode Standard Annex or Technical Report.

Match this skill when ALL of the following are true:

- NO `# Field <n>:` declarations anywhere in the header
- NO `# Format:` block anywhere in the header

It does NOT matter whether the header contains a `# Property:` line.

`# @missing:` lines are default-value annotations. They are not row format declarations. For example, `# @missing: 0000..10FFFF; <script>` does not define a `<script>` field and must not be used as field evidence.

## Common Header Shapes

- Minimal headers that only reference `https://www.unicode.org/reports/tr44/` (e.g. `PropList.txt`, `DerivedCoreProperties.txt`, `DerivedAge.txt`, `auxiliary/*.txt`, `extracted/*.txt`).
- Headers with a `# Property: <Name>` line but no field declarations (e.g. `Scripts.txt` referencing UAX #24).
- Files with empty or near-empty headers like `UnicodeData.txt` (structure documented in UAX #44 Table 4-8 / §5.3).

## Required Procedure

1. Pick the most specific Unicode report URL referenced in the header (e.g. `https://www.unicode.org/reports/tr24/` for `Scripts.txt`). If the header references NO specific TR — or only references tr44 generically — use `https://www.unicode.org/reports/tr44/` as the fallback.
2. Call the `fetch_unicode_report` tool with that URL.
3. Read the relevant section of the fetched report to determine the correct field structure. For tr44, the Property Table (§5.3 "Properties" / Table of UCD files) documents every file's columns.
4. Each extracted field's source MUST be `report:<url>` where `<url>` is exactly the URL you fetched.

## Fallback

- If the header references a report URL but the fetch fails, try `https://www.unicode.org/reports/tr44/` as a second attempt before giving up.
- If BOTH fetches fail, return `{ "fields": [], "confidence": 0, "notes": "could not fetch <urls>" }`.
- NEVER extract fields from training data knowledge. If you cannot cite a fetched report, return `[]`.

## Rules

- Ignore all `# @missing:` lines when deciding fields. They document default values for omitted code points, not the record columns.
- Do NOT mix `header:L<n>` and `report:<url>` sources for a single field — pick the most specific.
- If the report lists valid property values, use `type.kind: "string"` with `type.literals`.
- Confidence should be 0.5-0.8 depending on how clear the report's field structure is.

## Example

Input:

```
L1: # Scripts-17.0.0.txt
L2: # For more information, see:
L3: #   UAX #24, Unicode Script Property: https://www.unicode.org/reports/tr24/
L4: # Property: Script
L5: # @missing: 0000..10FFFF; Unknown
```

Action: call `fetch_unicode_report({ url: "https://www.unicode.org/reports/tr24/" })`, then extract fields from the fetched content.

Output (after fetching):

```json
{
  "fields": [
    {
      "name": "code_point",
      "type": { "kind": "string" },
      "description": "Unicode code point or range.",
      "source": "report:https://www.unicode.org/reports/tr24/"
    },
    {
      "name": "script",
      "type": { "kind": "string" },
      "description": "Script property value per UAX #24.",
      "source": "report:https://www.unicode.org/reports/tr24/"
    }
  ],
  "confidence": 0.7,
  "notes": "Derived from UAX #24 Script property definition."
}
```
