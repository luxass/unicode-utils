/**
 * Parsed row from `NamedSequences.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/NamedSequences.txt#L15
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:42.449Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/NamedSequences.txt#L15
   */
  name_of_sequence: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/NamedSequences.txt#L15
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name_of_sequence", "code_point_sequence"];
