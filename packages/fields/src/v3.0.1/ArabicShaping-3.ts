/**
 * Parsed row from `ArabicShaping-3.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/ArabicShaping-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/ArabicShaping-3.txt#L16-L22
 *
 * @unicodeVersion 3.0.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:08.580Z
 */
export interface ArabicShaping3 {
  /**
   * The code point, in 4-digit hexadecimal form, of an Arabic or Syriac character.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/ArabicShaping-3.txt#L16-L17
   */
  code_point: string;

  /**
   * A short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/ArabicShaping-3.txt#L18-L19
   */
  schematic_name: string;

  /**
   * The joining type: R right-joining, D dual-joining, U non-joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/ArabicShaping-3.txt#L20-L21
   */
  joining_type: "R" | "D" | "U";

  /**
   * The joining group.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/ArabicShaping-3.txt#L22
   */
  joining_group: string;
}

export const ARABIC_SHAPING_3_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
