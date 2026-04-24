/**
 * Parsed row from `ArabicShaping-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/ArabicShaping-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/ArabicShaping-4.0.1.txt#L16
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/ArabicShaping-4.0.1.txt#L18
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/ArabicShaping-4.0.1.txt#L20-L26
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/ArabicShaping-4.0.1.txt#L28
 *
 * @unicodeVersion 4.0.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:34:51.081Z
 */
export interface ArabicShaping401 {
  /**
   * the code point, in 4-digit hexadecimal.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/ArabicShaping-4.0.1.txt#L16
   */
  code_point: string;

  /**
   * gives a short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/ArabicShaping-4.0.1.txt#L18
   */
  schematic_name: string;

  /**
   * defines the joining type: R right-joining, L left-joining, D dual-joining, C join-causing, U non-joining, T transparent.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/ArabicShaping-4.0.1.txt#L20-L26
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/ArabicShaping-4.0.1.txt#L28
   */
  joining_group: string;
}

export const ARABIC_SHAPING_401_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
