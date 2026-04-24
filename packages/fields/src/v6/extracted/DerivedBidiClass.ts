/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedBidiClass.txt#L11
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:18.992Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Bidi Class (listing UnicodeData.txt, field 4: see UAX 44: http://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedBidiClass.txt#L11
   */
  code_point: string;

  /**
   * Bidi Class (listing UnicodeData.txt, field 4).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedBidiClass.txt#L11
   */
  bidi_class: "L" | "R" | "AL" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point", "bidi_class"];
