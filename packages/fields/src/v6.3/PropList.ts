/**
 * Parsed row from `PropList.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:56.729Z
 */
export interface PropList {
  /**
   * Code point or code point range.
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
