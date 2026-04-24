/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedDecompositionType.txt#L12-L15
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:52.252Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range explicitly listed as having a Decomposition_Type other than the default None.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedDecompositionType.txt#L12-L15
   */
  code_point: string;

  /**
   * Decomposition_Type value for the code point(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  decomposition_type: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
