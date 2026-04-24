/**
 * Parsed row from `ArabicShaping.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L21-L22
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L24-L28
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L31-L38
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L40
 *
 * @unicodeVersion 6.1
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:54.719Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, or Mandaic character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L21-L22
   */
  code_point: string;

  /**
   * gives a short schematic name for that character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L24-L28
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L31-L38
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L40
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
