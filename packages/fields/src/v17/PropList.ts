/**
 * Parsed row from `PropList.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:52.349Z
 */
export interface PropList {
  /**
   * Unicode code point range (e.g. 0020..007E or single code point).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Binary property value for the listed property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Y" | "N";
}

export const PROP_LIST_FIELDS = ["codepoint_range", "property"];
