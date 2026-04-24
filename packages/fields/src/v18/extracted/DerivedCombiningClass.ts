/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L21
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:17.451Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code points with Canonical_Combining_Class listed here; defaults to Not_Reordered (0) elsewhere.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L21
   */
  codepoints: string;

  /**
   * Canonical combining class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L21
   */
  combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["codepoints", "combining_class"];
