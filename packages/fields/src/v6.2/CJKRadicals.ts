/**
 * Parsed row from `CJKRadicals.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CJKRadicals.txt#L13-L23
 *
 * @unicodeVersion 6.2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:17.278Z
 */
export interface CjkRadicals {
  /**
   * The radical number used in the kRSUnicode property, matching [0-9]{1,3}'?.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CJKRadicals.txt#L17-L23
   */
  radical_number: string;

  /**
   * The corresponding character in the CJK Radical block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CJKRadicals.txt#L13-L20
   */
  cjk_radical_character: string;

  /**
   * A CJK Unified Ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CJKRadicals.txt#L14-L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
