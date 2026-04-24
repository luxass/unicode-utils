/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedJoiningType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedJoiningType.txt#L14-L15
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:58.292Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point or range explicitly listed with derived Joining_Type value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedJoiningType.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Joining_Type value for explicitly listed code points (derived as described in ArabicShaping.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedJoiningType.txt#L12
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
