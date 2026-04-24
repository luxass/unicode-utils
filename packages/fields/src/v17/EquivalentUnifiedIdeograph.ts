/**
 * Parsed row from `EquivalentUnifiedIdeograph.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/EquivalentUnifiedIdeograph.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/EquivalentUnifiedIdeograph.txt#L23-L26
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:38.026Z
 */
export interface EquivalentUnifiedIdeograph {
  /**
   * Code point or code point range represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/EquivalentUnifiedIdeograph.txt#L23-L26
   */
  source_codepoint: string;

  /**
   * Equivalent CJK unified ideograph code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/EquivalentUnifiedIdeograph.txt#L23-L26
   */
  equivalent_codepoint: string;
}

export const EQUIVALENT_UNIFIED_IDEOGRAPH_FIELDS = ["source_codepoint", "equivalent_codepoint"];
