/**
 * Parsed row from `ArabicShaping.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L21-L22
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L24-L29
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L31-L38
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L40-L50
 *
 * @unicodeVersion 6.2
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:49.721Z
 */
export interface ArabicShaping {
  /**
   * The code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, or Mandaic character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L21-L22
   */
  code_point: string;

  /**
   * A short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L24-L29
   */
  schematic_name: string;

  /**
   * Joining type (property name: Joining_Type): R Right_Joining, L Left_Joining, D Dual_Joining, C Join_Causing, U Non_Joining, T Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L31-L38
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Joining group (property name: Joining_Group). The values of the joining group are based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ArabicShaping.txt#L40-L50
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
