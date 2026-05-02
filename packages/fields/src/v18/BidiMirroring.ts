/**
 * Parsed row from `BidiMirroring.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiMirroring.txt#L27-L30
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:10.732Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits for the character that has Bidi_Mirrored=Yes.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiMirroring.txt#L27-L30
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits for the character that is the mirror image.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiMirroring.txt#L27-L30
   */
  mirror_code_point: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiMirroring.txt#L30
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point", "comment"];
