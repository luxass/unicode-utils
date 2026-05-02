/**
 * Parsed row from `ArabicShaping.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L18-L21
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L23-L24
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L26-L33
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L35-L46
 *
 * @unicodeVersion 5.2
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:25.915Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, or N'Ko character.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L18-L21
   */
  codepoint: string;

  /**
   * short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L23-L24
   */
  schematic_name: string;

  /**
   * Joining_Type property: R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L26-L33
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Joining_Group property value, based schematically on character names with parts joined by underscores.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/ArabicShaping.txt#L35-L46
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["codepoint", "schematic_name", "joining_type", "joining_group"];
