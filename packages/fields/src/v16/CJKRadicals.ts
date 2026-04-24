/**
 * Parsed row from `CJKRadicals.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L19-L23
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:19.838Z
 */
export interface CjkRadicals {
  /**
   * CJK radical number matching the regular expression [1-9][0-9]{0,2}'{0,2}.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L19-L20
   */
  cjk_radical_number: string;

  /**
   * CJK radical character, which may be empty if the CJK radical character is not included in the Kangxi Radicals block or the CJK Radicals Supplement block.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L20-L22
   */
  cjk_radical_character: string;

  /**
   * CJK unified ideograph which is formed from that radical only.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CJKRadicals.txt#L23
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["cjk_radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
