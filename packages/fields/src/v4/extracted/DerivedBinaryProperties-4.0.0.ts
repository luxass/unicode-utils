/**
 * Parsed row from `extracted/DerivedBinaryProperties-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedBinaryProperties-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBinaryProperties-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:48.317Z
 */
export interface ExtractedDerivedBinaryProperties400 {
  /**
   * BidiMirrored (listing UnicodeData.txt, field 9: see UCD.html) All code points not explicitly listed in this file have the property value: N.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBinaryProperties-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * BidiMirrored property value; unlisted code points have default value N.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBinaryProperties-4.0.0.txt#L13-L16
   */
  bidi_mirrored: "Y";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_400_FIELDS = ["code_point_range", "bidi_mirrored"];
