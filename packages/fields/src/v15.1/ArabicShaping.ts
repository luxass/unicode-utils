/**
 * Parsed row from `ArabicShaping.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ArabicShaping.txt#L24-L27
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ArabicShaping.txt#L29-L34
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ArabicShaping.txt#L36-L42
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ArabicShaping.txt#L51-L61
 *
 * @unicodeVersion 15.1
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:12.080Z
 */
export interface ArabicShaping {
  /**
   * The code point, in 4-digit hexadecimal form, of a character.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ArabicShaping.txt#L24-L27
   */
  code_point: string;

  /**
   * A short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ArabicShaping.txt#L29-L34
   */
  schematic_name: string;

  /**
   * Defines the joining type (property name: Joining_Type). R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ArabicShaping.txt#L36-L42
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Defines the joining group (property name: Joining_Group). The values of the joining group are based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ArabicShaping.txt#L51-L61
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
