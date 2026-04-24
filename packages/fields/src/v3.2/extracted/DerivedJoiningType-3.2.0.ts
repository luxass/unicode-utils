/**
 * Parsed row from `extracted/DerivedJoiningType-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedJoiningType-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedJoiningType-3.2.0.txt#L14-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:53.223Z
 */
export interface ExtractedDerivedJoiningType320 {
  /**
   * Unicode code point or range per standard Derived Property format documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Type T is derived from Mn + Cf - ZWNJ - ZWJ; all other code points have the type U.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedJoiningType-3.2.0.txt#L14-L15
   */
  joining_type: "T" | "U";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_320_FIELDS = ["code_point", "joining_type"];
