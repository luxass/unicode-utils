/**
 * Parsed row from `PropList.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:47.013Z
 */
export interface PropList {
  /**
   * Code point range in hexadecimal notation (e.g. 0000..007F or single code point).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Binary property value for the listed code points (Y or N).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Y" | "N";
}

export const PROP_LIST_FIELDS = ["range", "property_value"];
