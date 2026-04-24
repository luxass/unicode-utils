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
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:23.677Z
 */
export interface CjkRadicals {
  /**
   * The first field is the CJK radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CJKRadicals.txt#L18-L20
   */
  radical_number: string;

  /**
   * The second field is the CJK radical character.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CJKRadicals.txt#L18-L20
   */
  radical_character: string;

  /**
   * The third field is the CJK unified ideograph.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CJKRadicals.txt#L18-L20
   */
  unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["radical_number", "radical_character", "unified_ideograph"];
