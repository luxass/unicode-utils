/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:33.950Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point range (e.g. 0061 or 0061..0061).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Space-separated list of code points in the FC_NFKC_Closure of the code point(s), or <none> if none.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
