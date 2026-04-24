/**
 * Parsed row from `extracted/DerivedBidiClass-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedBidiClass-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedBidiClass-4.0.1.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedBidiClass-4.0.1.txt#L18
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:34:52.797Z
 */
export interface ExtractedDerivedBidiClass401 {
  /**
   * Unicode code point or range explicitly listed for Bidi_Class (all others default to Left_To_Right (L)).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedBidiClass-4.0.1.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Bidi class value (e.g. Left_To_Right).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedBidiClass-4.0.1.txt#L18
   */
  bidi_class: "Left_To_Right";
}

export const EXTRACTED_DERIVED_BIDI_CLASS_401_FIELDS = ["code_point_range", "bidi_class"];
