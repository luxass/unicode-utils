/**
 * Parsed row from `ArabicShaping.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L24-L26
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L28-L33
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L35-L42
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L50
 *
 * @unicodeVersion 10
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:59.194Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian, Phags-pa, Manichaean, Psalter Pahlavi, or other character.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L24-L26
   */
  codepoint: string;

  /**
   * a short schematic name for that character.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L28-L33
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L35-L42
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T" | "Right_Joining" | "Left_Joining" | "Dual_Joining" | "Join_Causing" | "Non_Joining" | "Transparent" | (string & {});

  /**
   * defines the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L50
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["codepoint", "schematic_name", "joining_type", "joining_group"];
