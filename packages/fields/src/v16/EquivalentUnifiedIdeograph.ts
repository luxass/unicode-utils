/**
 * Parsed row from `EquivalentUnifiedIdeograph.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/EquivalentUnifiedIdeograph.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EquivalentUnifiedIdeograph.txt#L23-L26
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:40:23.113Z
 */
export interface EquivalentUnifiedIdeograph {
  /**
   * Code point or code point range represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EquivalentUnifiedIdeograph.txt#L23-L26
   */
  source_codepoint_or_range: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EquivalentUnifiedIdeograph.txt#L25-L26
   */
  equivalent_unified_ideograph: string;
}

export const EQUIVALENT_UNIFIED_IDEOGRAPH_FIELDS = ["source_codepoint_or_range", "equivalent_unified_ideograph"];
