/**
 * Parsed row from `NamedSequences.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/NamedSequences.txt#L16
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:01.802Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/NamedSequences.txt#L16
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/NamedSequences.txt#L16
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name", "code_point_sequence"];
