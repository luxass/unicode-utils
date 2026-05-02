/**
 * Parsed row from `ArabicShaping.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ArabicShaping.txt#L39
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ArabicShaping.txt#L41-L46
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ArabicShaping.txt#L48-L60
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ArabicShaping.txt#L63-L101
 *
 * @unicodeVersion 17
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:00.063Z
 */
export interface ArabicShaping {
  /**
   * The code point of a character, in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ArabicShaping.txt#L39
   */
  code_point: string;

  /**
   * A short schematic name for that character.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ArabicShaping.txt#L41-L46
   */
  schematic_name: string;

  /**
   * Joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ArabicShaping.txt#L48-L60
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ArabicShaping.txt#L63-L101
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
