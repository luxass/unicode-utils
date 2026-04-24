/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedDecompositionType.txt#L11
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedDecompositionType.txt#L13-L14
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:22.130Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point range with explicit Decomposition_Type values (from UnicodeData.txt, field 5).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedDecompositionType.txt#L11
   */
  code_point_range: string;

  /**
   * Decomposition_Type value for the code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedDecompositionType.txt#L13-L14
   */
  decomposition_type: "None" | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = [
  "code_point_range",
  "decomposition_type",
];
