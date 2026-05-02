/**
 * Parsed row from `ArabicShaping.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L18-L21
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L23-L26
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L28-L35
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L37-L48
 *
 * @unicodeVersion 6
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:37.555Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, or N'Ko character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L18-L21
   */
  codepoint: string;

  /**
   * short schematic name for that character, abbreviated from the normative Unicode character name. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L23-L26
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type). R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L28-L35
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group (property name: Joining_Group). The values of the joining group are based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L37-L48
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["codepoint", "schematic_name", "joining_type", "joining_group"];
