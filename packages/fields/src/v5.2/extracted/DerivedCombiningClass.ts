/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedCombiningClass.txt#L16
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedCombiningClass.txt#L20
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:01.521Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * @missing: 0000..10FFFF; Not_Reordered.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedCombiningClass.txt#L16
   */
  codepoint_range: string;

  /**
   * Canonical_Combining_Class property value (e.g. Not_Reordered).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedCombiningClass.txt#L20
   */
  ccc_value: string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["codepoint_range", "ccc_value"];
