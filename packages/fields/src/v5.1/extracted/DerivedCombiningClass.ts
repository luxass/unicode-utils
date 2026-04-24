/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedCombiningClass.txt#L13-L14
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedCombiningClass.txt#L20
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:12.593Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point range or single code point explicitly listed for Canonical_Combining_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedCombiningClass.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Canonical_Combining_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedCombiningClass.txt#L20
   */
  combining_class: string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "combining_class"];
