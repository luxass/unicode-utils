/**
 * Parsed row from `EquivalentUnifiedIdeograph.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/EquivalentUnifiedIdeograph.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/EquivalentUnifiedIdeograph.txt#L23-L26
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:55.479Z
 */
export interface EquivalentUnifiedIdeograph {
  /**
   * Code point or code point range represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/EquivalentUnifiedIdeograph.txt#L23-L26
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/EquivalentUnifiedIdeograph.txt#L23-L26
   */
  equivalent_ideograph: string;
}

export const EQUIVALENT_UNIFIED_IDEOGRAPH_FIELDS = ["source_code_point", "equivalent_ideograph"];
