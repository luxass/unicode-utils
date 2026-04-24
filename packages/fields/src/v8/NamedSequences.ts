/**
 * Parsed row from `NamedSequences.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/NamedSequences.txt#L12-L13
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:44.437Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/NamedSequences.txt#L12-L13
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/NamedSequences.txt#L12-L13
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name", "code_point_sequence"];
