/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningType.txt#L14
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningType.txt#L21
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:26.728Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * All code points not explicitly listed for Joining_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningType.txt#L14
   */
  code_point_range: string;

  /**
   * Joining_Type property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningType.txt#L21
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
