/**
 * Parsed row from `DerivedAge.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedAge.txt#L37
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedAge.txt#L52
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:20.482Z
 */
export interface DerivedAge {
  /**
   * Code point range with Age property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedAge.txt#L37
   */
  code_point_range: string;

  /**
   * =V1_1.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedAge.txt#L52
   */
  age: "V1_1" | "V1_1_5" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
