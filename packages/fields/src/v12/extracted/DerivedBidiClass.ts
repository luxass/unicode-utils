/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:41.464Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range explicitly listed for Bidi_Class.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi class value (listing UnicodeData.txt, field 4).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: "Left_To_Right" | "Right_To_Left" | "Arabic_Letter" | "European_Number" | "Arabic_Number" | "Common_Separator" | "Nonspacing_Mark" | "Boundary_Neutral" | "Paragraph_Separator" | "Segment_Separator" | "Whitespace" | "Other_Neutral" | "Left_To_Right_Embedding" | "Left_To_Right_Override" | "Right_To_Left_Arabic" | "Right_To_Left_Embedding" | "Right_To_Left_Override" | "Pop_Directional_Format";

  /**
   * Optional comment providing additional context for the Bidi class assignment.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class", "comment"];
