/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:19:36.624Z
 */
export interface DerivedNormalizationProps {
  /**
   * Source code point or range in the FC_NFKC_Closure mapping.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  source_range: string;

  /**
   * Target code point sequence constituting the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  closure: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["source_range", "closure"];
