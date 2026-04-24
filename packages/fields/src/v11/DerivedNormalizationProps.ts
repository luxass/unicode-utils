/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:45.229Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point range or singleton.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * List of code points constituting the FC_NFKC_Closure derived from NFKC(Fold(a)) computations (DEPRECATED as of Unicode 6.0.0).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
