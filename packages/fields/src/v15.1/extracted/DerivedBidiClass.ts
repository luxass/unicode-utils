/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:43:08.720Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range in hexadecimal notation (e.g. '0041' or '0000..10FFFF').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Abbreviated Bidi_Class property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: "L" | "R" | "AL" | "EN" | "ES" | "ET" | "AN" | "CS" | "NS" | "BN" | "B" | "S" | "WS" | "ON" | "PDF" | "LRE" | "RLE" | "LRO" | "RLO" | "LRI" | "RLI" | "FSI" | "PDI";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point", "bidi_class"];
