/**
 * Parsed row from `NameAliases.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NameAliases.txt#L18-L51
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:23:37.912Z
 */
export interface NameAliases {
  /**
   * First field: Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NameAliases.txt#L47-L51
   */
  code_point: string;

  /**
   * Second field: Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NameAliases.txt#L47-L51
   */
  alias: string;

  /**
   * Third field: Type (one of the type labels defined above).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/NameAliases.txt#L18-L51
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
