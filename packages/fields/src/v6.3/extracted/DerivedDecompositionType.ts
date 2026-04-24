/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedDecompositionType.txt#L11-L16
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:13.153Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Code point range with explicit Decomposition_Type values (unlisted have None).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedDecompositionType.txt#L11-L16
   */
  code_point_range: string;

  /**
   * Decomposition_Type value (None for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedDecompositionType.txt#L11-L16
   */
  decomposition_type: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point_range", "decomposition_type"];
