/**
 * Parsed row from `DerivedAge.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedAge.txt#L37-L52
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:54:11.676Z
 */
export interface DerivedAge {
  /**
   * Code point range or single code point listed with a specific Age value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedAge.txt#L37-L52
   */
  range: string;

  /**
   * Age property value indicating the Unicode version when the code points were first assigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedAge.txt#L37-L52
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
    | "V5_0"
    | "V5_1"
    | "V5_2"
    | "V6_0"
    | "V7_0"
    | "V8_0"
    | "V9_0"
    | "V10_0"
    | "V11_0"
    | "V12_0"
    | "V12_1"
    | "V13_0"
    | "V13_1"
    | "V14_0"
    | "V15_0"
    | "V15_1"
    | "V16_0"
    | "V17_0"
    | (string & {});
}

export const DERIVED_AGE_FIELDS = ["range", "age"];
