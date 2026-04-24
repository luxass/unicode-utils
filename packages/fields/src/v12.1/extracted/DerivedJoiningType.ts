/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedJoiningType.txt#L14-L16
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedJoiningType.txt#L21
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:09.940Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point or range explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedJoiningType.txt#L14-L16
   */
  codepoints: string;

  /**
   * Joining_Type value for explicitly listed code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedJoiningType.txt#L21
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["codepoints", "joining_type"];
