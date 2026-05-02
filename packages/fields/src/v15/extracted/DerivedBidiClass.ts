/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L16
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:00.788Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point range or single code point in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Bidi_Class value overriding UnicodeData.txt field 4 for specified code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L16
   */
  bidi_class: "Left_To_Right" | "Right_To_Left" | "Arabic_Letter" | "European_Terminator";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
