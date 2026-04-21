# Skill: Field N Pattern

Use this skill when the header contains explicit `# Field N: Name` declarations.

## Trigger

The header contains one or more lines matching `# Field <number>: <Name>` (possibly followed by parenthetical enum values).

## Extraction rules

- Each `Field N:` line defines one field. Preserve the order exactly.
- The name after the colon is the canonical field name — convert to snake_case.
- Parenthetical content like `(R = Right_Joining, L = Left_Joining, ...)` enumerates valid values — use a string literal union type.
- Confidence should be 0.9-1.0 unless types required significant judgement.

### Source ranges — include the FULL block

A field declaration often spans multiple continuation lines. The source MUST cover every line in the block, from the `# Field N:` line down to (and including) the last non-blank continuation line before the next blank `#` separator.

How to find the range:

1. Start at the `# Field N:` line (e.g. L23).
2. Walk forward — include every subsequent line that is NOT a blank comment line (`#` alone or `# ` with only whitespace/separator chars like `---` or `===`).
3. Stop at the first blank separator line. The last included line is the end of the range.

Examples:

- If `# Field 0:` is on L23 and continuation lines run through L25 with L26 being a blank `#`, the source is `header:L23-L25` — NOT just `header:L23`.
- If `# Field 1:` is on L27 and the description continues through L32 with L33 being blank, the source is `header:L27-L32`.
- If `# Field 2:` is on L34 with enum values listed on L35-L40 and L41 is blank, the source is `header:L34-L40`.
- A single-line field with no continuation (next line is blank) uses just `header:L<n>`.

## Example

Input:

```
L23: # Field 0: the code point, in 4-digit hexadecimal
L24: #   form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian,
L25: #   Phags-pa, Manichaean, Psalter Pahlavi, or other character.
L26: #
L27: # Field 1: gives a short schematic name for that character.
L28: #   The schematic name is descriptive of the shape, based as
L29: #   consistently as possible on a name for the skeleton and
L30: #   then the diacritic marks applied to the skeleton, if any.
L31: #   Note that this schematic name is considered a comment,
L32: #   and does not constitute a formal property value.
L33: #
L34: # Field 2: defines the joining type (property name: Joining_Type)
L35: #   R Right_Joining
L36: #   L Left_Joining
L37: #   D Dual_Joining
L38: #   C Join_Causing
L39: #   U Non_Joining
L40: #   T Transparent
L41: #
L49: # Field 3: defines the joining group (property name: Joining_Group)
```

Output:

```json
{
  "fields": [
    {
      "name": "code_point",
      "type": "string",
      "description": "The code point, in 4-digit hexadecimal form.",
      "source": "header:L23-L25"
    },
    {
      "name": "name",
      "type": "string",
      "description": "A short schematic name for the character.",
      "source": "header:L27-L32"
    },
    {
      "name": "joining_type",
      "type": "\"R\" | \"L\" | \"D\" | \"C\" | \"U\" | \"T\"",
      "description": "Joining type: R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.",
      "source": "header:L34-L40"
    },
    {
      "name": "joining_group",
      "type": "string",
      "description": "Joining group name based on character names.",
      "source": "header:L49"
    }
  ],
  "confidence": 1.0,
  "notes": "Explicit Field N declarations with clear enum for joining_type."
}
```
