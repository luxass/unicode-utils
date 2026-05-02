/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L25
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:19.864Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Bidi Class (listing UnicodeData.txt, field 4: see UAX 44: https://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  code_point_range: string;

  /**
   * Derived Bidi Class value for the code point range.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L25
   */
  bidi_class: "Left_To_Right" | "Right_To_Left" | "Arabic_Letter" | "European_Terminator" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
