/**
 * Parsed row from `CJKRadicals.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CJKRadicals.txt#L18-L20
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:53.014Z
 */
export interface CjkRadicals {
  /**
   * CJK radical number matching [1-9][0-9]{0,2}'?.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CJKRadicals.txt#L18-L19
   */
  cjk_radical_number: string;

  /**
   * CJK radical character in Kangxi Radicals or CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CJKRadicals.txt#L19-L20
   */
  cjk_radical_character: string;

  /**
   * CJK unified ideograph formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CJKRadicals.txt#L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "cjk_radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
