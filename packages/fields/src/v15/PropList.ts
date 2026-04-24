/**
 * Parsed row from `PropList.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:50.520Z
 */
export interface PropList {
  /**
   * Unicode code point or range (first field).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property value for the listed property (second field).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_name: "Y" | "N";
}

export const PROP_LIST_FIELDS = ["code_point_range", "property_name"];
