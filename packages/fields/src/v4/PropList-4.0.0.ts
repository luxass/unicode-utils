/**
 * Parsed row from `PropList-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/PropList-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:34.871Z
 */
export interface PropList400 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Name of the binary property assigned to the code point(s).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_400_FIELDS = ["codepoint_range", "property"];
