/**
 * Parsed row from `DerivedBidiClass-3.1.1.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/DerivedBidiClass-3.1.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:32:36.778Z
 */
export interface DerivedBidiClass311 {
  /**
   * Unicode code point or range as listed for the Bidi class.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi class value from UnicodeData.txt field 4.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: string;
}

export const DERIVED_BIDI_CLASS_311_FIELDS = ["code_point", "bidi_class"];
