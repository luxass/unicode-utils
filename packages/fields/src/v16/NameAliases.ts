/**
 * Parsed row from `NameAliases.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NameAliases.txt#L50-L56
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:02:01.878Z
 */
export interface NameAliases {
  /**
   * First field:  Code point
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NameAliases.txt#L50
   */
  code_point: string;

  /**
   * Second field: Alias
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NameAliases.txt#L51
   */
  alias: string;

  /**
   * Third field:  Type. The type labels used are defined above.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NameAliases.txt#L52-L56
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
