/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L43
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:38.006Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range explicitly listed for Bidi_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L43
   */
  codepoints: string;

  /**
   * Bidi class value for the code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L43
   */
  bidi_class: "L" | "R" | "AL" | "ET" | "BN" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["codepoints", "bidi_class"];
