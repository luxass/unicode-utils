/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:28:22.442Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range for which the property applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Space-separated list of code points constituting the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: Array<string>;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
