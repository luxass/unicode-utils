/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L11-L14
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:13.104Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Code point or range explicitly listed with a Decomposition_Type value (unlisted code points have value None).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L11-L14
   */
  code_point: string;

  /**
   * Decomposition_Type from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L11
   */
  decomposition_type: "None";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
