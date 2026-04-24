/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedCombiningClass.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedCombiningClass.txt#L16
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:09.203Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * @missing: 0000..10FFFF; Not_Reordered.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedCombiningClass.txt#L16
   */
  code_point_range: string;

  /**
   * Canonical_Combining_Class values explicitly listed, with default Not_Reordered (0) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedCombiningClass.txt#L11-L14
   */
  canonical_combining_class: "Not_Reordered" | (string & {});
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "canonical_combining_class"];
