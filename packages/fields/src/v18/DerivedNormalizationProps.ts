/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:26.311Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point range for which the FC_NFKC_Closure mappings apply.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  codepoint_range: string;

  /**
   * Closures under NFKC of full case folding, listed as space-separated code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  fc_nfkc_closure: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
