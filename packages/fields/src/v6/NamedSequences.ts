/**
 * Parsed row from `NamedSequences.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/NamedSequences.txt#L10
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:45.883Z
 */
export interface NamedSequences {
  /**
   * Name of the character sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/NamedSequences.txt#L10
   */
  name: string;

  /**
   * Code Point Sequence for USI.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/NamedSequences.txt#L10
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name", "code_point_sequence"];
