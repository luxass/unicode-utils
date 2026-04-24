/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedBidiClass.txt#L11-L29
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:29.174Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Code point range in the standard UCD format (e.g. '0000..10FFFF' or single code point).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi_Class property value; defaults to Left_To_Right (L) for unassigned code points except as noted for specific right-to-left script blocks.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedBidiClass.txt#L11-L29
   */
  bidi_class: "Left_To_Right" | "R" | "AL" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
