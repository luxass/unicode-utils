/**
 * Parsed row from `PropList.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:51:48.968Z
 */
export interface PropList {
  /**
   * Hexadecimal code point or range (e.g. '0020..0020').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Name of the binary property (e.g. 'White_Space').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["code_point_range", "property"];
