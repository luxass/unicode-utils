/**
 * Parsed row from `NameAliases.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/NameAliases.txt#L47-L51
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:07.338Z
 */
export interface NameAliases {
  /**
   * Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/NameAliases.txt#L47-L51
   */
  code_point: string;

  /**
   * Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/NameAliases.txt#L47-L51
   */
  alias: string;

  /**
   * Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/NameAliases.txt#L47-L51
   */
  type: string;
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
