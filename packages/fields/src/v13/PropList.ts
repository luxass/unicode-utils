/**
 * Parsed row from `PropList.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:51:49.611Z
 */
export interface PropList {
  /**
   * Unicode code point or range in the form 'HHHH' or 'HHHH..HHHH', where H are hex digits.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property value: 'Y' for Yes, 'N' for No.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Y" | "N";
}

export const PROP_LIST_FIELDS = ["code_point_range", "property_value"];
