/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NamedSequencesProv.txt#L17
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:15.187Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NamedSequencesProv.txt#L17
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NamedSequencesProv.txt#L17
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name", "code_point_sequence"];
