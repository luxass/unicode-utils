/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NamedSequencesProv.txt#L15-L16
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:53.815Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NamedSequencesProv.txt#L15-L16
   */
  name: string;

  /**
   * Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NamedSequencesProv.txt#L15-L16
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name", "code_point_sequence"];
