/**
 * Parsed row from `DerivedAge.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/DerivedAge.txt#L37
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/DerivedAge.txt#L52
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:34:57.745Z
 */
export interface DerivedAge {
  /**
   * Unicode code point or range with Age property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/DerivedAge.txt#L37
   */
  code_point: string;

  /**
   * =V1_1.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/DerivedAge.txt#L52
   */
  age: "V1_1" | "V1_1_5" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point", "age"];
