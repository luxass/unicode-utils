/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/NamedSequencesProv.txt#L15
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:44.947Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/NamedSequencesProv.txt#L15
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/NamedSequencesProv.txt#L15
   */
  code_point_sequence: string[];
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name", "code_point_sequence"];
