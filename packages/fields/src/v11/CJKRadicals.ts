/**
 * Parsed row from `CJKRadicals.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/CJKRadicals.txt#L17-L23
 *
 * @unicodeVersion 11
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:19.058Z
 */
export interface CjkRadicals {
  /**
   * CJK radical number matching the regular expression [1-9][0-9]{0,2}\'?.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/CJKRadicals.txt#L17-L23
   */
  cjk_radical_number: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | (string & {});

  /**
   * There is one line per CJK radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_radical_character: string;

  /**
   * CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["cjk_radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
