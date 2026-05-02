/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedJoiningType.txt#L11-L14
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:58.962Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point or range explicitly listed for a derived Joining_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedJoiningType.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Joining_Type value such as Join_Causing; defaults to Non_Joining (U) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedJoiningType.txt#L11-L14
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
