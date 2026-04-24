/**
 * Parsed row from `DerivedAge.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/DerivedAge.txt#L36
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/DerivedAge.txt#L51
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:01.899Z
 */
export interface DerivedAge {
  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/DerivedAge.txt#L36
   */
  code_point_range: string;

  /**
   * =V1_1.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/DerivedAge.txt#L51
   */
  age:
    | "V1_1"
    | "V1_1_5"
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
    | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
