/**
 * Parsed row from `NamedSequences.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/NamedSequences.txt#L14-L15
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:53.021Z
 */
export interface NamedSequences {
  /**
   * Name of the character sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/NamedSequences.txt#L14-L15
   */
  name_of_sequence: string;

  /**
   * Code point sequence for USI, space-delimited hexadecimal values.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/NamedSequences.txt#L14-L15
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name_of_sequence", "code_point_sequence"];
