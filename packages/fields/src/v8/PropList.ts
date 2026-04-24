/**
 * Parsed row from `PropList.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:53:30.699Z
 */
export interface PropList {
  /**
   * Unicode code point or range as documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property name as listed in PropList.txt per UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const PROP_LIST_FIELDS = ["code_point_range", "property"];
