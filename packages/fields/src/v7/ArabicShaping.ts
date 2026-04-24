/**
 * Parsed row from `ArabicShaping.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ArabicShaping.txt#L23-L25
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ArabicShaping.txt#L27-L32
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ArabicShaping.txt#L34-L40
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ArabicShaping.txt#L49-L73
 *
 * @unicodeVersion 7
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:59.816Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian, Phags-pa, Manichaean, Psalter Pahlavi, or other character.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ArabicShaping.txt#L23-L25
   */
  code_point: string;

  /**
   * gives a short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ArabicShaping.txt#L27-L32
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type)
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ArabicShaping.txt#L34-L40
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group (property name: Joining_Group)
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ArabicShaping.txt#L49-L73
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = ["code_point", "schematic_name", "joining_type", "joining_group"];
