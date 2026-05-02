/**
 * Parsed row from `DerivedAge.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/DerivedAge.txt#L40
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/DerivedAge.txt#L42
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:26.511Z
 */
export interface DerivedAge {
  /**
   * Property: Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/DerivedAge.txt#L40
   */
  code_point: string;

  /**
   * All code points not explicitly listed for Age.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/DerivedAge.txt#L42
   */
  age: "1.1.0" | "unassigned";
}

export const DERIVED_AGE_FIELDS = ["code_point", "age"];
