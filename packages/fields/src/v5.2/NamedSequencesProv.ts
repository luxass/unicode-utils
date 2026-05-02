/**
 * Parsed row from `NamedSequencesProv.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/NamedSequencesProv.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NamedSequencesProv.txt#L14-L15
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:23.710Z
 */
export interface NamedSequencesProv {
  /**
   * Name of Sequence; Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NamedSequencesProv.txt#L14-L15
   */
  name_of_sequence: string;

  /**
   * Name of Sequence; Code Point Sequence for USI
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NamedSequencesProv.txt#L14-L15
   */
  code_point_sequence: string;
}

export const NAMED_SEQUENCES_PROV_FIELDS = ["name_of_sequence", "code_point_sequence"];
