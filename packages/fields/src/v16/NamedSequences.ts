/**
 * Parsed row from `NamedSequences.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NamedSequences.txt#L16
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:02.572Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NamedSequences.txt#L16
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NamedSequences.txt#L16
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name", "code_point_sequence"];
