/**
 * Parsed row from `BidiMirroring.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/BidiMirroring.txt#L27-L29
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:04.763Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  source: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  mirror: string;
}

export const BIDI_MIRRORING_FIELDS = ["source", "mirror"];
