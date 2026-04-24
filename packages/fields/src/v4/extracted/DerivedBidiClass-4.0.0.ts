/**
 * Parsed row from `extracted/DerivedBidiClass-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedBidiClass-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBidiClass-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:49.121Z
 */
export interface ExtractedDerivedBidiClass400 {
  /**
   * Code point or code point range explicitly listed in this file.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBidiClass-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Derived Bidi_Class property value; unlisted code points have default value L.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBidiClass-4.0.0.txt#L13-L16
   */
  bidi_class: "L" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_400_FIELDS = ["code_point_range", "bidi_class"];
