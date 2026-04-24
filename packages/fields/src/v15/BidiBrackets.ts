/**
 * Parsed row from `BidiBrackets.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/BidiBrackets.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/BidiBrackets.txt#L49-L54
 *
 * @unicodeVersion 15
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:54.423Z
 */
export interface BidiBrackets {
  /**
   * Unicode code point value, represented as a hexadecimal value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/BidiBrackets.txt#L49
   */
  code_point: string;

  /**
   * Bidi_Paired_Bracket property value, a code point value or <none>.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/BidiBrackets.txt#L50
   */
  bidi_paired_bracket: string;

  /**
   * Bidi_Paired_Bracket_Type property value: o=Open, c=Close, n=None.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/BidiBrackets.txt#L51-L54
   */
  bidi_paired_bracket_type: "o" | "c" | "n";
}

export const BIDI_BRACKETS_FIELDS = [
  "code_point",
  "bidi_paired_bracket",
  "bidi_paired_bracket_type",
];
