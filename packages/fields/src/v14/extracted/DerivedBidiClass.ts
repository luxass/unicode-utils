/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:45:54.595Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range in hexadecimal notation, possibly with .. for ranges.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Bidi_Class value as defined in UAX #44 and UAX #9.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: "L" | "R" | "AL" | "EN" | "ES" | "ET" | "CS" | "NSM" | "BN" | "B" | "S" | "WS" | "ON" | "PDF" | "LRE" | "LRO" | "RLE" | "RLO" | "LRI" | "RLI" | "FSI" | "PDI";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["codepoint_range", "bidi_class"];
