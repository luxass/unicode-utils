/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedJoiningType.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedJoiningType.txt#L20
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:19.838Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point range or single code point listed explicitly for derived Joining_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedJoiningType.txt#L11-L14
   */
  code_point_range: string;

  /**
   * =Join_Causing.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedJoiningType.txt#L20
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
