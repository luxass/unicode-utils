/**
 * Parsed row from `BidiMirroring-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/BidiMirroring-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/BidiMirroring-4.0.0.txt#L15-L17
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:29.955Z
 */
export interface BidiMirroring400 {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/BidiMirroring-4.0.0.txt#L15-L17
   */
  source_code_point: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/BidiMirroring-4.0.0.txt#L15-L17
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_400_FIELDS = ["source_code_point", "mirror_code_point"];
