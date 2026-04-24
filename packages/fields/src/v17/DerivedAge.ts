/**
 * Parsed row from `DerivedAge.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedAge.txt#L38-L47
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:23.793Z
 */
export interface DerivedAge {
  /**
   * Code point range or single code point for the Age property; unlisted code points have default value Unassigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedAge.txt#L38-L47
   */
  code_point_range: string;

  /**
   * Age property value indicating the Unicode version when code points were first assigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedAge.txt#L38-L47
   */
  age:
    | "V1_1"
    | "V1_1_5"
    | "V2_0"
    | "V2_1"
    | "3_0"
    | "3_1"
    | "3_2"
    | "4_0"
    | "4_1"
    | "5_0"
    | "5_1"
    | "5_2"
    | "6_0"
    | "6_1"
    | "6_2"
    | "6_3"
    | "7_0"
    | "8_0"
    | "9_0"
    | "10_0"
    | "11_0"
    | "12_0"
    | "13_0"
    | "14_0"
    | "15_0"
    | "16_0"
    | "17_0"
    | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
