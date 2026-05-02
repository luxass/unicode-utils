/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedJoiningType.txt#L20
 *
 * @unicodeVersion 6.3
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:36.226Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Joining_Type value for code points that cause joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedJoiningType.txt#L20
   */
  joining_type: "Join_Causing" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["joining_type"];
