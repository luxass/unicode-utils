/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedJoiningGroup.txt#L14-L15
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedJoiningGroup.txt#L17
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:31.145Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Code point range in the form 0000..10FFFF.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedJoiningGroup.txt#L17
   */
  code_point_range: string;

  /**
   * Default Joining Group value for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedJoiningGroup.txt#L14-L15
   */
  joining_group: "No_Joining_Group";
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
