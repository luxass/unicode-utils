/**
 * Parsed row from `DerivedNormalizationProperties-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedNormalizationProperties-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNormalizationProperties-3.1.0.txt#L13-L16
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:36:56.263Z
 */
export interface DerivedNormalizationProperties310 {
  /**
   * Unicode code point range (e.g. 0061 or 0061..0061).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * NFKC closure of the code point(s), generated from NFKC(Fold(a)); c = NFKC(Fold(b)).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNormalizationProperties-3.1.0.txt#L13-L16
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPERTIES_310_FIELDS = ["code_point_range", "fc_nfkc_closure"];
