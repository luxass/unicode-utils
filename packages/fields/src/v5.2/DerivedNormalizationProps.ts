/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:52:04.363Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point or range for which the FC_NFKC_Closure is defined.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Space-separated list of one or more code points or ranges constituting the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
