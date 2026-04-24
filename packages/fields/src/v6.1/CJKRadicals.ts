/**
 * Parsed row from `CJKRadicals.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CJKRadicals.txt#L18-L22
 *
 * @unicodeVersion 6.1
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:57.801Z
 */
export interface CjkRadicals {
  /**
   * The radical number matching the regular expression [0-9]{1,3}'?.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CJKRadicals.txt#L18-L22
   */
  radical_number: string;

  /**
   * The CJK Radical character in the CJK Radical block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CJKRadicals.txt#L19-L20
   */
  cjk_radical_character: string;

  /**
   * The CJK Unified Ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CJKRadicals.txt#L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
