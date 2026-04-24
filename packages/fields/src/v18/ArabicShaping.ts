/**
 * Parsed row from `ArabicShaping.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L40-L49
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L51-L58
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L66-L77
 *
 * @unicodeVersion 18
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:06.807Z
 */
export interface ArabicShaping {
  /**
   * The code point of a character, in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L40-L43
   */
  code_point: string;

  /**
   * A short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L44-L49
   */
  schematic_name: string;

  /**
   * Joining type (property name: Joining_Type). R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L51-L58
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Joining group (property name: Joining_Group). The values of the joining group are based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/ArabicShaping.txt#L66-L77
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
