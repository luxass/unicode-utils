/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:34:36.866Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Unicode code point or range for characters with explicit Joining_Group.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Joining Group value from ArabicShaping.txt field 3.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_group: string;
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point", "joining_group"];
