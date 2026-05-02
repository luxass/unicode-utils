/**
 * Parsed row from `BidiBrackets.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/BidiBrackets.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiBrackets.txt#L49-L54
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:10.436Z
 */
export interface BidiBrackets {
  /**
   * Unicode code point value, represented as a hexadecimal value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiBrackets.txt#L49
   */
  code_point: string;

  /**
   * Bidi_Paired_Bracket property value, a code point value or <none>.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiBrackets.txt#L50
   */
  bidi_paired_bracket: "<none>";

  /**
   * Bidi_Paired_Bracket_Type property value: o (Open), c (Close), n (None).
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiBrackets.txt#L51-L54
   */
  bidi_paired_bracket_type: "o" | "c" | "n";
}

export const BIDI_BRACKETS_FIELDS = ["code_point", "bidi_paired_bracket", "bidi_paired_bracket_type"];
