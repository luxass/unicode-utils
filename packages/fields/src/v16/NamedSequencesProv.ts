/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NamedSequencesProv.txt#L17
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:54:22.344Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NamedSequencesProv.txt#L17
   */
  name: string;

  /**
   * Code Point Sequence for USI.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NamedSequencesProv.txt#L17
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name", "code_point_sequence"];
