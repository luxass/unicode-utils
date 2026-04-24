/**
 * Parsed row from `NameAliases.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/NameAliases.txt#L19-L20
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:42.156Z
 */
export interface NameAliases {
  /**
   * First field: Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/NameAliases.txt#L19
   */
  code_point: string;

  /**
   * Second field: Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/NameAliases.txt#L20
   */
  alias: string;
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias"];
