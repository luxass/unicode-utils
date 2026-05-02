/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L15
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:13.348Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point or range explicitly listed for Joining_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedJoiningType.txt#L14
   */
  code_point_range: string;

  /**
   * Derived Joining_Type value other than the default Non_Joining (U).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L15
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
