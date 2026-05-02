/**
 * Parsed row from `ArabicShaping.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ArabicShaping.txt#L24-L26
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ArabicShaping.txt#L28-L32
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ArabicShaping.txt#L35-L41
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ArabicShaping.txt#L50-L60
 *
 * @unicodeVersion 8
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:35.506Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian, Phags-pa, Manichaean, Psalter Pahlavi, or other character.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ArabicShaping.txt#L24-L26
   */
  code_point: string;

  /**
   * a short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ArabicShaping.txt#L28-L32
   */
  schematic_name: string;

  /**
   * the joining type (property name: Joining_Type). R Right_Joining, L Left_Joining, D Dual_Joining, C Join_Causing, U Non_Joining, T Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ArabicShaping.txt#L35-L41
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * the joining group (property name: Joining_Group). The values of the joining group are based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ArabicShaping.txt#L50-L60
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
