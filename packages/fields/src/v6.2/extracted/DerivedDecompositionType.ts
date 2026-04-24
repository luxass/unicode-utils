/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedDecompositionType.txt#L11-L14
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:44.020Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range listed explicitly for Decomposition_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedDecompositionType.txt#L11-L14
   */
  code_point: string;

  /**
   * Decomposition_Type value from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedDecompositionType.txt#L11
   */
  decomposition_type: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
