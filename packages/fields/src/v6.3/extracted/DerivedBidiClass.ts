/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:49:30.868Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi_Class property value (abbreviated form).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: "L" | "R" | "AL" | "AN" | "EN" | "ES" | "CS" | "ET" | "ON" | "BN" | "B" | "S" | "WS" | "RLE" | "RLO" | "PDF" | "LRE" | "LRO" | "LRI" | "RLI" | "FSI" | "PDI";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point", "bidi_class"];
