/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedCombiningClass.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedCombiningClass.txt#L20
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:10.291Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range with non-default Canonical_Combining_Class values.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedCombiningClass.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Canonical Combining Class value (see UAX #44).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedCombiningClass.txt#L20
   */
  combining_class: string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "combining_class"];
