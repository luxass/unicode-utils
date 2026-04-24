/**
 * Parsed row from `DerivedNormalizationProps-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/DerivedNormalizationProps-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/DerivedNormalizationProps-3.2.0.txt#L13-L16
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:20.330Z
 */
export interface DerivedNormalizationProps320 {
  /**
   * Code point range for the FC_NFKC_Closure mapping.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/DerivedNormalizationProps-3.2.0.txt#L13-L16
   */
  codepoint_range: string;

  /**
   * List of code points constituting the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/DerivedNormalizationProps-3.2.0.txt#L13-L16
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_320_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
