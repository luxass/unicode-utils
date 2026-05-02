/**
 * Parsed row from `NameAliases.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NameAliases.txt#L18-L20
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:22.585Z
 */
export interface NameAliases {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NameAliases.txt#L18-L20
   */
  code_point: string;

  /**
   * Each line has two fields First field: Code point Second field: Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NameAliases.txt#L18-L20
   */
  alias: string;
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias"];
