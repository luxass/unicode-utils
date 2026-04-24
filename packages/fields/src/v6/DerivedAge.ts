/**
 * Parsed row from `DerivedAge.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/DerivedAge.txt#L36
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:03.625Z
 */
export interface DerivedAge {
  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/DerivedAge.txt#L36
   */
  code_point_range: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/DerivedAge.txt#L36
   */
  age:
    | "1.1"
    | "1.1.0"
    | "2.0"
    | "2.1"
    | "3.0"
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
    | "13.0"
    | "14.0"
    | "15.0"
    | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
