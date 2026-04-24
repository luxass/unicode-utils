/**
 * Parsed row from `PropList.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:16:54.622Z
 */
export interface PropList {
  /**
   * Code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Name of a binary Unicode character property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["code_point", "property"];
