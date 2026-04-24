/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedBidiClass.txt#L12
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:06.413Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Bidi Class (listing UnicodeData.txt, field 4: see UAX 44: http://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  code_point: string;

  /**
   * Bidi_Class property value as defined in UAX #9 and UAX #44.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  bidi_class: "L" | "R" | "AL" | "AN" | "EN" | "ES" | "CS" | "ET" | "ON" | "BN" | "B" | "S" | "WS" | "NSM" | "PDF" | "LRE" | "RLE" | "LRO" | "RLO" | "FSI" | "LRI" | "RLI" | "PDI";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point", "bidi_class"];
