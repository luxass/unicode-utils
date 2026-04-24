/**
 * Parsed row from `PropList.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:17:28.147Z
 */
export interface PropList {
  /**
   * Unicode code point or range in hex format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Name of the binary property that is Yes for these code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["code_point_range", "property"];
