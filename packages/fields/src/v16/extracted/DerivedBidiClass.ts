/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L25
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:01:07.109Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point range or single code point in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Bidi_Class property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L25
   */
  bidi_class: "L" | "R" | "AL" | "ET" | "BN" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
