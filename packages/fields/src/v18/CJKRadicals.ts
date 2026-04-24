/**
 * Parsed row from `CJKRadicals.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/CJKRadicals.txt#L18-L26
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:08.112Z
 */
export interface CjkRadicals {
  /**
   * CJK radical number matching [1-9][0-9]{0,2}'{0,3}.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/CJKRadicals.txt#L18-L26
   */
  cjk_radical_number: string;

  /**
   * CJK radical character from Kangxi Radicals or CJK Radicals Supplement block; may be empty.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/CJKRadicals.txt#L18-L22
   */
  cjk_radical_character: string;

  /**
   * CJK unified ideograph formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/CJKRadicals.txt#L18-L23
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "cjk_radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
