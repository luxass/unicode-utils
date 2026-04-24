/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:25:19.566Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Joining Group value as listed in ArabicShaping.txt field 3.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_group: string;
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
