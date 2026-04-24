/**
 * Parsed row from `ArabicShaping.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L24-L26
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L28-L33
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L35-L41
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L50
 *
 * @unicodeVersion 10
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:34:53.011Z
 */
export interface ArabicShaping {
  /**
   * the code point, in 4-digit hexadecimal form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian, Phags-pa, Manichaean, Psalter Pahlavi, or other character.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L24-L26
   */
  code_point: string;

  /**
   * gives a short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L28-L33
   */
  schematic_name: string;

  /**
   * defines the joining type (property name: Joining_Type)
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L35-L41
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * defines the joining group (property name: Joining_Group)
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ArabicShaping.txt#L50
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
