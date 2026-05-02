/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedJoiningGroup.txt#L13-L14
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:55.784Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Code point or range explicitly listed for Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedJoiningGroup.txt#L13
   */
  code_point_range: string;

  /**
   * All code points not explicitly listed for Joining_Group have the value No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedJoiningGroup.txt#L13-L14
   */
  joining_group: "No_Joining_Group";
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
