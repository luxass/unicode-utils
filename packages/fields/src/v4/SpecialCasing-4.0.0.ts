/**
 * Parsed row from `SpecialCasing-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/SpecialCasing-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19-L26
 *
 * @unicodeVersion 4
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:01.003Z
 */
export interface SpecialCasing400 {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  upper: string;

  /**
   * Optional space-separated list of locales or contexts (e.g. 'lt tr Final_Sigma').
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19-L26
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  comment: string;
}

export const SPECIAL_CASING_400_FIELDS = [
  "code",
  "lower",
  "title",
  "upper",
  "condition_list",
  "comment",
];
