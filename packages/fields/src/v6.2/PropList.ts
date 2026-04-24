/**
 * Parsed row from `PropList.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:52.321Z
 */
export interface PropList {
  /**
   * Field 1: Code point or code point range in the syntax <code>;<property> per UCD file format conventions documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Field 2: Binary property value (Y or N) for characters in the code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Y" | "N";
}

export const PROP_LIST_FIELDS = ["code_point_range", "property_value"];
