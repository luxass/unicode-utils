/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedDecompositionType.txt#L14-L15
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:35:11.316Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Decomposition_Type (from UnicodeData.txt, field 5: see UAX 44: http://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  code_point: string;

  /**
   * Decomposition_Type value for the code points (all unlisted code points also have value None).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedDecompositionType.txt#L14-L15
   */
  decomposition_type: "None";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
