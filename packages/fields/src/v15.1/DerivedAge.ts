/**
 * Parsed row from `DerivedAge.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/DerivedAge.txt#L37
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/DerivedAge.txt#L52
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:41:01.221Z
 */
export interface DerivedAge {
  /**
   * Age=V1_1.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/DerivedAge.txt#L52
   */
  code_point_range: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/DerivedAge.txt#L37
   */
  age: "V1_1";
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
