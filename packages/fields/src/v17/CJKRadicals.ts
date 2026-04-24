/**
 * Parsed row from `CJKRadicals.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CJKRadicals.txt#L16-L26
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:18.817Z
 */
export interface CjkRadicals {
  /**
   * The CJK radical number matching the regular expression [1-9][0-9]{0,2}'{0,3}.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CJKRadicals.txt#L18-L26
   */
  cjk_radical_number: string;

  /**
   * The CJK radical character, which may be empty if the CJK radical character is not included in the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CJKRadicals.txt#L18-L22
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CJKRadicals.txt#L18-L16
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "cjk_radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
