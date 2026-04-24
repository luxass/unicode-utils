/**
 * Parsed row from `ArabicShaping.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L20-L21
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L23-L24
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L26-L33
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L35
 *
 * @unicodeVersion 5.2
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:40.331Z
 */
export interface ArabicShaping {
  /**
   * The code point, in 4-digit hexadecimal form, of an Arabic, Syriac, or N'Ko character.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L20-L21
   */
  code_point: string;

  /**
   * A short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L23-L24
   */
  schematic_name: string;

  /**
   * Joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L26-L33
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L35
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
