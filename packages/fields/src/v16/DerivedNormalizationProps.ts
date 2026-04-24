/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:15:38.485Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range for which the FC_NFKC_Closure mapping is defined.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  codepoints: string;

  /**
   * The FC_NFKC_Closure value computed as NFKC(Fold(NFKC(Fold(codepoints)))).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  closure: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoints", "closure"];
