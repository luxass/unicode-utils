/**
 * Parsed row from `ArabicShaping.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L18-L32
 *
 * @unicodeVersion 5.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:12.908Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic or Syriac character.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L18-L21
   */
  codepoint: string;

  /**
   * short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L18-L22
   */
  schematic_name: string;

  /**
   * joining type (property name: Joining_Type): R Right_Joining, L Left_Joining, D Dual_Joining, C Join_Causing, U Non_Joining, T Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L18-L30
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L18-L32
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["codepoint", "schematic_name", "joining_type", "joining_group"];
