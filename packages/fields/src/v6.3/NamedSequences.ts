/**
 * Parsed row from `NamedSequences.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/NamedSequences.txt#L10
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:09.867Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/NamedSequences.txt#L10
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/NamedSequences.txt#L10
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name", "code_point_sequence"];
