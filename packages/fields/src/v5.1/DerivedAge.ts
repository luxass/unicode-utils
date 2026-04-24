/**
 * Parsed row from `DerivedAge.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/DerivedAge.txt#L40
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:46.064Z
 */
export interface DerivedAge {
  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/DerivedAge.txt#L40
   */
  code_point_range: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/DerivedAge.txt#L40
   */
  age:
    | "1.1"
    | "2.0"
    | "2.1"
    | "3.0"
    | "3.1"
    | "3.2"
    | "4.0"
    | "4.1"
    | "5.0"
    | "5.1"
    | "5.2"
    | "6.0"
    | "6.1"
    | "6.2"
    | "6.3"
    | "7.0"
    | "8.0"
    | "9.0"
    | "10.0"
    | "11.0"
    | "12.0"
    | "12.1"
    | "13.0"
    | "14.0"
    | "15.0"
    | "15.1"
    | "16.0"
    | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
