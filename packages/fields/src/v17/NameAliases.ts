/**
 * Parsed row from `NameAliases.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/NameAliases.txt#L50-L53
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:12.442Z
 */
export interface NameAliases {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/NameAliases.txt#L50
   */
  code_point: string;

  /**
   * Second field: Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/NameAliases.txt#L51
   */
  alias: string;

  /**
   * Third field: Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/NameAliases.txt#L52-L53
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
