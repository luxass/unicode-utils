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
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T03:55:05.597Z
 */
export interface PropList {
  /**
   * Unicode code point or range in hexadecimal notation (e.g., '0041' or '0041..004E').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Name of the binary Unicode character property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["code_point", "property"];
