/**
 * Parsed row from `ArabicShaping-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/ArabicShaping-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/ArabicShaping-3.2.0.txt#L17-L23
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/ArabicShaping-3.2.0.txt#L46
 *
 * @unicodeVersion 3.2
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:53.488Z
 */
export interface ArabicShaping320 {
  /**
   * Code point, in 4-digit hexadecimal form, of an Arabic or Syriac character.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/ArabicShaping-3.2.0.txt#L17-L18
   */
  code_point: string;

  /**
   * Short schematic name for that character, abbreviated from the normative Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/ArabicShaping-3.2.0.txt#L19-L20
   */
  schematic_name: string;

  /**
   * R right-joining, D dual-joining, U non-joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/ArabicShaping-3.2.0.txt#L21-L22
   */
  joining_type: "R" | "D" | "U";

  /**
   * Joining group.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/ArabicShaping-3.2.0.txt#L23
   */
  joining_group: string;

  /**
   * Unicode; Schematic Name; Joining Type; Joining Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/ArabicShaping-3.2.0.txt#L46
   */
  comment: string;
}

export const ARABIC_SHAPING_320_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
  "comment",
];
