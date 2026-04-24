/**
 * Parsed row from `ArabicShaping.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L39-L46
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L48-L55
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L63-L74
 *
 * @unicodeVersion 16
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:00:47.245Z
 */
export interface ArabicShaping {
  /**
   * the code point of a character, in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L39-L40
   */
  code_point: string;

  /**
   * gives a short schematic name for that character.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L41-L46
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type)
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L48-L55
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group (property name: Joining_Group)
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L63-L74
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
