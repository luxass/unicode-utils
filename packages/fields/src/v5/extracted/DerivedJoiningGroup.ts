/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:57:44.576Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * All code points not explicitly listed for Joining_Group have the value No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedJoiningGroup.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Joining Group value; defaults to No_Joining_Group for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
   */
  joining_group: "No_Joining_Group" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
