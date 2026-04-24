/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBidiClass.txt#L11
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBidiClass.txt#L68
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:30.069Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range explicitly listed for Bidi_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBidiClass.txt#L11
   */
  code_point_range: string;

  /**
   * Derived Bidi Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBidiClass.txt#L68
   */
  bidi_class: "L" | "R" | "AL" | "ET" | "BN" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
