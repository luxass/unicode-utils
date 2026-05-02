/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedCombiningClass.txt#L13-L14
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedCombiningClass.txt#L20
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:58.511Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range explicitly listed for Canonical_Combining_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedCombiningClass.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Canonical Combining Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedCombiningClass.txt#L20
   */
  combining_class: "Not_Reordered";
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "combining_class"];
