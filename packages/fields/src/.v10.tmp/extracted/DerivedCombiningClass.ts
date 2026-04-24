/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L17
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:02.652Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * @missing: 0000..10FFFF; Not_Reordered.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L17
   */
  code_point: string;

  /**
   * Canonical_Combining_Class value; unlisted code points have value 0 (Not_Reordered).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
   */
  combining_class: "Not_Reordered" | number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point", "combining_class"];
