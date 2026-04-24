/**
 * Parsed row from `CJKRadicals.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L18-L24
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:05.029Z
 */
export interface CjkRadicals {
  /**
   * The radical number matching the regular expression [1-9][0-9]{0,2}'?.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L18-L24
   */
  radical_number: string;

  /**
   * The CJK radical character from the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L18-L20
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L18-L21
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
