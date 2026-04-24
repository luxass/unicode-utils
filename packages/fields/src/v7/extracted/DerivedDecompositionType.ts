/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L11-L17
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:06.305Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Code point range with listed Decomposition_Type values (unlisted have None).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L11-L17
   */
  code_point: string;

  /**
   * Decomposition_Type values explicitly listed (None is default for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L11-L17
   */
  decomposition_type: "None";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
