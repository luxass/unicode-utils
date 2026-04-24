/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/DerivedNormalizationProps.txt#L12-L16
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:27.122Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point range or singleton.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Space-separated list of code points constituting the FC_NFKC_Closure of the code point(s), generated from NFKC(Fold(a)) computations (DEPRECATED as of Unicode 6.0.0).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
