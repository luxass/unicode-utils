/**
 * Parsed row from `PropList.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:08.130Z
 */
export interface PropList {
  /**
   * Unicode code point or range (first/last).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property value for the listed property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Y" | "N";
}

export const PROP_LIST_FIELDS = ["code_point_range", "property_value"];
