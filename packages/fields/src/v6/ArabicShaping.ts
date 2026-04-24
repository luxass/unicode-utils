/**
 * Parsed row from `ArabicShaping.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L20-L21
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L23-L26
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L28-L35
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L37-L47
 *
 * @unicodeVersion 6
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:58.030Z
 */
export interface ArabicShaping {
  /**
   * The code point, in 4-digit hexadecimal form, of an Arabic, Syriac, or N'Ko character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L20-L21
   */
  code_point: string;

  /**
   * A short schematic name for that character, abbreviated from the normative Unicode character name. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L23-L26
   */
  schematic_name: string;

  /**
   * Joining type (property name: Joining_Type): R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L28-L35
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Joining group (property name: Joining_Group), based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ArabicShaping.txt#L37-L47
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
