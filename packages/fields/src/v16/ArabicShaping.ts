/**
 * Parsed row from `ArabicShaping.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L39-L46
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L48-L54
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L63
 *
 * @unicodeVersion 16
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:13.671Z
 */
export interface ArabicShaping {
  /**
   * The code point of a character, in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L39-L40
   */
  code_point: string;

  /**
   * A short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L41-L46
   */
  schematic_name: string;

  /**
   * Joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L48-L54
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt#L63
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
