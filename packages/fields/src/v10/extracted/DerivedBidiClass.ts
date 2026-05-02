/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedBidiClass.txt#L46
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:16.308Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Bidi_Class=Left_To_Right.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedBidiClass.txt#L46
   */
  code_point_range: string;

  /**
   * =Left_To_Right.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedBidiClass.txt#L46
   */
  bidi_class: "Left_To_Right" | "Right_To_Left" | "Arabic_Letter" | "European_Number" | "European_Separator" | "European_Terminator" | "Arabic_Number" | "Common_Separator" | "Nonspacing_Mark" | "Boundary_Neutral" | "Paragraph_Separator" | "Segment_Separator" | "Whitespace" | "Other_Neutral" | "Left_To_Right_Embedding" | "Left_To_Right_Override" | "Right_To_Left_Arabic" | "Right_To_Left_Embedding" | "Right_To_Left_Override" | "Pop_Directional_Format" | (string & {});
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
