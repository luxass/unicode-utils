/**
 * Parsed row from `ArabicShaping.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L23-L92
 *
 * @unicodeVersion 11
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:00.534Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian, Phags-pa, Manichaean, Psalter Pahlavi, Hanifi Rohingya, Sogdian, or other character.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L23-L28
   */
  codepoint: string;

  /**
   * a short schematic name for that character descriptive of the shape, based consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L23-L35
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type) with values R (Right_Joining), L (Left_Joining), D (Dual_Joining), C (Join_Causing), U (Non_Joining), T (Transparent). See Section 9.2, Arabic for more information on these joining types.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L23-L50
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group (property name: Joining_Group). The values of the joining group are based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L23-L92
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["codepoint", "schematic_name", "joining_type", "joining_group"];
