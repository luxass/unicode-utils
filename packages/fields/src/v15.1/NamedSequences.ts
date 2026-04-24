/**
 * Parsed row from `NamedSequences.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/NamedSequences.txt#L14-L15
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:19.837Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/NamedSequences.txt#L14-L15
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/NamedSequences.txt#L14-L15
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name", "code_point_sequence"];
