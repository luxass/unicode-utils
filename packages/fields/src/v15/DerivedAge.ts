/**
 * Parsed row from `DerivedAge.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/DerivedAge.txt#L37
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/DerivedAge.txt#L52
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:15.568Z
 */
export interface DerivedAge {
  /**
   * Age=V1_1.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/DerivedAge.txt#L52
   */
  code_point_range: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/DerivedAge.txt#L37
   */
  age:
    | "V1_1"
    | "V1_1_5"
    | "V2_0"
    | "V2_1"
    | "V3_0"
    | "V3_1"
    | "V3_2"
    | "V4_0"
    | "V4_1"
    | "V5_0"
    | "V5_1"
    | "V5_2"
    | "V6_0"
    | "V6_1"
    | "V6_2"
    | "V6_3"
    | "V7_0"
    | "V8_0"
    | "V9_0"
    | "V10_0"
    | "V11_0"
    | "V12_0"
    | "V12_1"
    | "V13_0"
    | "V14_0"
    | "V15_0"
    | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
