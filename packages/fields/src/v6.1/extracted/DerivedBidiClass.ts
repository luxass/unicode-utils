/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedBidiClass.txt#L11
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedBidiClass.txt#L59
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:08.677Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Bidi_Class=Left_To_Right.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedBidiClass.txt#L59
   */
  code_point: string;

  /**
   * Bidi_Class value (listing UnicodeData.txt, field 4).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedBidiClass.txt#L11
   */
  bidi_class: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point", "bidi_class"];
