/**
 * Parsed row from `PropList.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:38.435Z
 */
export interface PropList {
  /**
   * Code point range in the form <code> or <start>..<end>.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property value: Y or N.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Y" | "N";
}

export const PROP_LIST_FIELDS = ["code_point_range", "property"];
