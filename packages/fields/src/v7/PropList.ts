/**
 * Parsed row from `PropList.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/PropList.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:27.218Z
 */
export interface PropList {
  /**
   * Code point range in the standard UCD format (e.g. '0041' or '0041..0061').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property name (Yes or No).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_name: string;
}

export const PROP_LIST_FIELDS = ["code_point_range", "property_name"];
