/**
 * Parsed row from `extracted/DerivedCombiningClass-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedCombiningClass-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedCombiningClass-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:17.420Z
 */
export interface ExtractedDerivedCombiningClass400 {
  /**
   * Unicode code point or range explicitly listed with the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedCombiningClass-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Derived combining class value (Canonical_Combining_Class). All code points not listed have value 0.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedCombiningClass-4.0.0.txt#L13-L16
   */
  combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_400_FIELDS = ["code_point_range", "combining_class"];
