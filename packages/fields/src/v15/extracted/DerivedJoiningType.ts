/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedJoiningType.txt#L21
 *
 * @unicodeVersion 15
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:27.922Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Joining_Type=Join_Causing
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedJoiningType.txt#L21
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["joining_type"];
