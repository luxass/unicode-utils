/**
 * Parsed row from `BidiMirroring.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/BidiMirroring.txt#L23-L25
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:45.600Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has the mirrored property.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/BidiMirroring.txt#L23-L25
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/BidiMirroring.txt#L23-L25
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
