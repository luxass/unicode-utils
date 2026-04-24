/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedJoiningType.txt#L11-L20
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:11.929Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point or range explicitly listed for the Joining_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedJoiningType.txt#L13
   */
  code_point_range: string;

  /**
   * Joining_Type value for the listed code points, derived as described in ArabicShaping.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedJoiningType.txt#L11-L20
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
