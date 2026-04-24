/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedBidiClass.txt#L11-L27
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:52.693Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range explicitly listed for Bidi_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedBidiClass.txt#L11-L27
   */
  codepoint_range: string;

  /**
   * Bidi class value for explicitly listed code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedBidiClass.txt#L27
   */
  bidi_class: "Left_To_Right";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["codepoint_range", "bidi_class"];
