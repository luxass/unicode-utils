/**
 * Parsed row from `ArabicShaping.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L25-L28
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L30-L35
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L37-L43
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L52
 *
 * @unicodeVersion 11
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:55.671Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian, Phags-pa, Manichaean, Psalter Pahlavi, Hanifi Rohingya, Sogdian, or other character.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L25-L28
   */
  codepoint: string;

  /**
   * a short schematic name for that character.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L30-L35
   */
  schematic_name: string;

  /**
   * the joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L37-L43
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ArabicShaping.txt#L52
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "codepoint",
  "schematic_name",
  "joining_type",
  "joining_group",
];
