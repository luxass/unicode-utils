/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr9/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:31.579Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived bidirectional class value.
   *
   * @source https://ucdjs.dev/reports/tr9/
   */
  bidi_class:
    | "L"
    | "R"
    | "AL"
    | "Left_To_Right"
    | "Right_To_Left"
    | "Arabic_Letter"
    | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
