/**
 * Parsed row from `ArabicShaping.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/ArabicShaping.txt#L23-L28
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/ArabicShaping.txt#L30-L35
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/ArabicShaping.txt#L37-L45
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/ArabicShaping.txt#L52-L62
 *
 * @unicodeVersion 12
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:10.078Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian, Phags-pa, Manichaean, Psalter Pahlavi, Hanifi Rohingya, Sogdian, or other character.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/ArabicShaping.txt#L23-L28
   */
  codepoint: string;

  /**
   * a short schematic name for that character descriptive of the shape, based consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/ArabicShaping.txt#L30-L35
   */
  schematic_name: string;

  /**
   * the joining type (property name: Joining_Type). R=Right_Joining, L=Left_Joining, D=Dual_Joining, C=Join_Causing, U=Non_Joining, T=Transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/ArabicShaping.txt#L37-L45
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * the joining group (property name: Joining_Group), based schematically on character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/ArabicShaping.txt#L52-L62
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["codepoint", "schematic_name", "joining_type", "joining_group"];
