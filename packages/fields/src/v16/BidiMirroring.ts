/**
 * Parsed row from `BidiMirroring.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:12.659Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has Bidi_Mirrored=Yes.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits to which the source maps for character-based mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
