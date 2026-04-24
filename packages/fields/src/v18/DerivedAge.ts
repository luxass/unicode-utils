/**
 * Parsed row from `DerivedAge.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DerivedAge.txt#L38-L47
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:12.167Z
 */
export interface DerivedAge {
  /**
   * Code point(s) or range assigned in a particular Unicode version.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DerivedAge.txt#L38-L47
   */
  code_point_range: string;

  /**
   * Unicode version when the code points were first assigned (Age property).
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DerivedAge.txt#L38-L47
   */
  age: "V1_1" | "V1_1_5" | "V2_0" | "V2_1" | "V3_0" | "V3_1" | "V3_2" | "V4_0" | "V5_0" | "V6_0" | "V7_0" | "V8_0" | "V9_0" | "V10_0" | "V11_0" | "V12_0" | "V13_0" | "V14_0" | "V15_0" | "V16_0" | "V17_0" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
