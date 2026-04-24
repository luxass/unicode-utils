/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedCombiningClass.txt#L17
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:34.372Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * @missing: 0000..10FFFF; Not_Reordered.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedCombiningClass.txt#L17
   */
  code_point_range: string;

  /**
   * Canonical Combining Class value (0 for Not_Reordered).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
   */
  combining_class: "Not_Reordered" | (string & {});
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "combining_class"];
