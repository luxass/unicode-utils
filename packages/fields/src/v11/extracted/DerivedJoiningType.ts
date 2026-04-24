/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedJoiningType.txt#L21
 *
 * @unicodeVersion 11
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:51.539Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Joining_Type property value, such as Join_Causing.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedJoiningType.txt#L21
   */
  joining_type: "Join_Causing" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["joining_type"];
