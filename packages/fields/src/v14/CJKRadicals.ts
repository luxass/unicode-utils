/**
 * Parsed row from `CJKRadicals.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CJKRadicals.txt#L17-L22
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:35.834Z
 */
export interface CjkRadicals {
  /**
   * CJK radical number matching [1-9][0-9]{0,2}'?.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CJKRadicals.txt#L17-L22
   */
  cjk_radical_number: string;

  /**
   * CJK radical character in the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CJKRadicals.txt#L17-L19
   */
  cjk_radical_character: string;

  /**
   * CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["cjk_radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
