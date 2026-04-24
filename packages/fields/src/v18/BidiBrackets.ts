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
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:04.543Z
 */
export interface BidiBrackets {
  /**
   * Unicode code point value, represented as a hexadecimal value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiBrackets.txt#L49
   */
  field_0: string;

  /**
   * Bidi_Paired_Bracket property value, a code point value or <none>.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiBrackets.txt#L50
   */
  field_1: "none" | (string & {});

  /**
   * Bidi_Paired_Bracket_Type property value: o=Open, c=Close, n=None.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiBrackets.txt#L51-L54
   */
  field_2: "o" | "c" | "n";
}

export const BIDI_BRACKETS_FIELDS = ["field_0", "field_1", "field_2"];
