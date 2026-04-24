/**
 * Parsed row from `NamedSequences.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/NamedSequences.txt#L10
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:50.199Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/NamedSequences.txt#L10
   */
  name_of_sequence: string;

  /**
   * Code Point Sequence for USI.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/NamedSequences.txt#L10
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name_of_sequence", "code_point_sequence"];
