/**
 * Parsed row from `ArabicShaping.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L21-L22
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L24
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L31-L37
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L40
 *
 * @unicodeVersion 6.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:17.620Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, or Mandaic character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L21-L22
   */
  codepoint: string;

  /**
   * gives a short schematic name for that character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L24
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L31-L37
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ArabicShaping.txt#L40
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["codepoint", "schematic_name", "joining_type", "joining_group"];
