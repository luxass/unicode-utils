/**
 * Parsed row from `PropList.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:54:17.504Z
 */
export interface PropList {
  /**
   * Unicode code point or range in hexadecimal notation without U+ prefix, possibly a range with ..
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Name of the binary property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["codepoint_range", "property"];
