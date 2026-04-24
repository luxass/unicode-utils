/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedBidiClass.txt#L12
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:25.986Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Bidi Class (listing UnicodeData.txt, field 4: see UAX 44: https://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  codepoint_range: string;

  /**
   * Bidi class value as documented in the header (listing UnicodeData.txt, field 4: see UAX #44).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  bidi_class: "Left_To_Right" | "Right_To_Left" | "Arabic_Letter" | "European_Terminator" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["codepoint_range", "bidi_class"];
