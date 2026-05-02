/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedBidiClass.txt#L12
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:36.504Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range explicitly listed for a Bidi_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  code_point_range: string;

  /**
   * Bidi class value (see UAX #44).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  bidi_class: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
