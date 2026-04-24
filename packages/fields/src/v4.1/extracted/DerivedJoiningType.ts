/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedJoiningType.txt#L11-L18
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:20.877Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point or range with Joining_Type=Join_Causing.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedJoiningType.txt#L11-L18
   */
  code_point_range: string;

  /**
   * Derived Joining_Type value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedJoiningType.txt#L18
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
