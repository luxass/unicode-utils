/**
 * Parsed row from `BidiBrackets.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/BidiBrackets.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiBrackets.txt#L48-L55
 *
 * @unicodeVersion 13
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:39.330Z
 */
export interface BidiBrackets {
  /**
   * Unicode code point value, represented as a hexadecimal value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiBrackets.txt#L48-L49
   */
  code_point: string;

  /**
   * Bidi_Paired_Bracket property value, a code point value or <none>.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiBrackets.txt#L48-L50
   */
  bidi_paired_bracket: string;

  /**
   * Bidi_Paired_Bracket_Type property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiBrackets.txt#L48-L51
   */
  bidi_paired_bracket_type: "o" | "c" | "n";

  /**
   * Names of the characters in field 0.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiBrackets.txt#L48-L55
   */
  comment: string;
}

export const BIDI_BRACKETS_FIELDS = [
  "code_point",
  "bidi_paired_bracket",
  "bidi_paired_bracket_type",
  "comment",
];
