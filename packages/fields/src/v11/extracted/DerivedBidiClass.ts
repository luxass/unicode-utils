/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L40
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedBidiClass.txt#L42
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:40.530Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * @missing: 0000..10FFFF; Left_To_Right.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedBidiClass.txt#L42
   */
  codepoint_range: string;

  /**
   * Bidi_Class property value; defaults to Left_To_Right (L) for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedBidiClass.txt#L12-L40
   */
  bidi_class: "L" | "R" | "AL" | "ET" | "BN" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["codepoint_range", "bidi_class"];
