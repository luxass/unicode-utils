/**
 * Parsed row from `PropList.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:51:55.654Z
 */
export interface PropList {
  /**
   * Unicode code point or range (e.g. '0020..007E').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Name of the binary property (e.g. 'White_Space').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["code_point", "property"];
