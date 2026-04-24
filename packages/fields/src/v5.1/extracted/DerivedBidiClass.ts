/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedBidiClass.txt#L11-L45
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:49.237Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Code point or range covered by this Bidi_Class assignment per standard short file format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Bidi Class property value, defaults to Left_To_Right (L) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedBidiClass.txt#L11-L45
   */
  bidi_class: "Left_To_Right" | "R" | "AL" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["codepoint_range", "bidi_class"];
