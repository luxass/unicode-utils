/**
 * Parsed row from `CJKRadicals.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L19-L21
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:53.024Z
 */
export interface CjkRadicals {
  /**
   * The radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L19-L20
   */
  radical_number: string;

  /**
   * The CJK radical character.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L20
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L21
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
