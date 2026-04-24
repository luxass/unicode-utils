/**
 * Parsed row from `PropList-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/PropList-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:32.408Z
 */
export interface PropList320 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property value (Yes or No).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Y" | "N";
}

export const PROP_LIST_320_FIELDS = ["code_point_range", "property"];
