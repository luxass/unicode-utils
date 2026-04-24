/**
 * Parsed row from `BidiMirroring.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/BidiMirroring.txt#L27-L28
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:19.830Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/BidiMirroring.txt#L27-L28
   */
  source: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/BidiMirroring.txt#L27-L28
   */
  target: string;
}

export const BIDI_MIRRORING_FIELDS = ["source", "target"];
