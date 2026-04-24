/**
 * Parsed row from `ArabicShaping.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L23-L62
 *
 * @unicodeVersion 13
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:39.758Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of a character.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L23-L26
   */
  codepoint: string;

  /**
   * a short schematic name for that character.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L23-L33
   */
  schematic_name: string;

  /**
   * the joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L23-L43
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L23-L62
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "codepoint",
  "schematic_name",
  "joining_type",
  "joining_group",
];
