/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedJoiningGroup.txt#L14-L15
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedJoiningGroup.txt#L17
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:06.994Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Code point range with @missing: marker indicating default Joining_Group value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedJoiningGroup.txt#L17
   */
  code_point_range: string;

  /**
   * Default value for all code points not explicitly listed in Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedJoiningGroup.txt#L14-L15
   */
  joining_group: "No_Joining_Group";
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
