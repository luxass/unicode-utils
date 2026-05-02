/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/NamedSequencesProv.txt#L16
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:47.337Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/NamedSequencesProv.txt#L16
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/NamedSequencesProv.txt#L16
   */
  code_point_sequence: string[];
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name", "code_point_sequence"];
