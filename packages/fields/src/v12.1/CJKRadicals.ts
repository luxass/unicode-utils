/**
 * Parsed row from `CJKRadicals.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CJKRadicals.txt#L18-L20
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:17.988Z
 */
export interface CjkRadicals {
  /**
   * fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CJKRadicals.txt#L18
   */
  cjk_radical_number: string;

  /**
   * The CJK radical character in the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CJKRadicals.txt#L19
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CJKRadicals.txt#L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["cjk_radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
