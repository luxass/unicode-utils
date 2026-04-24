/**
 * Parsed row from `ArabicShaping.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/ArabicShaping.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ArabicShaping.txt#L26-L27
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ArabicShaping.txt#L29-L34
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ArabicShaping.txt#L36-L44
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ArabicShaping.txt#L51-L90
 *
 * @unicodeVersion 15
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:14.824Z
 */
export interface ArabicShaping {
  /**
   * The code point, in 4-digit hexadecimal form, of a character.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ArabicShaping.txt#L26-L27
   */
  code_point: string;

  /**
   * A short schematic name for that character. The schematic name is descriptive of the shape, based as consistently as possible on a name for the skeleton and then the diacritic marks applied to the skeleton, if any. Note that this schematic name is considered a comment, and does not constitute a formal property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ArabicShaping.txt#L29-L34
   */
  schematic_name: string;

  /**
   * Defines the joining type (property name: Joining_Type).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ArabicShaping.txt#L36-L44
   */
  joining_type: "R" | "L" | "D" | "C" | "U" | "T";

  /**
   * Defines the joining group (property name: Joining_Group).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ArabicShaping.txt#L51-L90
   */
  joining_group: string;
}

export const ARABIC_SHAPING_FIELDS = [
  "code_point",
  "schematic_name",
  "joining_type",
  "joining_group",
];
