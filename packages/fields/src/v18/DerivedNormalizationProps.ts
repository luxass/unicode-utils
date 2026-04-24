/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:15:20.232Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point (hex) of the source character.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Space-separated list of Unicode code points in the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: Array<string>;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point", "fc_nfkc_closure"];
