/**
 * Parsed row from `BidiBrackets.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/BidiBrackets.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiBrackets.txt#L40-L45
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:55.065Z
 */
export interface BidiBrackets {
  /**
   * Unicode code point value, represented as a hexadecimal value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiBrackets.txt#L40
   */
  code_point: string;

  /**
   * Bidi_Paired_Bracket property value, a code point value or <none>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiBrackets.txt#L41
   */
  bidi_paired_bracket: string;

  /**
   * Bidi_Paired_Bracket_Type property value: o=Open, c=Close, n=None.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiBrackets.txt#L42-L45
   */
  bidi_paired_bracket_type: "o" | "c" | "n";
}

export const BIDI_BRACKETS_FIELDS = [
  "code_point",
  "bidi_paired_bracket",
  "bidi_paired_bracket_type",
];
