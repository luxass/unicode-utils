/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:02.858Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range for which the FC_NFKC_Closure applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * List of code points in the FC_NFKC_Closure for the given code point(s).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
