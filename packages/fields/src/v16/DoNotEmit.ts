/**
 * Parsed row from `DoNotEmit.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DoNotEmit.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DoNotEmit.txt#L52-L96
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:54:03.553Z
 */
export interface DoNotEmit {
  /**
   * A sequence of Unicode code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DoNotEmit.txt#L52
   */
  sequence: string;

  /**
   * A replacement sequence of Unicode code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DoNotEmit.txt#L53
   */
  replacement_sequence: string;

  /**
   * DoNotEmit type of the original character sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DoNotEmit.txt#L54-L96
   */
  do_not_emit_type:
    | "Indic_Atomic_Consonant"
    | "Indic_Consonant_Conjunct"
    | "Indic_Vowel_Letter"
    | "Bengali_Khanda_Ta"
    | "Malayalam_Chillu"
    | "Tamil_Shrii"
    | "Dotless_Form"
    | "Hamza_Form"
    | "Precomposed_Form"
    | "Deprecated"
    | "Discouraged"
    | "Preferred_Spelling";
}

export const DO_NOT_EMIT_FIELDS = ["sequence", "replacement_sequence", "do_not_emit_type"];
