/**
 * Parsed row from `DerivedAge.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedAge.txt#L37-L43
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedAge.txt#L52
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:17.477Z
 */
export interface DerivedAge {
  /**
   * Age=V1_1.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedAge.txt#L52
   */
  codepoints: string;

  /**
   * Unicode version when the code point was first assigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedAge.txt#L37-L43
   */
  age: "V1_1";
}

export const DERIVED_AGE_FIELDS = ["codepoints", "age"];
