/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedBidiClass.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:41:47.564Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point range or single code point in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Bidi_Class property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  bidi_class: "Left_To_Right" | "Right_To_Left" | "Arabic_Letter" | "European_Terminator" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
