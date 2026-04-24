/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NamedSequencesProv.txt#L16
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:50.136Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NamedSequencesProv.txt#L16
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NamedSequencesProv.txt#L16
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name", "code_point_sequence"];
