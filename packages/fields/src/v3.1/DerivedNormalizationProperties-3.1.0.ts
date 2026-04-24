/**
 * Parsed row from `DerivedNormalizationProperties-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedNormalizationProperties-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNormalizationProperties-3.1.0.txt#L13-L16
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:24.951Z
 */
export interface DerivedNormalizationProperties310 {
  /**
   * Code point range for the FC_NFKC_Closure mapping.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNormalizationProperties-3.1.0.txt#L13-L16
   */
  codepoint_range: string;

  /**
   * The FC_NFKC_Closure value, which is the result of NFKC(Fold(NFKC(Fold(codepoint)))) if different.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNormalizationProperties-3.1.0.txt#L13-L16
   */
  fc_nfkc_closure: string;
}

export const DERIVED_NORMALIZATION_PROPERTIES_310_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
