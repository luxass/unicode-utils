/**
 * Parsed row from `BidiMirroring-1.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/BidiMirroring-1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/BidiMirroring-1.txt#L15-L17
 *
 * @unicodeVersion 3.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:12.734Z
 */
export interface BidiMirroring1 {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/BidiMirroring-1.txt#L15-L17
   */
  source_code_point: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/BidiMirroring-1.txt#L15-L17
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_1_FIELDS = ["source_code_point", "mirror_code_point"];
