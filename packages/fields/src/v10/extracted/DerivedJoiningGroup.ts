/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:47:19.023Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Unicode code point or range for which the Joining Group is specified.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Joining Group property value, extracted from field 3 of ArabicShaping.txt.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_group: "No_Joining_Group" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
