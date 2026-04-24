/**
 * Parsed row from `extracted/DerivedBidiClass-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedBidiClass-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedBidiClass-3.2.0.txt#L13-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:05.707Z
 */
export interface ExtractedDerivedBidiClass320 {
  /**
   * Code point range from UnicodeData.txt.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Derived Bidi_Class values listing from UnicodeData.txt field 4.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedBidiClass-3.2.0.txt#L13-L14
   */
  bidi_class: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_320_FIELDS = ["range", "bidi_class"];
