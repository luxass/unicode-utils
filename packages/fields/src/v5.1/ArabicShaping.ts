/**
 * Parsed row from `ArabicShaping.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L20-L32
 *
 * @unicodeVersion 5.1
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:42.298Z
 */
export interface ArabicShaping {
  /**
   * The code point, in 4-digit hexadecimal form, of an Arabic or Syriac character.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L20-L21
   */
  code_point: string;

  /**
   * A short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L22-L23
   */
  schematic_name: string;

  /**
   * Joining type (property name: Joining_Type). R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L24-L31
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/ArabicShaping.txt#L32
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
