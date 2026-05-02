/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedBidiClass.txt#L12
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:31.845Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range explicitly listed for Bidi_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  code_point_range: string;

  /**
   * Bidi Class value (listing UnicodeData.txt, field 4).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  bidi_class: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
