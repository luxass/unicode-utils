/**
 * Parsed row from `NameAliases.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NameAliases.txt#L47-L51
 *
 * @unicodeVersion 15
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:00.291Z
 */
export interface NameAliases {
  /**
   * First field: Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NameAliases.txt#L47-L51
   */
  code_point: string;

  /**
   * Second field: Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NameAliases.txt#L47-L51
   */
  alias: string;

  /**
   * Third field: Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NameAliases.txt#L47-L51
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
