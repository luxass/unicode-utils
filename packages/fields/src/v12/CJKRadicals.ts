/**
 * Parsed row from `CJKRadicals.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CJKRadicals.txt#L17-L20
 *
 * @unicodeVersion 12
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:01.313Z
 */
export interface CjkRadicals {
  /**
   * The first field is the CJK radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_radical_number: string;

  /**
   * The second field is the CJK radical character.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_radical_character: string;

  /**
   * The third field is the CJK unified ideograph.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "cjk_radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
