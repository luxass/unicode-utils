/**
 * Parsed row from `ArabicShaping.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/ArabicShaping.txt#L20
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/ArabicShaping.txt#L22
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/ArabicShaping.txt#L24-L30
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/ArabicShaping.txt#L32
 *
 * @unicodeVersion 4.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:38.007Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/ArabicShaping.txt#L20
   */
  code_point: string;

  /**
   * a short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/ArabicShaping.txt#L22
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/ArabicShaping.txt#L24-L30
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/ArabicShaping.txt#L32
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
