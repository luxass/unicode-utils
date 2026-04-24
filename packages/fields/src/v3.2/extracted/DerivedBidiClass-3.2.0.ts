/**
 * Parsed row from `extracted/DerivedBidiClass-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedBidiClass-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedBidiClass-3.2.0.txt#L13-L14
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:20.095Z
 */
export interface ExtractedDerivedBidiClass320 {
  /**
   * Unicode code point range listing derived Bidi Class from UnicodeData.txt field 4.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedBidiClass-3.2.0.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Derived Bidi_Class value from UnicodeData.txt field 4.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedBidiClass-3.2.0.txt#L13-L14
   */
  bidi_class: "L" | "R" | "AL" | "EN" | "ES" | "ET" | "AN" | "CS" | "NSM" | "BN" | "B" | "S" | "WS" | "ON" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_320_FIELDS = ["code_point_range", "bidi_class"];
