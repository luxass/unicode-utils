/**
 * Parsed row from `NameAliases.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NameAliases.txt#L50-L53
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:01.751Z
 */
export interface NameAliases {
  /**
   * First field: Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NameAliases.txt#L50
   */
  code_point: string;

  /**
   * Second field: Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NameAliases.txt#L51
   */
  alias: string;

  /**
   * Third field: Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NameAliases.txt#L52-L53
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
