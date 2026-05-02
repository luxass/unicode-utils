/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:25.849Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Joining Group property value (field 3 of ArabicShaping.txt). All code points not explicitly listed have the value No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
   */
  joining_group: "No_Joining_Group";
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
