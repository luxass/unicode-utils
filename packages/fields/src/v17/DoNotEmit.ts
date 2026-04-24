/**
 * Parsed row from `DoNotEmit.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/DoNotEmit.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DoNotEmit.txt#L65-L108
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:21.356Z
 */
export interface DoNotEmit {
  /**
   * A sequence of Unicode code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DoNotEmit.txt#L65
   */
  sequence: string;

  /**
   * A replacement sequence of Unicode code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DoNotEmit.txt#L66
   */
  replacement_sequence: string;

  /**
   * DoNotEmit type of the original character sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DoNotEmit.txt#L67-L108
   */
  do_not_emit_type:
    | "Indic_Atomic_Consonant"
    | "Indic_Consonant_Conjunct"
    | "Indic_Vowel_Letter"
    | "Bengali_Khanda_Ta"
    | "Malayalam_Chillu"
    | "Tamil_Shrii"
    | "Dotless_Form"
    | "Arabic_Tashkil"
    | "Hamza_Form"
    | "Precomposed_Form"
    | "Deprecated"
    | "Discouraged"
    | "Preferred_Spelling";
}

export const DO_NOT_EMIT_FIELDS = ["sequence", "replacement_sequence", "do_not_emit_type"];
