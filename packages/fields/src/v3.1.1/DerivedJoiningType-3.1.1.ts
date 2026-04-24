/**
 * Parsed row from `DerivedJoiningType-3.1.1.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/DerivedJoiningType-3.1.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedJoiningType-3.1.1.txt#L13-L18
 *
 * @unicodeVersion 3.1.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:47.225Z
 */
export interface DerivedJoiningType311 {
  /**
   * C (JoinCausing).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedJoiningType-3.1.1.txt#L18
   */
  code_point: string;

  /**
   * JoinCausing derived joining type.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedJoiningType-3.1.1.txt#L13-L18
   */
  joining_type: "C" | (string & {});
}

export const DERIVED_JOINING_TYPE_311_FIELDS = ["code_point", "joining_type"];
