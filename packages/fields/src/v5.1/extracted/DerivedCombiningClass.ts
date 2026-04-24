/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedCombiningClass.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedCombiningClass.txt#L16
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:54.522Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * @missing: 0000..10FFFF; Not_Reordered.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedCombiningClass.txt#L16
   */
  code_point_range: string;

  /**
   * Canonical_Combining_Class values for code points explicitly listed; unlisted have value Not_Reordered (0).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedCombiningClass.txt#L11-L14
   */
  canonical_combining_class: "Not_Reordered" | string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = [
  "code_point_range",
  "canonical_combining_class",
];
