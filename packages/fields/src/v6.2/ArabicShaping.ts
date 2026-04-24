/**
 * Parsed row from `ArabicShaping.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L21
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L24
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L31-L38
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L40
 *
 * @unicodeVersion 6.2
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:50.907Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L21
   */
  codepoint: string;

  /**
   * a short schematic name for that character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L24
   */
  schematic_name: string;

  /**
   * the joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L31-L38
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L40
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "codepoint",
  "schematic_name",
  "joining_type",
  "joining_group",
];
