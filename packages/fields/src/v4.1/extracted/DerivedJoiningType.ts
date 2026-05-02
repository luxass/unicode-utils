/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:57:15.859Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Joining_Type property value such as Join_Causing.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: string;
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
