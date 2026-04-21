# Skill: Field N Pattern

Use this skill when the header contains explicit `# Field N: Name` declarations.

## Trigger

The header contains one or more lines matching `# Field <number>: <Name>` (possibly followed by parenthetical enum values).

## Extraction rules

- Each `Field N:` line defines one field. Preserve the order exactly.
- The name after the colon is the canonical field name — convert to snake_case.
- Parenthetical content like `(R = Right_Joining, L = Left_Joining, ...)` enumerates valid values — use a string literal union type.
- Each field's source is the single header line it was declared on: `header:L<n>`.
- If an enum's values are wrapped across multiple header lines, use a range: `header:L<start>-L<end>`.
- Confidence should be 0.9-1.0 unless types required significant judgement.

## Example

Input:

```
L12: # Field 0: Code_Point
L13: # Field 1: Name
L14: # Field 2: Joining_Type (R = Right_Joining, L = Left_Joining, D = Dual_Joining, C = Join_Causing, U = Non_Joining, T = Transparent)
L15: # Field 3: Joining_Group
```

Output:

```json
{
  "fields": [
    {
      "name": "code_point",
      "type": "string",
      "description": "Unicode code point in hexadecimal.",
      "source": "header:L12"
    },
    {
      "name": "name",
      "type": "string",
      "description": "Schematic name for the character.",
      "source": "header:L13"
    },
    {
      "name": "joining_type",
      "type": "\"R\" | \"L\" | \"D\" | \"C\" | \"U\" | \"T\"",
      "description": "Joining type: R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.",
      "source": "header:L14"
    },
    {
      "name": "joining_group",
      "type": "string",
      "description": "Joining group name based on character names.",
      "source": "header:L15"
    }
  ],
  "confidence": 1.0,
  "notes": "Explicit Field N declarations with clear enum for joining_type."
}
```
