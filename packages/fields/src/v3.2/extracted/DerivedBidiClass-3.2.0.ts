/**
 * Parsed row from `extracted/DerivedBidiClass-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedBidiClass-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T05:10:03.056Z
 */
export interface ExtractedDerivedBidiClass320 {
  /**
   * Unicode code point or range sharing the same Bidi_Class.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi_Class value listing from UnicodeData.txt field 4.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: "L" | "R" | "AL" | "EN" | "ES" | "ET" | "AN" | "CS" | "NSM" | "B" | "S" | "WS" | "ON" | "BN" | "LRE" | "RLE" | "LRO" | "RLO" | "PDF" | "LRI" | "RLI" | "FSI" | "PDI";

  /**
   * Optional inline comment or status information.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_320_FIELDS = ["code_point", "bidi_class", "comment"];
