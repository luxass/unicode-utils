/**
 * Parsed row from `extracted/DerivedBidiClass-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedBidiClass-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:53:30.173Z
 */
export interface ExtractedDerivedBidiClass401 {
  /**
   * Code point or range (hex style).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi_Class value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: string;

  /**
   * Source of the value (optional).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  source: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_401_FIELDS = ["code_point", "bidi_class", "source"];
