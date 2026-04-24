/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:23:10.025Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range explicitly listed for Canonical_Combining_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedCombiningClass.txt#L14
   */
  code_point_range: string;

  /**
   * Canonical Combining Class value (field 3 of UnicodeData.txt); defaults to Not_Reordered (0) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
   */
  combining_class: "Not_Reordered" | number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "combining_class"];
