/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:25:54.326Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi_Class property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class:
    | "L"
    | "R"
    | "AL"
    | "AN"
    | "EN"
    | "ES"
    | "CS"
    | "ET"
    | "ON"
    | "BN"
    | "B"
    | "S"
    | "WS"
    | "NSM"
    | "LRE"
    | "LRO"
    | "RLE"
    | "RLO"
    | "PDF"
    | "LRI"
    | "RLI"
    | "FSI"
    | "PDI";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point", "bidi_class"];
