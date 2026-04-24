/**
 * Parsed row from `extracted/DerivedJoiningType-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedJoiningType-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedJoiningType-3.2.0.txt#L13-L16
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:11.210Z
 */
export interface ExtractedDerivedJoiningType320 {
  /**
   * Unicode code point range (e.g. 0600..06FF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Joining Type: T for Mn + Cf - ZWNJ - ZWJ, U for all others.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedJoiningType-3.2.0.txt#L13-L16
   */
  joining_type: "T" | "U";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_320_FIELDS = ["code_point_range", "joining_type"];
