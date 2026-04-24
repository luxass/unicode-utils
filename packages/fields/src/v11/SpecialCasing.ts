/**
 * Parsed row from `SpecialCasing.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L34-L36
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L39-L46
 *
 * @unicodeVersion 11
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:45.588Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * <lower> provide the respective full case mappings of <code>, expressed as character values in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L34-L36
   */
  lower: string;

  /**
   * <title> provide the respective full case mappings of <code>, expressed as character values in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L34-L36
   */
  title: string;

  /**
   * <upper> provide the respective full case mappings of <code>, expressed as character values in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L34-L36
   */
  upper: string;

  /**
   * Optional <condition_list> consists of one or more language IDs or casing contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L39-L46
   */
  condition_list: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list"];
