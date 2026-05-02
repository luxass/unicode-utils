/**
 * Parsed row from `NamedSequences.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/NamedSequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NamedSequences.txt#L10
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:02.297Z
 */
export interface NamedSequences {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NamedSequences.txt#L10
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NamedSequences.txt#L10
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_FIELDS = ["name", "code_point_sequence"];
