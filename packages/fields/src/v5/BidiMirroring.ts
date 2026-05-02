/**
 * Parsed row from `BidiMirroring.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/BidiMirroring.txt#L23-L25
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:56:12.370Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/BidiMirroring.txt#L23-L25
   */
  source_code_point: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/BidiMirroring.txt#L23-L25
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
