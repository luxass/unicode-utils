/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedDecompositionType.txt#L12-L15
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:42.613Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range listed explicitly for Decomposition_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  code_point: string;

  /**
   * Decomposition_Type value for the listed code points (unlisted code points have value None).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedDecompositionType.txt#L12-L15
   */
  decomposition_type: "None";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
