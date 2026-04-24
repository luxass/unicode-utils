/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:55:11.558Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point (single or range) to which the FC_NFKC_Closure mapping applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Space-separated list of code points constituting the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point", "fc_nfkc_closure"];
