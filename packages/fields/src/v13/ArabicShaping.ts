/**
 * Parsed row from `ArabicShaping.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L25
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L28-L33
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L35-L41
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L50-L60
 *
 * @unicodeVersion 13
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:37.523Z
 */
export interface ArabicShaping {
  /**
   * The code point, in 4-digit hexadecimal form, of a character.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L25
   */
  code_point: string;

  /**
   * A short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L28-L33
   */
  schematic_name: string;

  /**
   * Defines the joining type (property name: Joining_Type). R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L35-L41
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Defines the joining group (property name: Joining_Group). The values of the joining group are based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ArabicShaping.txt#L50-L60
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
