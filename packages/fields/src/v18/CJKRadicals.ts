/**
 * Parsed row from `CJKRadicals.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/CJKRadicals.txt#L20-L23
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:40:38.422Z
 */
export interface CjkRadicals {
  /**
   * The CJK radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/CJKRadicals.txt#L20
   */
  cjk_radical_number: string;

  /**
   * The CJK radical character, which may be empty if the CJK radical character is not included in the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/CJKRadicals.txt#L21-L22
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/CJKRadicals.txt#L23
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["cjk_radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
