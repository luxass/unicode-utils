/**
 * Parsed row from `PropList-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/PropList-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:43.056Z
 */
export interface PropList310 {
  /**
   * Unicode code point or range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property value indicating whether characters have the extended property (Y) or not (N).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Y" | "N";
}

export const PROP_LIST_310_FIELDS = ["code_point_range", "property"];
