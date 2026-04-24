/**
 * Parsed row from `ArabicShaping-2.txt` (Unicode 3).
 *
 * @see https://unicode.org/Public/3.0-Update/ArabicShaping-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/ArabicShaping-2.txt#L1
 *
 * @unicodeVersion 3
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:42.854Z
 */
export interface ArabicShaping2 {
  /**
   * ; Schematic Name; Link; Link Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/ArabicShaping-2.txt#L1
   */
  unicode: string;

  /**
   * Schematic name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/ArabicShaping-2.txt#L1
   */
  schematic_name: string;

  /**
   * Link.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/ArabicShaping-2.txt#L1
   */
  link: string;

  /**
   * Link group.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/ArabicShaping-2.txt#L1
   */
  link_group: string;
}

export const ARABIC_SHAPING_2_FIELDS = ["unicode", "schematic_name", "link", "link_group"];
