/**
 * Parsed row from `DerivedAge.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:58.840Z
 */
export interface DerivedAge {
  /**
   * Code point range or single code point indicating when it was first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Age value indicating the Unicode version when the code point was first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
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
    | "13_1"
    | "14_0"
    | "15_0"
    | "16_0"
    | "17_0"
    | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
