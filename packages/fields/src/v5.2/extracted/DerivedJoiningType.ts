/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:33:55.643Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Joining_Type property as used in DerivedJoiningType.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: string;
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point", "joining_type"];
