/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedDecompositionType.txt#L14-L15
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:41:09.016Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range with explicit Decomposition_Type listing.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  code_point_range: string;

  /**
   * Decomposition_Type value (None for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedDecompositionType.txt#L14-L15
   */
  decomposition_type: "None" | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point_range", "decomposition_type"];
