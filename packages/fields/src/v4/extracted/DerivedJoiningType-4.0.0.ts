/**
 * Parsed row from `extracted/DerivedJoiningType-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedJoiningType-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedJoiningType-4.0.0.txt#L13-L17
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:25.080Z
 */
export interface ExtractedDerivedJoiningType400 {
  /**
   * Unicode code point or range explicitly listed in this file.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedJoiningType-4.0.0.txt#L13-L17
   */
  codepoint_range: string;

  /**
   * Derived Joining Type as described in ArabicShaping.txt; all code points not explicitly listed have value U.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedJoiningType-4.0.0.txt#L13-L17
   */
  joining_type: "T" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_400_FIELDS = ["codepoint_range", "joining_type"];
