/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/NamedSequencesProv.txt#L15
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:31.098Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/NamedSequencesProv.txt#L15
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/NamedSequencesProv.txt#L15
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name", "code_point_sequence"];
