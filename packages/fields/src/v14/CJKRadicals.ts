/**
 * Parsed row from `CJKRadicals.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CJKRadicals.txt#L17-L20
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:30.468Z
 */
export interface CjkRadicals {
  /**
   * CJK radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_radical_number: string;

  /**
   * CJK radical character in Kangxi Radicals or CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_radical_character: string;

  /**
   * CJK unified ideograph formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "cjk_radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
