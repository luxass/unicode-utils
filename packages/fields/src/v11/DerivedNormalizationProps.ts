/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:10.200Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point range (e.g. 0061..007A).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Space-separated list of code points in the FC_NFKC_Closure of the code point(s), or <none>.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
