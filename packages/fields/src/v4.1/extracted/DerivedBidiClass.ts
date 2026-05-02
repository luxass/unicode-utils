/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:56:37.479Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range with non-default Bidi_Class value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi class value other than the default Left_To_Right (L).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: "L" | "R" | "AL" | "AN" | "EN" | "ES" | "CS" | "ET" | "FS" | "ON" | "BN" | "PDF" | "LRO" | "LRE" | "RLO" | "RLE" | "NSM";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point", "bidi_class"];
