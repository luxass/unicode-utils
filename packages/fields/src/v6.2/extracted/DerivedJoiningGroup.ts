/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedJoiningGroup.txt#L16
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:57.025Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Code point range with @missing: prefix indicating default Joining_Group value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedJoiningGroup.txt#L16
   */
  code_point_range: string;

  /**
   * Default Joining Group value for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
   */
  joining_group: "No_Joining_Group";
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
