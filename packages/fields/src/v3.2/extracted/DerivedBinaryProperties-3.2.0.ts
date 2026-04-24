/**
 * Parsed row from `extracted/DerivedBinaryProperties-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedBinaryProperties-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedBinaryProperties-3.2.0.txt#L13-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:18.717Z
 */
export interface ExtractedDerivedBinaryProperties320 {
  /**
   * Code point range for which the property applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * BidiMirrored (listing UnicodeData.txt, field 9: see UnicodeData.html).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedBinaryProperties-3.2.0.txt#L13-L14
   */
  bidi_mirrored: boolean;
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_320_FIELDS = ["code_point", "bidi_mirrored"];
