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
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:00:50.566Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  source_code_point: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  target_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "target_code_point"];
