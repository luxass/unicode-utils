/**
 * Parsed row from `DerivedAge.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedAge.txt#L38
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:23.357Z
 */
export interface DerivedAge {
  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedAge.txt#L38
   */
  code_point_range: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedAge.txt#L38
   */
  age: "V1_1" | "V1_1_5" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
