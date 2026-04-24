/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningGroup.txt#L12
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningGroup.txt#L17
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.20
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:36:42.856Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * @missing: 0000..10FFFF; No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningGroup.txt#L17
   */
  code_point_range: string;

  /**
   * Joining Group, listing ArabicShaping.txt field 3.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningGroup.txt#L12
   */
  joining_group: string;
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
