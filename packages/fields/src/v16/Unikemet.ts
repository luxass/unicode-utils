/**
 * Parsed row from `Unikemet.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/Unikemet.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Unikemet.txt#L13-L16
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:00.557Z
 */
export interface Unikemet {
  /**
   * The UCS code point value as U+xxxxx.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Unikemet.txt#L13-L16
   */
  code_point: string;

  /**
   * Tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Unikemet.txt#L13-L16
   */
  tag:
    | "kEH_Cat"
    | "kEH_Core"
    | "kEH_Desc"
    | "kEH_Func"
    | "kEH_FVal"
    | "kEH_UniK"
    | "kEH_JSesh"
    | "kEH_HG"
    | "kEH_IFAO"
    | "kEH_NoMirror"
    | "kEH_NoRotate";

  /**
   * The line's value (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Unikemet.txt#L13-L16
   */
  value: string;
}

export const UNIKEMET_FIELDS = ["code_point", "tag", "value"];
