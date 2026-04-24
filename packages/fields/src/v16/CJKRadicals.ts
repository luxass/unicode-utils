/**
 * Parsed row from `CJKRadicals.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L20-L21
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L23
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:25.579Z
 */
export interface CjkRadicals {
  /**
   * The CJK radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L20
   */
  cjk_radical_number: string;

  /**
   * The CJK radical character, which may be empty if the CJK radical character is not included in the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L21
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L23
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "cjk_radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
