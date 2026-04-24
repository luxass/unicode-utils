/**
 * Parsed row from `DerivedAge.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/DerivedAge.txt#L36
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:42.983Z
 */
export interface DerivedAge {
  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/DerivedAge.txt#L36
   */
  code_point_range: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/DerivedAge.txt#L36
   */
  age: "1.1" | "2.0" | "2.1" | "3.0" | "3.1" | "3.2" | "4.0" | "4.1" | "5.0" | "5.1" | "5.2" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
