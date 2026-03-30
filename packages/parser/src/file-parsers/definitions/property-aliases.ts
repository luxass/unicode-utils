import type { FileParser } from "../types";

export const PROPERTY_ALIASES_PARSER: FileParser = {
  fileName: "PropertyAliases",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "short_alias", type: "string-trimmed" },
    { name: "long_alias", type: "string-trimmed" },
    { name: "additional_alias", type: "string-trimmed", optional: true },
  ],
};
