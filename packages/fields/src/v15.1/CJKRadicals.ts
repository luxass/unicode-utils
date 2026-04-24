/**
 * Parsed row from `CJKRadicals.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/CJKRadicals.txt#L15-L25
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:05.288Z
 */
export interface CjkRadicals {
  /**
   * CJK radical number matching the regular expression [1-9][0-9]{0,2}'{0,2}.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/CJKRadicals.txt#L17-L25
   */
  cjk_radical_number: string;

  /**
   * CJK radical character, which may be empty if not included in the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/CJKRadicals.txt#L17-L21
   */
  cjk_radical_character: string;

  /**
   * CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/CJKRadicals.txt#L17-L15
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["cjk_radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
