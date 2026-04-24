/**
 * Parsed row from `DerivedAge.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:15.024Z
 */
export interface DerivedAge {
  /**
   * Code point range or single code point indicating the characters assigned in a particular Unicode version.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Age property value indicating the Unicode version when code points were first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: "V1_1" | "V1_1_5" | "2.0" | "2.1" | "3.0" | "3.1" | "3.2" | "4.0" | "4.1" | "5.0" | "5.1" | "5.2" | "6.0" | "6.1" | "6.2" | "6.3" | "7.0" | "8.0" | "9.0" | "10.0" | "11.0" | "12.0" | "13.0" | "14.0" | "15.0" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["codepoint_range", "age"];
