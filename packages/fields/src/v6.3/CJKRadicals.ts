/**
 * Parsed row from `CJKRadicals.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L18-L23
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:16.301Z
 */
export interface CjkRadicals {
  /**
   * The radical number matching [1-9][0-9]{0,2}'?.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L18-L23
   */
  radical_number: "1-9" | "0-9" | (string & {});

  /**
   * The CJK radical character from Kangxi Radicals or CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L18-L21
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L18-L21
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
