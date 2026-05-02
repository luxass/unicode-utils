/**
 * Parsed row from `BidiBrackets.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/BidiBrackets.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiBrackets.txt#L39-L45
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:33.995Z
 */
export interface BidiBrackets {
  /**
   * Unicode code point value, represented as a hexadecimal value.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiBrackets.txt#L39-L41
   */
  codepoint: string;

  /**
   * Bidi_Paired_Bracket property value, a code point value or <none>.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiBrackets.txt#L39-L42
   */
  bidi_paired_bracket: "none" | (string & {});

  /**
   * Bidi_Paired_Bracket_Type property value: o (Open), c (Close), n (None).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiBrackets.txt#L39-L45
   */
  bidi_paired_bracket_type: "o" | "c" | "n";
}

export const BIDI_BRACKETS_FIELDS = ["codepoint", "bidi_paired_bracket", "bidi_paired_bracket_type"];
