/**
 * Parsed row from `DerivedAge.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedAge.txt#L37
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:36.905Z
 */
export interface DerivedAge {
  /**
   * Unicode code point or range with Age value.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedAge.txt#L37
   */
  code_point: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedAge.txt#L37
   */
  age: "V1_1" | "V1_1_5" | "V2_0" | "V2_1" | "3_0" | "3_2" | "4_0" | "4_1" | "5_0" | "5_1" | "5_2" | "6_0" | "6_1" | "6_2" | "6_3" | "7_0" | "8_0" | "9_0" | "10_0" | "11_0" | "12_0" | "13_0" | "14_0" | "15_0" | "16_0" | "17_0" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point", "age"];
