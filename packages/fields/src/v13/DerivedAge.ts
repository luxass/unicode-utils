/**
 * Parsed row from `DerivedAge.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/DerivedAge.txt#L37
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/DerivedAge.txt#L52
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:05.118Z
 */
export interface DerivedAge {
  /**
   * Age=V1_1.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/DerivedAge.txt#L52
   */
  code_point: string;

  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/DerivedAge.txt#L37
   */
  age: "V1_1" | "V1_1_5" | (string & {});
}

export const DERIVED_AGE_FIELDS = ["code_point", "age"];
