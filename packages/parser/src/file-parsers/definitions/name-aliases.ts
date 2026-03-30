import type { FileParser } from "../types";

export const NAME_ALIASES_PARSER: FileParser = {
  fileName: "NameAliases",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "codepoint", type: "codepoint" },
    { name: "alias", type: "string-trimmed" },
    { name: "type", type: "string-trimmed" },
  ],
};
