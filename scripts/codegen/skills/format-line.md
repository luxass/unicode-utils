# Skill: Format Line Pattern

Use this skill when the header contains a `# Format:` block followed by a single line describing the record shape using angle-bracket tokens.

## Trigger

The header contains a line like `# Format:` followed by `# <token1> ; <token2> # <token3>` — tokens in angle brackets are field names, separated by `;` or `#`.

## Extraction rules

- Angle-bracket tokens are field names. Strip brackets, parentheses, and special chars.
  - `<codepoint(s)>` → `codepoints`
  - `<property>` → `property`
  - `<comment>` → `comment`
- Tokens before `#` are data fields; tokens after `#` are trailing comment fields — include both.
- All fields cite the format line itself: `header:L<n>`.
- If the format line is preceded by per-column explanations (e.g. `# Column 1: ...`), include those as additional header:L<n> sources where relevant.
- Types are almost always `string` unless a column is explicitly labelled numeric or boolean.
- Confidence should be 0.8-0.9 (format line is explicit but types are usually inferred).

## Example

Input:

```
L7: # Format:
L8: # <codepoint(s)> ; <property> # <comments>
```

Output:

```json
{
  "fields": [
    {
      "name": "codepoints",
      "type": "string",
      "description": "One or more Unicode code points in hexadecimal.",
      "source": "header:L8"
    },
    {
      "name": "property",
      "type": "string",
      "description": "The property value.",
      "source": "header:L8"
    },
    {
      "name": "comments",
      "type": "string",
      "description": "Informational comment.",
      "source": "header:L8"
    }
  ],
  "confidence": 0.9,
  "notes": "Format line clear; all types defaulted to string."
}
```
