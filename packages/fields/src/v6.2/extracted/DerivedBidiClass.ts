/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedBidiClass.txt#L11
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:31.312Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range explicitly listed for Bidi_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedBidiClass.txt#L11
   */
  codepoints: string;

  /**
   * Bidi class value (field 4 of UnicodeData.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedBidiClass.txt#L11
   */
  bidi_class: "Left_To_Right" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["codepoints", "bidi_class"];
