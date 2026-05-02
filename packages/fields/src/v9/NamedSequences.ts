/**
 * Parsed row from `NamedSequences.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NamedSequences.txt#L15
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:33.472Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NamedSequences.txt#L15
   */
  name: string;

  /**
   * Code Point Sequence for USI.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NamedSequences.txt#L15
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name", "code_point_sequence"];
