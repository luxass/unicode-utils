/**
 * Parsed row from `ArabicShaping-1.txt` (Unicode 2).
 *
 * @see https://unicode.org/Public/2.0-Update/ArabicShaping-1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.0-Update/ArabicShaping-1.txt#L1
 *
 * @unicodeVersion 2
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:49.913Z
 */
export interface ArabicShaping1 {
  /**
   * ; Name; Link; Link Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/ArabicShaping-1.txt#L1
   */
  unicode: string;

  /**
   * Unicode; Name; Link; Link Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/ArabicShaping-1.txt#L1
   */
  name: string;

  /**
   * Unicode; Name; Link; Link Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/ArabicShaping-1.txt#L1
   */
  link: string;

  /**
   * Link group classification.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/ArabicShaping-1.txt#L1
   */
  link_group: string;
}

export const ARABIC_SHAPING_1_FIELDS = ["unicode", "name", "link", "link_group"];
