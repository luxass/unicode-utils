/**
 * Parsed row from `BidiMirroring-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/BidiMirroring-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/BidiMirroring-3.2.0.txt#L15-L17
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:16.567Z
 */
export interface BidiMirroring320 {
  /**
   * First code point (variable-length hexadecimal value with 4 to 6 digits).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/BidiMirroring-3.2.0.txt#L15-L17
   */
  source_code_point: string;

  /**
   * Mirror code point (variable-length hexadecimal value with 4 to 6 digits).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/BidiMirroring-3.2.0.txt#L15-L17
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_320_FIELDS = ["source_code_point", "mirror_code_point"];
