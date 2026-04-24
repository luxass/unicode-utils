/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:16:30.894Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Derived Joining Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: string;
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point", "joining_type"];
