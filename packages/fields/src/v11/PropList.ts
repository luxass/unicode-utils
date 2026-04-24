/**
 * Parsed row from `PropList.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:20.383Z
 */
export interface PropList {
  /**
   * Unicode code point range in the first field of PropList.txt, as documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property value in the second field of PropList.txt, as documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Y" | "N";
}

export const PROP_LIST_FIELDS = ["code_point_range", "property"];
