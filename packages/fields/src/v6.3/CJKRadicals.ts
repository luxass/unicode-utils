/**
 * Parsed row from `CJKRadicals.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L14-L23
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:05.460Z
 */
export interface CjkRadicals {
  /**
   * The radical number matching the regular expression [1-9][0-9]{0,2}'?.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L19-L23
   */
  radical_number: string;

  /**
   * The CJK radical character in the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L14-L20
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L15-L21
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
