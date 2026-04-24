/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:16:07.957Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Unicode code point or range to which the property applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Joining Group property value as listed in ArabicShaping.txt field 3.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_group: string;
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
