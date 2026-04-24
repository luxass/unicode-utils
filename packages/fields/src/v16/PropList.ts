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
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:54.108Z
 */
export interface PropList {
  /**
   * Unicode code point or code point range.
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

export const PROP_LIST_FIELDS = ["code_point_range", "property"];
