/**
 * Parsed row from `DerivedAge.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:14.069Z
 */
export interface DerivedAge {
  /**
   * Code point range or single code point indicating when it was first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Unicode version when the code point(s) were first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age:
    | "V1_1"
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
    | "V13_0"
    | "V14_0"
    | "V15_0"
    | "V15_1"
    | "V16_0"
    | (string & {});

  /**
   * Optional comment describing the assignment.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age", "comment"];
