/**
 * Parsed row from `PropList.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:49:57.234Z
 */
export interface PropList {
  /**
   * Unicode code point or range (e.g. '0009' or '0020..0020').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Binary property name (e.g. 'White_Space') for which the code points have value 'Y'.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["codepoint_range", "property"];
