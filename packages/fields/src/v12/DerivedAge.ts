/**
 * Parsed row from `DerivedAge.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedAge.txt#L37-L52
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:13.489Z
 */
export interface DerivedAge {
  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedAge.txt#L37
   */
  codepoint_range: string;

  /**
   * Age property value, e.g. Age=V1_1.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedAge.txt#L37-L52
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

export const DERIVED_AGE_FIELDS = ["codepoint_range", "age"];
