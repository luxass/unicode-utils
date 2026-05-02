/**
 * Parsed row from `ArabicShaping.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L42
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L44-L49
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L51-L57
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L66
 *
 * @unicodeVersion 18
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:39:47.408Z
 */
export interface ArabicShaping {
  /**
   * The code point of a character, in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L42
   */
  code_point: string;

  /**
   * Gives a short schematic name for that character; considered a comment and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L44-L49
   */
  schematic_name: string;

  /**
   * Defines the joining type (property name: Joining_Type): R Right_Joining; L Left_Joining; D Dual_Joining; C Join_Causing; U Non_Joining; T Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L51-L57
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Defines the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L66
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
