/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedDecompositionType.txt#L14
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:37.514Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Code point or range with explicit Decomposition_Type listing.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedDecompositionType.txt#L14
   */
  code_point_range: string;

  /**
   * Decomposition_Type from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  decomposition_type: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point_range", "decomposition_type"];
