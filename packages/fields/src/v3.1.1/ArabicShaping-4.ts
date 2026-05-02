/**
 * Parsed row from `ArabicShaping-4.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/ArabicShaping-4.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/ArabicShaping-4.txt#L14-L22
 *
 * @unicodeVersion 3.1.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:57:44.920Z
 */
export interface ArabicShaping4 {
  /**
   * Code point, in 4-digit hexadecimal form, of an Arabic or Syriac character.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/ArabicShaping-4.txt#L14-L22
   */
  code_point: string;

  /**
   * Short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/ArabicShaping-4.txt#L14-L22
   */
  schematic_name: string;

  /**
   * R right-joining, D dual-joining, U non-joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/ArabicShaping-4.txt#L14-L22
   */
  joining_type: "R" | "D" | "U";

  /**
   * Joining group.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/ArabicShaping-4.txt#L14-L22
   */
  joining_group: string;
}

export const ARABIC_SHAPING_4_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
