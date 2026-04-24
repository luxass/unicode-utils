/**
 * Parsed row from `PropList.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:17:44.611Z
 */
export interface PropList {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Name of the binary property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["code_point_range", "property"];
