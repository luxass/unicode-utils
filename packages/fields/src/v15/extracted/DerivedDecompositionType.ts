/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedDecompositionType.txt#L12-L15
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:30.866Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range with explicit Decomposition_Type listing.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  code_point_range: string;

  /**
   * Decomposition_Type property value; default is None for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedDecompositionType.txt#L12-L15
   */
  decomposition_type: "None" | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = [
  "code_point_range",
  "decomposition_type",
];
