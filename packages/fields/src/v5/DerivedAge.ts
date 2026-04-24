/**
 * Parsed row from `DerivedAge.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/DerivedAge.txt#L40
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:25.489Z
 */
export interface DerivedAge {
  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/DerivedAge.txt#L40
   */
  code_point_range: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/DerivedAge.txt#L40
   */
  age: "1.1" | "2.0" | "2.1" | "3.0" | "3.1" | "3.2" | "4.0" | "4.1" | "5.0" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
