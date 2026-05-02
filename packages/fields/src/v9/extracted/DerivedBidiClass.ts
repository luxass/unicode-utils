/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedBidiClass.txt#L12
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedBidiClass.txt#L69
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:13.294Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range explicitly listed for Bidi_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  code_point_range: string;

  /**
   * Bidi Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedBidiClass.txt#L69
   */
  bidi_class: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
