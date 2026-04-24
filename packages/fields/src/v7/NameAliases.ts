/**
 * Parsed row from `NameAliases.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NameAliases.txt#L47-L49
 *
 * @unicodeVersion 7
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:59.139Z
 */
export interface NameAliases {
  /**
   * First field: Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NameAliases.txt#L47
   */
  code_point: string;

  /**
   * Second field: Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NameAliases.txt#L48
   */
  alias: string;

  /**
   * Third field: Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NameAliases.txt#L49
   */
  type: string;
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
