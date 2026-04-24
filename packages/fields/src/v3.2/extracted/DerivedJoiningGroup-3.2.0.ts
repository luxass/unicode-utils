/**
 * Parsed row from `extracted/DerivedJoiningGroup-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedJoiningGroup-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedJoiningGroup-3.2.0.txt#L13-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:27.132Z
 */
export interface ExtractedDerivedJoiningGroup320 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Joining Group from ArabicShaping.txt field 2.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedJoiningGroup-3.2.0.txt#L13-L14
   */
  joining_group: string;
}

export const EXTRACTED_DERIVED_JOINING_GROUP_320_FIELDS = ["code_point", "joining_group"];
