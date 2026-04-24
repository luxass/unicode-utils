/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedBidiClass.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:59.211Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range (e.g. 0041 or 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi Class (listing UnicodeData.txt, field 4: see UAX #44).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedBidiClass.txt#L12
   */
  bidi_class:
    | "L"
    | "R"
    | "AL"
    | "EN"
    | "ES"
    | "ET"
    | "AN"
    | "CS"
    | "NSM"
    | "BN"
    | "B"
    | "S"
    | "WS"
    | "ON"
    | "PDF"
    | "LRE"
    | "RLE"
    | "LRO"
    | "RLO"
    | "RLI"
    | "LRI"
    | "FSI"
    | "PDI"
    | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
