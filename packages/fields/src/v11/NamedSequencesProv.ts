/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NamedSequencesProv.txt#L15-L16
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:52.921Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NamedSequencesProv.txt#L15-L16
   */
  name: string;

  /**
   * Code Point Sequence for USI.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NamedSequencesProv.txt#L15-L16
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name", "code_point_sequence"];
